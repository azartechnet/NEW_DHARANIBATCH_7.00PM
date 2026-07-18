// function add(a,b){
//     return a+b;
// }
// console.log(add(10,20))
// var add1=(a,b)=>{
// return a+b;
// }
// console.log(add(20,30))
//
// function great(name,c1){
//     console.log("Hello"+name);
//   c1();
// }
// function sayBye(){
//     console.log("Goodbye")
// }
// great("Azar",sayBye);

//call back function
// const f1=require("fs");
// f1.readFile('file.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err);   
//     }
//     console.log(data);
// }   )
// console.log("file is being read...")

// function PlaceOrder(){
//     console.log("Order placed")
//     setTimeout(()=>{
//         useCallback();
//     },3000)
// }
// PlaceOrder(()=>{
//    console.log("food delivered....")
// })

//Evint Emitter

// const EventEmitter=require("events");
// const c1=new EventEmitter();
// c1.on('great',()=>{

//     console.log("Hello Azar")
// })
// c1.emit('great')

//promise
const mypromise=new Promise((resolve,reject)=>{
    let success=true;
    if(success){
        resolve("Promise resolved successfully!");
    }else{
        reject("Promise rejected!");
    }
});
mypromise.then((message)=>{
    console.log(message);
}
)
.catch((error)=>{
    console.error(error);})