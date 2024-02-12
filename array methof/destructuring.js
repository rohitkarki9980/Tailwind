
let a, b ,rest;
[a,b]=[0,1]
console.log(a);
console.log(b);
[a,b,...rest]=[0,1,2,3,4]
console.log(...rest)


const x=["rohit","karki",20]
const [c,d,...e] =x;
console.log(`hello, my name is ${c} ${d}.My age is 20 `);


const player=(a,b,...c)=>{
    let top=`Top are ${a} ${b}`
    let lower=`Lower are ${c}`
    console.log(top ,lower)
}
player("messi","ronaldo","pele")


const obj1 ={
    fName:"rohit",
    caste:"karki",
    interest:{
        fOne:"coding",
        fTwo:"driving"
    }
}

const {fName,
caste,
interest:{fOne:fList,fTwo:sList}}=obj1;
console.log(sList);

