
import React, { Component } from "react";
import { connect } from "react-redux";
import Age from "../components/Age";

const AgeContainer = (props) => {
    console.log("age container", props)

    const {
        age,
        ageArr,
        onAgeDel,
        onAgeDown,
        onAgeUp 
    }= props;

    return (

        <div>
            <Age age={age}
            ageArr={ageArr}
            onAgeDel={onAgeDel}
            onAgeDown={onAgeDown}
            onAgeUp= {onAgeUp}/>
        </div>

    )
       
}


// map to props; basically gets Age from the store after we connect it to store using connect
const mapStateToProps = (state) => {

    return {
        age: state.age,
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
  
//   connect(mapStateToProps,  mapDispatchToProps)(AgeContainer);
export default connect(mapStateToProps, mapDispatchToProps)(AgeContainer);
  // connect is used to connect to the store
  // we pass it 2 funcitons mapStateToProps and mapDispatchToProps. 
  // React Redux's <Provider> component uses <ReactReduxContext.Provider> to put the Redux store and the current store state into context
  // connect uses <ReactReduxContext.Consumer> to read those values and handle update