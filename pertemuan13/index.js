// const hitung = (a, b, c, d, e) = => {
//     const angka = [a, b, c, d, e];
//     let total = 0;
//     for (let i = 0; i < 0; i++) {
//         total = total + angka[i];
//     }
//     return total;
// }

//REST OPERATOR

// const hitung = (...angka) => {
//     console.log(angka);
//     let total = 0;
//     angka.forEach((el) =>{
//         total = total + el
//     })
//     return total;
// }
// console.log(hitung(1,2,3,4,5,6,7,8,10))

//Spread Operator
const angka = [1,2,3,4,5];
// const angka2 =angka;
const angka2 = [...angka];
angka[0] = 10;
console.log (angka2);

// console.log(angka);
// console.log(...angka);

// const angka1 = [1,2,3,4,5];
// // const angka2 = [6,7,8,9,10];

// const gabung5 = angka1.concat(angka1,angka2,angka3);
// console.log(gabung5);

// const gabung6 = [...angka1...angka2,11,..angka3]
// console.log(gabung6);

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};
const objectGabungan = {...obj1, ...obj2};

console.log(objectGabungan);