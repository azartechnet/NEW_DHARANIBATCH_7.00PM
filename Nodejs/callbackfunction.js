function greet(name,c1)
{
    console.log("Hello"+name);
    c1();
}
function sayBye()
{
   console.log("GoodBye!!!")
}
greet("Azar",sayBye);