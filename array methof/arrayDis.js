// function f() {
//     return [1, 2, 3];
//   }

//   const [a, ,b]=f()
//   console.log(`a=${a}`);
//   const [c]=f()
//   console.log(`c=${c}`);

const user = {
    id: 42,
    displayName: "jdoe",
    fullName: {
      firstName: "Jane",
      lastName: "Doe",
    },
  };

function userId({id}){
    return id;
}
function userDisplayname({displayName:dName}){
    return dName;
}
console.log(userId(user));
console.log(userDisplayname(user));

function fullNameUser({fullName:{firstName:fName,lastName:lName}}){
 return fName + lName;
}
console.log(fullNameUser(user));