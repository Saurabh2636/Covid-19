import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
const Total=(props)=> {
     return (
    <Box m='auto' border={1}> 
    
        <Typography
            variant='h5'
            color='inherit'
            >
              Corona Till Now..
          </Typography>
     <Grid container justifyContent='center' spacing={10}>
              
           <Grid item>
               <Typography variant='h5'>
                 Total cases..                        
               </Typography>   
               <Typography variant='h5'>
                 {  props.Result.cases.total}                  
               </Typography>  
           </Grid>
           <Grid item>
           <Typography variant='h5'>
                Recovered cases.           
               </Typography>   
               <Typography variant='h5'>
                 {  props.Result.cases.recovered}                   
               </Typography> 
           </Grid>
           <Grid item>
           <Typography variant='h5'>
                 Total Death..                      
               </Typography>   
               <Typography variant='h5'>
                 {  props.Result.deaths.total}                   
               </Typography> 
           </Grid>
       </Grid>
   </Box>
 )}
 export default Total
