const people = [
    {
      name: "Mike Smith",
      family: {
        mother: "Jane Smith",
        father: "Harry Smith",
        sister: "Samantha Smith",
      },
      age: 35,
    },
    {
      name: "Tom Jones",
      family: {
        mother: "Norah Jones",
        father: "Richard Jones",
        brother: "Howard Jones",
      },
      age: 25,
    },
  ];

 people.filter((array)=>{
    const {name:n,family:{mother:m}} = array
    return console.log(`my name is ${n}, mother name is ${m}`);
 })
