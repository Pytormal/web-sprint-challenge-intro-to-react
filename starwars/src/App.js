import React from "react";
import "./App.css";
import Characters from "./components/Characters";


const App = () => {
  //  Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

 
  //Remember, anytime you have a side effect in a component, you want to think about which state and/or props it should

  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <h2>Life is Fun</h2>
      <div>
        <div>StarWars API</div>
     <Characters /> 
      </div>
    </div>
  );
};

export default App;
