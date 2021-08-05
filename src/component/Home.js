import {React,useState} from 'react'
import Date from './Date'
import Card1 from './card/Card1'
import Card2 from './card/Card2'
import Card3 from './card/Card3'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import {Box,Grid,TextField,Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
const useStyles = makeStyles({
    root:{
        border: 1,
        borderRadius: 3
    }
})

const Home = (props) => {
    const [progress,setProgress]=useState(false)
    const [Country, setCountry] = useState('')
    const [date, setDate] = useState();
    const history = useHistory();
    const abc= async()=>{
                if(date!=='' && Country!==''){
                setProgress(true)
                const options = {
                    method: 'GET',
                    url: 'https://covid-193.p.rapidapi.com/history',
                    params: {country:Country, day: date},
                    headers: {
                    'x-rapidapi-key': '2f971ccf78msh9ce3ad44e22219cp1eb36cjsnee190d87a509',
                    'x-rapidapi-host': 'covid-193.p.rapidapi.com'
                    }
                };
                
            await axios.request(options).then(function (response) {
                    if(response.data.results>0)
                    {
                        props.valid(true)
                    }
                    else{
                        props.valid(false)
                    }
                    props.setResult(response.data.response[response.data.results-1]) 
                    console.log(response.data)          
                }).catch(function (error) {
                    console.error(error);
                    alert('Please Enter Valid Data..')
                });
                setDate('')
                history.push('/search')
              
       }
    else{
        alert("ENTER VALUE")
    }


}
   
    const classes = useStyles();
   
    return (
        <div>
           {(progress)?<LinearProgress />:''}
          <form noValidate autoComplete='off' className={classes.root} >
             <Grid container justifyContent='center'spacing={3}>
                    <Grid item >
                    <TextField 
                     id="standard-basic" 
                     label="Country" 
                     name='country'
                     value={Country}
                     onChange={(e)=>setCountry(e.target.value)} 
                     required
                     />
                    </Grid>
                    <Grid item>
                     <Date date={date} setDate={setDate}/>
                    </Grid>
                    <Box mt={3}>
                    <Button variant="outlined" color="primary" onClick={()=>abc()}>Search</Button>
                    </Box>
            </Grid> 
            <Grid container justifyContent="center" spacing={4}>
                 <Grid item xs={12}>
                     <Card1/>
                 </Grid> 
                 <Grid item >
                     <Card2/>
                 </Grid> 
                 <Grid item >
                     <Card3/>
                 </Grid>  
                 <Grid item >
                     <Card3/>
                 </Grid>  
            </Grid>
          </form>  
        </div>
    )
}

export default Home
