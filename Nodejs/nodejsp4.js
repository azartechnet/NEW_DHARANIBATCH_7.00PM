var f1=require('fs')
f1.rename('file.txt','file2.txt',(err)=>{
    if(err){
        console.log("error in renaming the file")
    }
    else{
        console.log("file renamed successfully")
    }
})
