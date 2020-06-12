
import React from 'react'


const ChildComponent = (props) => {
    console.log("props in child", props)
    return(
        <div>
            <button onClick={props.changeTitle}>{props.title}</button>
        </div>
    )
}

export default ChildComponent;