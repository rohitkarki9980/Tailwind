//1st Declaration
let name ="Rohit"
let name ="karki"

console.log(name) //cant declare name 2 times

//2nd global declaration
function modjs(love){
    if (love){
        var name="rohit"
        var sname="karki" //var is a global declarataion
       
    }
    console.log("my name is " +name +" "+ sname)
}
modjs(true)
//block level declaration
function modjs(love){
    if (love){
        var name="rohit"
        var sname="karki" //let is a block level declarataion
       
    }
    console.log("my name is " +name +" "+ sname)
}
modjs(true)

//which will br printed for var
var whoWillWinToday ="india"
if (true){
    var whoWillWinToday ="New Zealand" //2nd line will be assigned
    console.log(whoWillWinToday +"1");
}
console.log(whoWillWinToday +"2");

//which will br printed for let and const
let whoWillWinToday ="india"
if (true){
    let whoWillWinToday ="New Zealand"
    console.log(whoWillWinToday +"1"); //block scoped will be give New Zealand
}
console.log(whoWillWinToday +"2"); //for this first let will work

