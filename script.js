"use strict";
/////. 1-masala erreu elementlari ichidagi eng kichigini topish
function MinNumber(arr) {
    return Math.min(...arr);
}
const mass = [1, 2, 3, 4, 5, 6, 5];
console.log(MinNumber(mass));
/////  2-masala erryda berilgan stringlarni bitta matinga birlashtirish
function matin(arr) {
    return arr.join(',');
}
const massiv = ["hello", "typescript"];
console.log(matin(massiv));
/// 3- masalal tupledan malumotlarni qabul qilib consolga chiqarish
const tupleType = ['fazliddin', new Date(), true];
console.log(tupleType);
const telefon = [
    { brend: 'apple', model: "pro maks", price: 1300 },
    { brend: 'samsung', model: "25 ultra", price: 1300 },
    { brend: 'mi', model: "14c", price: 180 },
    { brend: 'google', model: "picsel 9 pro", price: 1400 }
];
function maxPrice(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (max.price < arr[i].price) {
            max = arr[i];
        }
    }
    return max;
}
console.log(maxPrice(telefon));
const studentlar = [
    { name: "Ali", grade: 5, is_aktiv: true },
    { name: "Vali", grade: 4, is_aktiv: false },
    { name: "Malika", grade: 3, is_aktiv: true },
    { name: "Javohir", grade: 2, is_aktiv: true },
    { name: "Dilnoza", grade: 5, is_aktiv: false }
];
function aktiv(arr) {
    for (let i of arr) {
        if (i.is_aktiv === true) {
            console.log(i);
        }
    }
}
aktiv(studentlar);
//// 6-masala
function type(data) {
    if (typeof data === 'string') {
        let tekshir = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let i of data.split('')) {
            if (!tekshir.includes(+i)) {
                return undefined;
            }
        }
        return +data;
    }
    if (typeof data === 'number') {
        return data;
    }
    return undefined;
}
console.log(type(12));
console.log(type("12"));
console.log(type("12a"));
//// 7- masala
function imput(data) {
    if (typeof data === 'boolean') {
        return true;
    }
    return false;
}
console.log(imput(true));
console.log(imput('st'));
console.log(imput(false));
//// 8-masala
function voyaga_yetgan(data) {
    if (data > 18) {
        return true;
    }
    return false;
}
console.log(voyaga_yetgan(12));
console.log(voyaga_yetgan(16));
console.log(voyaga_yetgan(21));
//// 9 -masala
function defaulName(data) {
    if (data === null || data === undefined) {
        return 'Mexmon';
    }
    return data;
}
console.log(defaulName('Fazliddin'));
console.log(defaulName(null));
console.log(defaulName(undefined));
//// 10-masala
function welcome() {
    console.log('Xush kelibsiz');
}
welcome();
function newer() {
    throw new Error('hechnarsaga teng emas');
}
function infiniteLoop() {
    while (true) {
        console.log("tugamaydi...");
    }
}
//// 11-masala fibonachi
function fibo(n, i = 0, f1 = 0, f2 = 1) {
    if (n == i)
        return f1;
    console.log(f1);
    return fibo(n, i + 1, f2, f1 + f2);
}
fibo(10);
const products = [
    { id: 1, name: "Olma", price: 50, inStock: true },
    { id: 2, name: "Banana", price: 120, inStock: false },
    { id: 3, name: "Anor", price: 200, inStock: true },
    { id: 4, name: "Uzum", price: 90, inStock: true }
];
const qimmatMahsulotlar = products.filter(p => p.price > 100);
console.log(qimmatMahsulotlar);
