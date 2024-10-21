//Asynchronous JS

//synchronus -> single thread -> blocking
console.log("Proses 1")
console.log("Proses 2")
console.log("Proses yg memakan waktu yang lama")
console.log("Proses 4")

// //Asynchronous -> multi thread 
// //1. Parallel
// setTimeout(() => {console.log("Proses 1")
// },3000)
// console.log("Proses 2")
// setTimeout(() => {
// console.log("Proses 3")
// },5000);
// console.log("Proses 4")

// //2.Concurent
// setTimeout(() => {
//    console.log("Proses 1")
//    setTimeout(() => {
//     console.log("Proses 2")
//     setTimeout(() => {
//         console.log("Proses 3")
//         setTimeout(() => {
//            console.log("Proses 4") 
//         }, 3000);
//     }, 4000);
//    }, 4000); 
// }, 3000);

// //Promise
// let condition = true
// let newPromise = new Promise ((resolve, reject) => {
//     if(condition) {
//         resolve("Bershasil")
//     } else {
//         reject("Gagal")
//     }
// });

// //Pakai Promise
// //1. then - catch
// newPromise
// .then( result => console.log(result))
// .catch((error) => console.log(error))

// //2. Async - await
// //Harus di buat dalam fungsi

// const consumePromise = async () => {
//    try{ 
//     let result = await newPromise
//     console.log(result)
//     } 
//     catch (error) {
//     console.log(error)
// }}

// consumePromise()





//Pakai Promise yg sudah ada
//1. Fetch 
fetch("https://jsonplaceholder.typicod.com/users")
.then((response) => response.json())
.then((json) => console.log(json))

(async () => {
    let response = await fetch("https://jsonplaceholder.typicod.com/users")
    let json = await response.json ()
    json.forEach{({name}) => console.log(name)}
})()