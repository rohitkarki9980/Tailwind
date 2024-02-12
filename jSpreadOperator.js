// Spread operator allows an iterable to expand in
// places where 0+ arguments are expected. It is
// mostly used in variable array where there is more
// than 1 values are expected. It allows us the
// privilege to obtain a list of parameters from an
// array. Syntax of Spread operator is same as Rest
// parameter but it works completely opposite of it.


//es5
//replace apply method apply()
function sum(a,b,c){
    console.log(a+b+c);
}
// sum(1,2,3);

var arrVal=[10,2,3];
// sum.apply(null,arrVal)

//es6

sum(...arrVal)

//replace concatenate Concat()

// let arr1 =[1,2,3]
// let arr2 =[4,5,6]
// let arr3=[7,8,9]
// arr1=arr1.concat(arr2)
// arr1=[...arr1,...arr2,...arr3]

// console.log(arr1);

//array copy 
let arrc1 =[1,2,3];
let arrc3=[6,7,8];
let arrc2 =[...arrc1,4,5,...arrc3] //.push()
console.log(...arrc2);
console.log(...arrc1);


