// difference between dot and bracket notation

key = "email";
const person ={
    name:"Anas",
    age:18,
    "person hobbies":["guitar", "sleeping", "eating"],
    work: "nothing"
} 
console.log(person["person hobbies"]);// if key has 2 words then use bracket notation

person[key] = "khananasatique@gmail.com";
console.log(person);