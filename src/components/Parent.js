import React, {useState} from "react"
import ChildComponent1 from './ChildComponent1'
import ChildComponent2 from "./ChildComponent2";

const Parent =()=>{

    const [value,SetValue] = useState('');
    console.log(value);
    return (
      <div style={{backgroundColor:"rgb(80, 222, 104)"}}>
          <h1>Parent Component</h1>
          
          <ChildComponent1
            props={SetValue}
          />
          <ChildComponent2
            props={SetValue}
          />
          <p>Selected Option:{value}</p>
      </div>
    )
    
}

export default Parent;