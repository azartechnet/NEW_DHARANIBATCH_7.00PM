//setinterval and clearinterval using files
var f1=require('fs')
f1.writeFile('file.txt','welcome to nodejs',(err)=>{
    if(err){
        console.log("error in writing the file")
    }
    else{
        console.log("file written successfully")
    }
})
setInterval(()=>{
    f1.readFile('file.txt','utf-8',(err,data)=>{
        if(err){
            console.log("error in reading the file")
        }
        else{
            console.log("file read successfully")
            console.log(data)
        }
    })
},2000)
setTimeout(()=>{
    console.log("clearing the interval")
    clearInterval()
},10000)
