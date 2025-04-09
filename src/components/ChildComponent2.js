import React from "react"



const ChildComponent2 =({props})=>{

    return(
        <div style={{backgroundColor: "yellow"}}>

            <button onClick={()=>props("Option2")}>Option2</button> 


        </div>
    )
}
export default ChildComponent2;