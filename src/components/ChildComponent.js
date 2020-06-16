import { useState } from 'react';
import React from 'react';


const ChildComponent = (props) => {
    
    const [title, changeTitle] = useState("oldTitle");
   
    return(
        <div>
            <p>Welcome to child compnenet, Click button below</p>
            <button onClick={ () => changeTitle("NewTitle")} > {title} </button>
        </div>
    )
}

export default ChildComponent;