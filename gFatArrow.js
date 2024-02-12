// Arrow functions (also called "fat arrow
// functions") are undoubtedly one of the more
// popular features of ES6. They introduced a
// new way of writing concise functions.


// es5
//example 1 old type of function
var sum1 = function () {
    var a = 5;
    var b = 10;

    return a + b;
}
console.log(` a=b is ${
    sum1()
}`)

// es6
//example 2 fat arrow function 
const sum2 = () => {
    let c = 5
    let d = 10
    return c + d;
}
console.log(` c+d is ${
    sum2()
}`)
//example 3 passing variable outside of function
let e = 20;
let f = 10;
const sum3 = () => {
    return e + f;
}

console.log(` e+f is ${
    sum3()
}`)
//example 4 passing variable outside of function without return 
let g = 10;
let h = 10;
const sum4 = () => g + h
console.log(` g+h is${
    sum4()
}`)
//example 5 passing single value in function
let i=110;

const sum5=(j)=>i+j;

console.log(`i+j is ${sum5(90)}`);

//example 6 passing multiple value in function

const sum6 = (k,l)=> k+l;
console.log(`k+l is ${sum6(2,3)}`);