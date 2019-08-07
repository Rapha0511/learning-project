import React from 'react';
import logo from './logo.svg';
import Navbar from './Navbar.js';
import Slidebar from './Slidebar.js';
import Mainpage from './Mainpage.js';
import Watch from './watch.js'
import Contact from './Contact.js';
import Admin from './admin.js';

import{
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom'

class App extends React.Component{

  state = {
    token : null,

  }

  setToken = token => this.setState({token})


  render (){
    return(
      
<Router>    
<Navbar onToken = {this.setToken} token = {this.state.token}/>
      <Switch>
        <Route exact path = '/Admin' component = {Admin}/>
        <Route exact path = '/Mainpage' component = {Mainpage}/>
        <Route exact path ='/watch/:id' component = {Watch}/>
        <Route exact path ='/contact' render = {()=>(
          <Contact token ={this.state.token}/>
        )}/>

        <Redirect from = '/' to='/Mainpage' />
        
      </Switch>
 </Router>

);
}}


export default App;