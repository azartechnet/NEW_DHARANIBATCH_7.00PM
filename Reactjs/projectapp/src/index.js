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

/*const x=20;
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
r1.render(<MyElem/>)*/

/*var pid=parseInt(prompt("Enter the pid is::"))
let text="";
if(pid==1001)
{
  text="pid is equal"
}
else
{
  text="pid is not equal"
}

const Myelm=()=>{
  return(
    <div>
      <h1>{text}</h1>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Myelm/>)*/

/*import './index.css'
import './style.css'
const App=()=>{
  return(
    <h1>Welcome</h1>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/
//Function Component

/*function Sample()
{
  return(
    <div>
      <h1>This is function Component</h1>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

/*function Greeting()
{
  const name="azar";
  const age=38;
  return(
    <div>
      <h1>Hello,{name}</h1>
      <p>Your age is::{age}</p>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Greeting/>)*/

//class component

/*class Sample extends React.Component
{
  render()
  {
    return(
      <div>
        <h1>This is class component</h1>       
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//using onclick event

/*function SimpleButton()
{
   alert("This is Simple Button")

return(
  <div>
    <button onClick={SimpleButton}>ClickHere</button>
  </div>
)
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<SimpleButton/>)*/

//using props

function Welcome(props)//Argument passing or parameter passing
{
  return(
    <div>
      <h1>Hello,{props.name}</h1>
      <h2>Your age is::{props.age}</h2>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Welcome name="azar" age="38"/>)

