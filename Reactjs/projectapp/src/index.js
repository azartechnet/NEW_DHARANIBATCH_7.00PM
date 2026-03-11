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

/*function Welcome(props)//Argument passing or parameter passing
{
  return(
    <div>
      <h1>Hello,{props.name}</h1>
      <h2>Your age is::{props.age}</h2>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Welcome name="azar" age="38"/>)*/

//Component in Component

/*function Component1()
{
  return(
    <div>
      <h1>Hello</h1>
      <p>Component-1</p>
      <Component2/>
    </div>
  )
}
function Component2()
{
  return(
    <div>
      <h1>Component-2</h1>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Component1/>)*/

//Constructor using super

/*class Sample extends React.Component
{
  constructor()
  {
    super();
    this.state={name:"Azar",age:35}
  }
  render()
  {
     return(
      <div>
        <h1>Hello{this.state.name}{this.state.age}</h1>
      </div>
     )
  }
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//constructor using props

/*class Sample extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={name:props.name,age:props.age}
  }
  render()
  {
     return(
      <div>
        <h1>Hello{this.state.name}{this.state.age}</h1>
      </div>
     )
  }
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample name="Azar" age="38"/>)*/

/*class Counter extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={count:0}
  }
  increment=()=>{
    this.setState({count:this.state.count+1})
  }
  decrement=()=>{
    this.setState({count:this.state.count-1})
  }
  render()
  {
    return(
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Counter/>)*/

//Changing the state object

/*class Counter extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={name:"Azar",age:38};
    this.handleChange=this.handleChange.bind(this);
  }
  handleChange()
  {
    this.setState({name:"mohamed",age:55})
  }
  render()
  {
    return(
      <div>
        <h1>Name is::{this.state.name}</h1>
        <p>Age is::{this.state.age}</p>
        <button onClick={this.handleChange}>Change</button>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Counter/>)*/

//Event in Reactjs

/*function Football()
{
  const shoot=()=>{
    // alert("Great shot!!!")
    var a=prompt("Enter the a value is::")
    alert("Your value is::"+a)
  }
  return(
    <div>
      <button onClick={shoot}>Take the shot!!!!</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)*/

//React event based on arguments

/*function Football()
{
  const shoot=(a)=>{
    alert(a);
  }
  return(
    <div>
      <button onClick={()=>shoot("Welcome")}>ClickHere</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)*/

/*function MissedGoal()
{
  return<h1>Missed Goal</h1>
}
function MadeGoal()
{
  return<h1>Goal</h1>
}
function Football(props)
{
  const isGoal=props.isGoal;
  return(
    <div>
      <h1>Football Game</h1>
      {isGoal ? <MadeGoal/>:<MissedGoal/>}
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football isGoal={Math.random()>0.5}/>);*/

//Event Binding in class component

/*class Football extends React.Component
{
  shoot=a=>{
    alert(a)
  }
  render()
  {
    return(
      <div>
        <h1>Footbal Game</h1>
        <button onClick={()=>this.shoot("azar!!!")}>Shoot</button>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)*/

//using class

/*class Football extends React.Component
{
  render()
  {
    const isGoal=this.props.isGoal;
    if(isGoal)
    {
      return<h1>Goal!!!</h1>
    }
    else
    {
      return<h1>Missed Goal</h1>
    }
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football isGoal={Math.random()>0.5}/>)*/

//Event using Form

function MyForm()
{
  let text="";
  const hs=()=>{
    // alert("Form Submitted..")
    let n=prompt("Enter the n value is::")
    if(n%2==0)
    {
      text="Its is Even"
    }
    else
    {
      text="Its is Odd"
    }
  }
  return(
    <div>
      <form onSubmit={hs}>
        
        <input type="submit" value="submit"/>
        Your value is::{text}
      </form>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<MyForm/>)