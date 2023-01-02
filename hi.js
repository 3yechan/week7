//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/


let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
    
}
for (let key in person3) {
    console.log(`My favorite ${key}:`)
    if (Array.isArray(person3[key])){
        for (let item of person3[key]){
            if (typeof item === 'string') {
                console.log(item)
            }
            else {
                
                for (let key2 in item) {
                    console.log(`from ${key2} is ${item[key2]}`)
                }
            }
        }
    }
    else {
        console.log(person3[key])
    }
    

}

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

function Person(name, age){
    this.name = name
    this.age = age

    this.printInfo = () => {
        console.log(`Hello, I am ${this.name}, and I am ${this.age} years old.`)
    }
    this.addAge = (num=1) => {
        this.age += num 
    }
}
// Create our Person Prototype
const chris = new Person('Chris', 22)
chris.printInfo()
chris.addAge(45)
chris.printInfo()

// Use an arrow to create the printInfo method


// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promise based function that will check a string to determine if its length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function lengthchecker(str) {
    const len = str.length
    const bigp = (resolve, reject) => {
        if (len > 10) {
            resolve()
        }
        else {reject()}
    }
        return new Promise(bigp) 

}   
lengthchecker("bababoey")
.then(()=>{console.log('Big Word')})
.catch(()=>{console.log('Small Number')})


