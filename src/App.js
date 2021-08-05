import {React,useState} from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Home from './component/Home'
import Search from './component/Search'
import {createTheme} from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/core/styles'
import {purple} from '@material-ui/core/colors'
import Layout from '../src/component/Layout/Layout'

const theme = createTheme({
  pallete:{
    primary:{
      main:'#fefefe'
    },
    secondary:purple
  }
})
const App = () => {
const [Result, setResult] = useState()
const [valid , setValid ] = useState(false)
console.log("result" +Result)
return (
    <ThemeProvider theme={theme}>
   <Router>
     <Layout>
       <Switch>
         <Route exact path='/'><Home setResult={setResult} valid={setValid}/></Route>
         {(valid)?<Route exact path='/search'><Search Result={Result}/></Route>:<h1 align='center'>No Data Found..</h1>}
       </Switch>
     </Layout>
   </Router>
    </ThemeProvider>
  )
}

export default App
