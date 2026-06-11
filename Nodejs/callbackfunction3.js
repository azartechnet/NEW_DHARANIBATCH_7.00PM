function placeOrder(callback)
{
    console.log("OrderPlaceed")
    setTimeout(()=>{
        callback();
    },3000)
}
placeOrder(()=>{
    console.log("Food Delivered...")
})