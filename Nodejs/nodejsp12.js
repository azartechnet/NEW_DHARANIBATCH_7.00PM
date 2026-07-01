function greet()
{
    console.log("Hello World")
}
const timeoutId=setTimeout(greet,2000)

function cancelTimeout()
{
    clearTimeout(timeoutId)
    console.log("Timeout cancelled")
}
setTimeout(cancelTimeout,10000)

console.log("This will be printed immediately")