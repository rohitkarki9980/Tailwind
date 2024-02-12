//Default function parameters allow named
//parameters to be initialized with default
//values if no value or undefined is passed

//multiply of 2no
// old style
function mul1(a,b){
    return a*b;
}
console.log(mul1(2));

function mul2(c,d){
    d=(typeof d !=='undefined') ? d:2
    return c*d;
}
console.log(mul2(2));


function mul3(e,f=2){
    console.log(e*f);
}
mul3(2)

// now in es6
const  mult=(g,h=2)=>{
    console.log(g*h);
}
mult(2)
