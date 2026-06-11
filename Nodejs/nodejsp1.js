const h1=require('http')
const s1=h1.createServer((req,res)=>{
    res.write("welcome to nodejs")
    res.end()
}
).listen(3000,()=>{
    console.log("server is running on port 3000")
})
