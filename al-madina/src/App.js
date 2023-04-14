import React, {Component}from "react"
import{BrowserRouter,Switch,Route} from "react-router-dom";
import Home from "./components/Home";
import Addproduct from "./components/Addproduct";
export class App extends Component {
  render(){
  return (
   <BrowserRouter>
   <Switch>
<Route exact path= "/" component={Home}/>
<Route path= "/addproduct"component={Addproduct}/>
   </Switch>
   </BrowserRouter>
  )
}
}

export default App