//1.
let people = ["Greg", "Mary", "Devon", "James"];
for ( let i=0; i< people.length; i++){
    console.log(i)
}
//2.
people.forEach(function(item,index){
    console.log(index)
    console.log(item.people)
})
//3.
people.shift()
console.log(people)
//4.
people.pop()
console.log(people)
//5.
people.unshift("Matt")
console.log(people)
//6.
people.push("Eden")
//7.
for (let i = 0; i < people.length; i++) {
    console.log(people[i])
    if (people[i] === "Marry") {
        break
    }
}
//8.
let copy = people.slice(2)
//9.
people.splice(2,1, "Elizabeth", "Artie");
//10.
let withBob = people.concat("Bob")






//Object Exercise
//1.
programming.languages.push("Go")
programming["difficulty"] = 7
delete programming.jokes
programming.isFun = true
programming.languages = programming.languages.map((lang, index) =>'${index} -${lang}')
console.log(programming.languages)