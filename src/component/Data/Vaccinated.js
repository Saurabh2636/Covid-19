import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import {useHistory} from 'react-router-dom'
import Button from '@material-ui/core/Button'
const Vaccinated=(props)=> {
  const history = useHistory();
     return (
     <div>
    <Box m='auto' border={1}> 
        <Typography
            variant='h5'
            color='inherit'>
              Total Test..
          </Typography>
     <Grid container justifyContent='center' spacing={10}>
           <Grid item>
               <Typography variant='h5'>
                 Total test                     
               </Typography>   
               <Typography variant='h5'>
                 {props.Result.tests.total}                  
               </Typography>  
           </Grid>
           <Grid item>
           <Typography variant='h5'>
                 Test per million                        
               </Typography>   
               <Typography variant='h5'>
               336741                  
               </Typography> 
           </Grid>
           <Grid item>
           <Typography variant='h5'>
                 Total Population.                       
               </Typography>   
               <Typography variant='h5'>
                 {props.Result.population}                 
               </Typography> 
           </Grid>
          
       </Grid>
        
   </Box>
   <Box mt={3}>
   <Button variant="contained" color="primary" onClick={()=>{history.push('/Covid-19')}}>
      Home
  </Button>
  </Box>
  </div> 
 )}
 export default Vaccinated
