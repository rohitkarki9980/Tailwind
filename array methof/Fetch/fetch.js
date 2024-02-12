const newUser = {
    name:"rohit",
    job:'learner'
}
fetch("https://reqres.in/api/users" ,{
    method:'POST',
    headers:{
        'Content-Type':'application/JSON'
    },
    body:JSON.stringify(newUser)
})
  .then((res) => {
    if(!res.ok){
        console.log('problem');
        return;
    }
    return res.json

  })
  .then((data) => {
    console.log(data.data[2].first_name);
  })
  .catch((error) => {
    console.log(error);
  });
