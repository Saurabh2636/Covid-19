import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

const Today=(props)=> {
     return (
    <Box m='auto' border={1}> 
        <Typography
            variant='h5'
            color='inherit'>
              Corona Today..
          </Typography>
     <Grid container justifyContent='center' spacing={10}>
           <Grid item>
               <Typography variant='h5'>
                 New Cases                        
               </Typography>   
               <Typography variant='h5'>  
                 {  props.Result.cases.new}                
               </Typography>  
           </Grid>
           <Grid item>
           <Typography variant='h5'>
                 Death                       
               </Typography>   
               <Typography variant='h5'>
                 {  props.Result.deaths.new}                   
               </Typography> 
           </Grid>
           <Grid item>
           <Typography variant='h5'>
                 Critical                        
               </Typography>   
               <Typography variant='h5'>
                 {  props.Result.cases.critical}                  
               </Typography> 
           </Grid>
       </Grid>
   </Box>
 )}
 export default Today
