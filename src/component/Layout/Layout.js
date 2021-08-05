import React from 'react'
import { makeStyles } from '@material-ui/styles'
import AppBar from '@material-ui/core/Appbar'
import Toolbar from '@material-ui/core/Toolbar'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
const useStyles = makeStyles((theme)=>{
    return {
     appBar:{
         background:'#f2f2f2'
     },
     toolbar:theme.mixins.toolbar
    }
})
const Layout = ({children}) => {
   
    const classes= useStyles();
    return (
        <div> 
             
         <Container>
       
             <AppBar className={classes.appBar}>
                 <Toolbar>
                
                     <Typography variant='h6' color='primary'>
                      CoApp
                      </Typography>
                 </Toolbar>
             </AppBar>
         </Container>
         <div className={classes.toolbar}></div>
        
           {children}   
        </div>
    )
}

export default Layout
