//Rest Parameter dan Spread Operator

//1. Rest Parameter

//tanpa rest parameter
const func1 = (param1, param2, param3, param4, param5) =>{
    console.log(param1,param2,param3,param4,param5);
}


//dengan rest parameter
const func2 = (...params) => {
    console.log(params);
}

func2("David","Albrian","Manorek")


//rest parameter harus berada di terakhir dlm parameter list
const func3 = (param1, param2, ...params) => {
    console.log(param1, param2);
    console.log(params);
};
func3("David","Albrian","Manorekson","Tumangkengus")


//Mini Exercise
const penjumlahan = (...Noya) => {
    let hasil = 0
    Noya.forEach((item) => (hasil += item));
    return hasil;
};
console.log(penjumlahan(1,2,3,4,5,6))


//2. Spread Operator
let numbers = [1,2,3,4,5]
console.log(numbers);
console.log(...numbers);

//Array
//1. Duplikasi array
let numbers2 = [...numbers];
numbers.push(6)
console.log(numbers)
console.log(numbers2)


//2. Menggabungkan array
let arr1 =[1,2,3];
let arr2 =[4,5,6];
let arr3 =[7,8,9];

let numbers3 = arr1.concat(arr2, arr3); //ES5
let numbers4 = [...arr1, ...arr2, ...arr3]; //ES6
console.log(numbers4)

//Object
//1. duplicate object
const jhon = {
    fullName: "Jonathan",
    age: 24
}

const jhon2 = {...Jonathan, address: "manadow"};

//2. Merge Object

let obj1 = {a: 1, b: 2}
let obj2 = {c: 3, d: 4}
let obj3 = {e: 4, f: 5}

let obj = [...obj1, ...obj2, ...obj3]
console.log(obj)