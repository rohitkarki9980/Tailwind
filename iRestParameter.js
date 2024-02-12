// Rest parameter is an improved way to handle
// function parameter, allowing us to more easily
// handle various input as parameters in a function
// The rest parameter syntax allows us to represent
// an indefinite number of arguments as an array

function sum(...inputs){
    console.log(...inputs);
    let total=0;
    for(let i of inputs){
        total+=i;
    }
    console.log(total)
}
sum(1,2,3,4,5,6);

const fun=(a,b,...c)=>{
    console.log(`${a} ${b}`);//ronaldo Neymar
    console.log(c);//pele messi edan
    console.log(c[0]);//Pele
    console.log(c.length);//3
    console.log(c.indexOf('Edan'));//2
}

fun('Ronaldo', 'Neymar', 'Pele', 'Messi', 'Edan')