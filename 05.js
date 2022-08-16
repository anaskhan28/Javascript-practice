// objects in js
const person ={
    name:"Anas",
    age:18,
    hobbies:["guitar", "sleeping", "eating"],
    work: "nothing"
}
console.log(person.name); // dot notation 
console.log(person["name"]); // bracket notation 

// how to add key value pair in objects
person.gender = "male";
console.log(person);