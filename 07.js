const person = {
    name: "Anas Khan",
    age: 19,
    "person hobbies":["guitar", "sports", "piano"],
    work: "nothing"
}

// for in loop in array
// Object.keys

for(let key in person){
    // console.log(person[key]);
    // console.log(`${key} : ${person[key]}`)
}

// const val = typeof(Object.keys(person));
const val = Array.isArray(Object.keys(person));
console.log(val);

for(let key of Object.keys(person)){
    console.log(person[key])
}

