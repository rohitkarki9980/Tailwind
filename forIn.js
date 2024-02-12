const data = {
    name: "John",
    address: {
      street: "123 Main St",
      city: "New York",
    },
    scores: {
      math: 90,
      science: 85,
    },
  };

 function getValue(obj,keys){

    let value=obj;

    for(const key in keys){
    value =value[keys[key]]
    }

    return value
 }

 const getStreetAddress = getValue(data,["address","street"])
 console.log(getStreetAddress)