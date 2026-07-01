const EventEmitter=require('events')
const event=new EventEmitter();

//Listener with parameter
event.on('userinfo',(name,age)=>{
    console.log(`Name:${name}`)
    console.log(`Age:${age}`)
})
//Emit event with values
event.emit('userinfo','azar',36);