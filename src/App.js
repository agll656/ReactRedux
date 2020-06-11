import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { useState } from 'react';


function App(props){
  console.log("props", props)

  // const [Age, setAge] = useState(21);

  return (
    <div className="App">
      <div>Age: <span>{props.Age}</span></div>
      <button onClick={props.onAgeUp }>Age Up </button>
      <button onClick={props.onAgeDown}>Age Down</button>
    </div>
    );
  }

// map to props
const mapStateToProps = (state) => {
  return {
    Age: state.Age
  }
}

// map to actions
const mapDispatchToProps= (dispatch) => {
  return {
    onAgeUp : () => dispatch({type: 'AGE_UP'}),
    onAgeDown: () => dispatch({type: 'AGE_DOWN'})
  }
}

// connect is used to connect to the store
// we pass it 2 funcitons mapStateToProps and mapDispatchToProps. 
export default connect(mapStateToProps, mapDispatchToProps)(App);

