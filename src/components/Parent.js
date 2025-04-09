import React, { useState } from "react";
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

const App = () => {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <div className="parent" style={{ backgroundColor: "rgb(80, 222, 104)", padding: "20px" }}>
      <h1>Parent Component</h1>

      <ChildComponent1 onSelect={setSelectedOption} />
      <ChildComponent2 onSelect={setSelectedOption} />

      <p>Selected Option: {selectedOption}</p>
    </div>
  );
};

export default App;
