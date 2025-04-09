import React from "react";


const ChildComponent1 =({props})=>{

    return(
        <div style={{backgroundColor: "brown"}}>

            <button onClick={()=>props("Option 1")}>Option1</button> 


        </div>
    )
}
export default ChildComponent1;