import React, { useEffect, useState } from "react";
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

/*function MyForm()
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
r1.render(<MyForm/>)*/

//React List using Map

/*function MyList()
{
  const items=["item1","item2","item3","item4"]
  return(
    <div>
      <h1>MyList</h1>
      <ul>
        {items.map((item,index)=>(
          <li key={index}>{item}{index}</li>
        ))}
      </ul>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<MyList/>)*/

//React List using Map with props

/*function MyList(props)
{
  const items=props.items;
  return(
    <div>
      <h1>MyList</h1>
      <ul>
        {items.map((item,index)=>(
          <li>{item}<br/>{index}</li>
        ))}
      </ul>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<MyList items={["item1","item2","item3","item4"]}/>)*/

//Destructuring

/*function Welcome({name,age})
{
  return(
    <div>
      <h1>Hello,{name}</h1>
      <p>Your age is::{age}</p>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Welcome name="azar" age={20}/>)*/

//Using class

/*class Welcome extends React.Component
{
  render()
  {
    const {name,age}=this.props;
    return(
      <div>
        <h1>Hello{name}</h1>
        <p>Your age is::{age}</p>
      </div>
    )
  }
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Welcome name="azar" age={20}/>)*/

//In class Component with state

/*class Sample extends React.Component
{
  constructor()
  {
    super();
    this.state={name:"Azar",age:20};
  }
  render()
  {
    const {name,age}=this.state;
    return(
      <div>
        <h1>Hello,{name}</h1>
        <p>Your age is::{age}</p>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//Destructuring in Array

/*function Skills()
{
  const skills=["Html","css","javascript","react"];
  const [s1,s2,s3,s4]=skills;
  return(
    <div>
      <ul>
        <li>{s1}</li>
        <li>{s2}</li>
        <li>{s3}</li>
        <li>{s4}</li>
      </ul>
    </div>
  )
}const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Skills/>)*/

//class component mounting lifecycle methods

/*class MyComponent extends React.Component
{
  constructor(props)
  {
    super(props);
    console.log("Constructor Called")
  }
  componentDidMount()
  {
    console.log("Component Did Mount called..")
  }
  render()
  {
    console.log("Render method called..")
    return(
      <div>
        <h1>MyComponent</h1>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<MyComponent/>)*/

//umounting-componentWillUnMount

/*class Child extends React.Component
{
  componentWillUnmount()
  {
    console.log("Welcome");
  }
  render()
  {
    return(
      <h2>ChildComponent</h2>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<Child/>)*/

//class component updating

/*class Counter extends React.Component
{
  constructor()
  {
    super();
    this.state={count:0}
  }
  componentDidUpdate(preProps,preState)
  {
    console.log("ComponentUpdated..")
    console.log("Previous Count::",preState.count);
    console.log("CurrentCount::",this.state.count);
  }
  render()
  {
    return(
      <>
         <h2>Count::{this.state.count}</h2>
         <button onClick={()=>{this.setState({count:this.state.count+1})}}>Increment</button>
      </>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Counter/>)*/

//useState

/*function Counter()
{
  const [count,setCount]=useState(0);
  return(
    <div>
      <h1>Count::{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Counter/>)*/

//use string state

/*function Welcome()
{
  const [name,setName]=useState("admin");
  return(
    <div>
      <h2>Welcome,{name}!!!</h2>
      <input type="text" placeholder="Enter the value is::" onClick={(e)=>setName(e.target.value)}/>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Welcome/>)*/

//using Object state

/*function Profile()
{
  const [user,setUser]=useState({name:"azar",age:25});
  const updateAge=()=>{
    setUser({...user,age:user.age+1})
  }
  return(
    <div>
      <p>Name::{user.name}</p>
      <p>Age::{user.age}</p>
      <button onClick={updateAge}>Increment</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Profile/>)*/

//useEffect
/*function Example()
{
  const [count,setCount]=useState(0);
  useEffect(()=>{
    console.log("ComponentRender or updated..")
  })
  return(
    <div>
      <p>Count::{count}</p>
      <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Example/>)*/

//Example 1

/*const Example=()=>{
  useEffect(()=>{
    console.log("Component Mounted")
  })
  return(
    <h3>Hello from useEffect</h3>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Example/>)*/

//Example 2

/*const Example2=()=>{
  useEffect(()=>{
    const timer=setInterval(()=>{
      console.log("Timer is Running...")
    },2000)
    return()=>{
      clearInterval(timer);
      console.log("TimerCleared..")
    }
  })
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Example2/>)*/

//React without useContext

/*function Component1()
{
  const [user,setUser]=useState("mohamed");
  return(
    <div>
      <h1>UserName is::{user}</h1>
      <button onClick={()=>setUser("azar")}>ClickHere</button>
      <Component2 user={user}/>
    </div>
  )
}
function Component2(props)
{
   return(
    <div>
      <h1>UserName is::{props.user}</h1>
    </div>
   )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Component1/>)*/

//React using useContext

/*import { useContext,createContext } from "react";

const uc=createContext();

function Component1()
{
  const user=useContext(uc);
  return(
    <h1>This is Component-1::{user}</h1>
  )
}
function Component2()
{
  const user=useContext(uc);
  return(
    <h1>Component2 is::{user}</h1>
  )
}
function Component3()
{
  const user=useContext(uc);
  return(
    <h1>Component2 is::{user}</h1>
  )
}
function App()
{
  const [user,setUser]=useState("mohamed")
  return(
    <uc.Provider value={user}>
        
        <Component1/>
        <Component2/>
        <Component3/>

    </uc.Provider>
  )
}
const r1=ReactDOM.createRoot(document.getElementById("root"));
r1.render(<App/>)*/

//Hooks useref

/*import { useRef } from "react";

function FocusInput()
{
   const ir=useRef("");
   const handleFocus=()=>{
    ir.current.focus();
   }
   return(
    <div>
      <input type="text" ref={ir}/>
      <button onClick={handleFocus}>ClickHere</button>
    </div>
   )
}
const r1=ReactDOM.createRoot(document.getElementById("root"));
r1.render(<FocusInput/>)*/

//useReducer

import { useReducer } from "react";

const initalState=0;

function reducer(state,acction)
{
  switch(acction.type)
  {
    case "increment":
      return state+1;
    case "decrement":
      return state-1;
    case "reset":
      return 0;
    default:
      return state;
  }
}
function Counter()
{
  const [count,dispatch]=useReducer(reducer,initalState);
  return(
    <div>
      <h2>Counter::{count}</h2>
      <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
      <button onClick={()=>dispatch({type:"decrement"})}>decrement</button>
      <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById("root"));
r1.render(<Counter/>)