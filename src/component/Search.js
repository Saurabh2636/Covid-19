import React from 'react'
import Total from './Data/Total'

import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Today from './Data/Today'
import Vaccinated from './Data/Vaccinated'

const useStyles = makeStyles((theme)=>{
    return{
       
   
}
 })
const Search = (props) => {
    const classes = useStyles();
 
    return (
        <div className={classes.pages}>
            <Typography 
              variant='h4'
              color='secondary' 
              align='center'>
             Your Data
            </Typography>
         
            <Typography variant='h4'>
              {props.Result.cases.country}
            </Typography> 
            <Typography variant='h4'>
              {props.Result.cases.continent}
            </Typography>   
  
      
        <Grid container alignContent='center'  direction='column' spacing={4}> 
            <Grid item>
               <Total Result={props.Result}/>
            </Grid>
            <Grid item>
               <Today Result={props.Result}/>
            </Grid>
            <Grid item>  
              <Vaccinated Result={props.Result}/>
            </Grid> 
        </Grid>   
      
        </div>

    )
}

export default Search
