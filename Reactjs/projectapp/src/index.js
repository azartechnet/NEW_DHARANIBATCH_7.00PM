import React from "react";
import ReactDOM from "react-dom/client";
//Basic Rendering
/*const App=()=>{
  return(
    <h1>This is Demo</h1>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'));
r1.render(<App/>)*/

//Dynamic Rendering

const Sample=()=>{
  const name="azar";
  const age=40;
  return(
    <div>
      <h1>Hello,{name}</h1>
      <p>You age is::{age}</p>
      <p>Todays date is::{new Date().toLocaleDateString()}</p>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'));
r1.render(<Sample/>)