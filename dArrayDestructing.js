//The Destructuring assignment syntax is a JavaScript expression 
//that makes it possible to unpack values from arrays, or properties from 
//objects, into distinct variables.


const myFav=['js','php','c','python','java']

//es5
// var top1=myFav[0]
// var top2=myFav[1]
// var top3=myFav[2]

// console.log("My fav programming language is" +" "+ top1)

//es6

// let [top1,top2,top3,top4,top5]=myFav

// console.log("My fav programming language is" +" "+ top1);

let [top1,,,,topLast]=myFav
console.log(`my fav lang is ${topLast}`);