var f1=require('fs')
f1.readFile('file2.txt','utf-8',(err,data)=>{
    if(err){
        console.log("error in reading the file")
    }
    else{
        console.log("file read successfully")
        console.log(data)
    }
})
