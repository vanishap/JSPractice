const data =[{
    "name":"Shyam",
    "Location":"Aurora",
    "subItems":[
        {
            "car":"Honda",
            "model":"Civic"
        },
        {
            "car":"Honda",
            "model":"Odyssey",
        }]
},
{
    "name":"Madhan",
    "Location":"Bay Area",
    "subItems":[
        {
            "car":"VolksWagen",
            "model":"Passat"
        }]
}]

// data.map((e)=>{
    // e.name
    //e.location
    // e.subItems.map((e)=>{

    //})
//})

const display = data.map(user=>{
  return [  user.name,
    user.Location,
    user.subItems.map(vehicle=> vehicle.model)]
});
console.log(display);