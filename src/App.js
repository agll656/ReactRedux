import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

import ChildComponent from './components/ChildComponent';
import Age from './components/Age';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom' ;
import RouteMapper from './Routes/Routes';
import AgeContainer from './Containers/Age.container';

function App(props){
  console.log("props", props)
  
  return (
    <Router>
      <Switch>

        <div className="App">    
          <ul>
            <li>
              {/* link is used to just make clickable url  */}
              <Link to={RouteMapper.HOME.path} >App</Link><br/>
            </li>
            <li> <Link to={RouteMapper.CHILD.path}>ChildComponent</Link><br/></li>
            <li> <Link to={RouteMapper.AGE.path}>Age</Link></li>
          </ul> 
          <Route exacr path={RouteMapper.HOME.path} render= {() => <h1>Home page with</h1>} />
          <Route exact path= {RouteMapper.CHILD.path} component={ChildComponent}/>
          <Route exact path= {RouteMapper.AGE.path} component={AgeContainer} />
        </div>

     </Switch>
    </Router>
    );
  }
  export default App;


