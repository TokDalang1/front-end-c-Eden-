// //JavaScript Object
// //Deklarasi Object
// //Cara 1. Object literal
let john = {
    firstName: "John",
    age: 30,
    isMarried: true,
    grade: [80, 90, 100],
    sayGreetings: function(){
        console.log("Hello my name is " + this.firstName);
    },
    address: {
        street: "JL. Arnold Mononutu",
        city: "Minahasa Utara",
        province: "Sulawesi Utara",
        postalCode:95371,
    },
};
console.log(john);

// //cara 2. kata kunci new
// let jane = new Object();
// (jane.firstName = "jane"), (jane.age = 25), (jane.isMarried)
// console.log(jane);


// //cara mengakses properti dalam object
// //1. dot notation
// console.log(john.firstName);//john
// console.log(john.age);//30
// john.age = 31;
// console.log(john.age);//31
// john.job = "Teacher";//Tambah properti baru
// console.log(john);


// //2.Bracket notation
// console.log(john["isMarried"]);//true
// john["nationality"] = "Indonesia";
// console.log(john);

// //Object method
// john.sayGreetings();

// //Object di dalam object
// console.log(john.address.city); //Minahasa Utara

// //Delete properti dalam property/delete properti
// delete john.grade;
// console.log(john);



//JavaScript Conditional
//1. if - else
let numbers = 5;
if(numbers % 2 === 0) {
    console.log("bilangan ganjil");
} else {
    console.log("bilangan genap");
}

//2. if - else if
// 100 - 80 nilai A
// 60 - 70 nilai B
// < 60 nilai C
let nilai = 90
if (nilai >= 80 && nilai <= 100) {
    console.log("Grade A");
} else if (nilai >= 60 && nilai < 80) {
    console.log("Grade B");
} else {
    console.log("Grade C")
}


//Switch - case
let month = 1;
switch(month) {
    case 1 : 
        console.log("bulan januari");
        break;
    case 2 :
        console.log("bulan februari");
        break;
    case 3 :
        console.log("Maret");
        break;
    default:
        console.log("not found")
        break
}