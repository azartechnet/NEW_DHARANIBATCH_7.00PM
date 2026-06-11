var f1=require('fs')
f1.open('file1.txt','r',(err,fd)=>{
    if(err){
        console.log("error in opening the file")
    }
    else{
        console.log("file opened successfully")
    }
})
