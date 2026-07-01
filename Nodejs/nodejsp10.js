//setIntervel
setInterval(()=>{
    console.log("Hello")
},2000)

//setTimeout
setTimeout(()=>{
    console.log("Welcome to Nodejs")
},5000)

//clearInterval
let count=0
let id=setInterval(()=>{
    console.log("Hello")
    count++
    if(count==5){
        clearInterval(id)
    }
},2000)