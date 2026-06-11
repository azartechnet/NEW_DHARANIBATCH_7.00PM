const f1=require('fs')
f1.readFile('file.txt','utf8',function(err,data){
    if(err)
    {
        console.log(err)
    }
    console.log(data);
})
console.log("File is being read...")