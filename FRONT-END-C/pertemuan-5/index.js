// //IIFE & Callback
// // 1.IIFE (Immedietely Invoked Function Expression)

// (function () {
//     console.log("hello world");
// })();



// //With params
// let output = (function (fullName) {
//     console.log("Hello" + fullName);
// })("John Doe");


// // console.log(output);







// //Callback function
// //No params & args & return value
// function sayHello(callback) {
//     //logic
//     callback();
// }


// sayHello (function greetings() {
//     console.log("Hello Callback Function");
// });



// function sayHello(callback) {
//     //logic
//     let output = callback("John Doe");
//     console.log(output);
// }


// sayHello (function (fullName) {
//     return "hello" + fullName
// });

// console.log(output);