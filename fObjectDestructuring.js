const bioData={
    name:"Rohit",
    age:26,
    deg:"master",
    hobb:{
        first:"playing",
        second:"coding"
    }
}
let {name:myname,age:ages,deg,hobb}=bioData 
//declaring directly your own object name and declaring outside

console.log(`my age is ${ages}.i love making ${hobb.second}`);