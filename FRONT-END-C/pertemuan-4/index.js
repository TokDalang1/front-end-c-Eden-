// //JavaScript Function
// //Cara 1.
// //Tanpa input (parameter) dan output
function greetings(){
    console.log("Hello World");
}

greetings1(); //call function

//cara.2
let greetings = function(){
    console.log("Hello World");
};

greetings2(); //call function




// Parameter & Argument
// Dengan input (parameter) dan output (return)
// call 1
function greetings1(fullName) {
    return "Hello" + fullName;
}
//                          Argumen
let output = greetings1("Davidson Manorek");
console.log(output);
//call 2
let greetings2 = function(fullName){
    return "Hello" + fullName;
};
let output2 = greetings2("Davidson Manorek")




//Global, Local & Block Scope

let x = 10; //Global

function foo() {
    let y =20; //Local (function)
    let z =30
    console.log(x); //10
    console.log(y); //20
    if(z > x) {
        let a = 40; //Block Scope
        console.log(a); //40

    }
    console.log(a);
}

// console.log(y); //error
