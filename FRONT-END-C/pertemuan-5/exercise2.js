// function BMi(berat, tinggi) {
//     return Bmi = berat / (tinggi * tinggi);
// }
// let output = BMi (50, 1.7);
// console.log(output);

function hitungBMI(callback) {
    let output = callback(50, 1.7)
    console.log(output);
};

hitungBMI (function (berat,tinggi) {
    console.log("tinggi = ",berat,"kg");
    console.log("berat = ",tinggi, "M");
    return bmi = berat / (tinggi * tinggi);
});
