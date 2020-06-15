import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { useState } from 'react';
import ChildComponent from './components/ChildComponent';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom' ;


function App(props){
  console.log("props", props)
  
  const [title, changeTitle] = useState("oldTitle");

  return (
    <Router>
    <div className="App">

      {/* <Route path="/child" exact Component={ChildComponent} /> */}

    
      <ul>
        <li>
          {/* link is used to just make clickable url  */}
          <Link to="/home">App</Link><br/>
          <Link to="/child">ChildComponent</Link>
        </li>
      </ul> 

      <div>Age: <span>{props.Age}</span></div>
      <button onClick={props.onAgeUp }>Age Up </button>
      <button onClick={props.onAgeDown}>Age Down</button>
      <ul>
          {
            props.ageArr.map((arr) => 
            (<li key= {arr.id} onClick={()=> props.onAgeDel(arr.id)}> 
            {arr.Age}  
              
              </li>))  
          }
      
      </ul>
  
      {/* <ChildComponent title={title} changeTitle= {() => changeTitle("NewTitle")} /> */}
    </div>
    <Switch>
      {/* <Route exact path="/home" component={App}></Route> */}
    </Switch>
    </Router>
    );
  }

// map to props; basically gets Age from the store after we connect it to store using connect
const mapStateToProps = (state) => {
  return {
    Age: state.Age,
    ageArr: state.ageArr
  }
}

// map to actions. The actions we define below will be connected to store and action will be defined in the reducer
const mapDispatchToProps= (dispatch) => {
  return {
    onAgeUp : () => dispatch({type: 'AGE_UP', payload: 10}),
    onAgeDown: () => dispatch({type: 'AGE_DOWN', payload: 7}),
    onAgeDel: (id) => dispatch({type: 'AGE_DEL', payload: id})
  }
}

// connect is used to connect to the store
// we pass it 2 funcitons mapStateToProps and mapDispatchToProps. 
export default connect(mapStateToProps, mapDispatchToProps)(App);
// React Redux's <Provider> component uses <ReactReduxContext.Provider> to put the Redux store and the current store state into context
// connect uses <ReactReduxContext.Consumer> to read those values and handle update
