// String Literals & Arrow Function, Default Parameter

// // 1. String Literals
// let fulName = "Jhon Doef"
// let age = 30
// let address = "Manado"

// // Halo nama saya Jhon Doef, umur saya 23 tahun dan saya
// // tinggal di Manado

// let kalimat = "Halo nama saya " + fulName + ", umur saya " + age + "dan saya tinggal di" + address
// console.log(kalimat)
// //cara barunos
// let kalimat2 = `Halo nama saya ${fulName} ,umur saya ${age} dan saya tinggal di ${address}`
// console.log(kalimat2)


// //2.Arrow Function

// function sayGreetings(fulName) {
//     return `Hello ${fulName}`;

// }
// console.log(sayGreetings("Junior"))

// const sayGreetings2 = (fulName) => {
//     return `Hello ${fulName}`;
// }
// console.log(sayGreetings2("David"))

//Implicit return value
const sayGreetings2 = (fulName) => 
    `Hello ${fulName}`;
console.log(sayGreetings2("David"))

// IIFE
let output1 = (() => `Helo`)()
console.log(output1)

// Arrow Function pada Callback
let numbers = [1,2,3,4,5]
let output2 = numbers.map((item) => item);
console.log(output2)

//3. Default Parameter
const sayGreetings3 = (fulName, age, address) => {
    console.log(`Halo nama saye ${fulName}`)
    
}
console.log(sayGreetings3("Davidson Manorek"))



const sayGreetings4 = (fulName = "Marvel", age = 20, address = "Airmadidi")
console.log(
    
    
    
    
    {
    `Halo nama saya ${fulName}, umur saya ${age} saya berasal dari ${address}`
)}
sayGreetings4("David", 21, "Langowan")