
import React, { Component } from "react";
import { connect } from "react-redux";
import {AgeContainer} from "../Containers/Age.container";

function Age(props){
    console.log("age props ", props)

    return (
        <div>
            <p>testtttAge</p>
            <div>Age: <span>{props.age}</span></div>
            <button onClick={props.onAgeUp }>Age Up </button>
            <button onClick={props.onAgeDown}>Age Down</button>
            <ul>
                {
                props.ageArr.map((arr) => 
                (<li key= {arr.id} onClick={()=> props.onAgeDel(arr.id)}> 
                {arr.age}  
                    
                    </li>))  
                }
            
            </ul> 

        </div>
    )

}

// map to props; basically gets Age from the store after we connect it to store using connect
// const mapStateToProps = (state) => {
//     console.log("errrrr")
//     return {
//         Age: state.Age,
//         ageArr: state.ageArr
//   }
// }

// const mapDispatchToProps= (dispatch) => {

//     return {
//         onAgeUp : () => dispatch({type: 'AGE_UP', payload: 10}),
//         onAgeDown: () => dispatch({type: 'AGE_DOWN', payload: 7}),
//         onAgeDel: (id) => dispatch({type: 'AGE_DEL', payload: id})
//     }
//   }

// map to actions. The actions we define below will be connected to store and action will be defined in the reducer
export default (Age);


// connect is used to connect to the store
// we pass it 2 funcitons mapStateToProps and mapDispatchToProps. 
// React Redux's <Provider> component uses <ReactReduxContext.Provider> to put the Redux store and the current store state into context
// connect uses <ReactReduxContext.Consumer> to read those values and handle update