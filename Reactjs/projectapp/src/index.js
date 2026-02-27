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

/*const Sample=()=>{
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
r1.render(<Sample/>)*/

//React without jsx

//const myelemt1=React.createElement("h1",null,"welcome");
// const myelemt2=React.createElement("p",null,"This is paragraph");
// const r1=ReactDOM.createRoot(document.getElementById("root"))
// r1.render(myelemt2);

//LoginForm

/*const Login=()=>{
  return(
    <>
     <label>UserName</label>
     <input type="text" />
     <label>Password</label>
     <input type="password"/>
     <input type="submit" value="Login"/>
    </>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Login/>)*/

/*const myElement = (
  <div>
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
  <ol>
<li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ol>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);*/

//Conditional Rendering

const x=20;
let text="";
if(x>10)
{
  text="x is greater than 10";
}
else
{
  text="x is less than 10";
}
const MyElem=()=>{
  return(
    <div>
      <h1>{text}</h1>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<MyElem/>)


