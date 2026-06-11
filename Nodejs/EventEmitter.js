const EventEmitter=require('events')
const e1=new EventEmitter();
//Event Listener
e1.on('greet',()=>{
    console.log("Hello welcome!!")
})
//Trigger Event
e1.emit('greet')