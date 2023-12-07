// soal 1 .... jawaban soal 1
let word = 'JavaScript'; 
let second = 'is'; 
let third = 'awesome'; 
let fourth = 'and'; 
let fifth = 'I'; 
let sixth = 'love'; 
let seventh = 'it!';

const jawaban1 = `${word} ${second} ${third} ${fourth} ${fifth} ${sixth} ${seventh}`;
console.log(jawaban1); //JavaScript is awesome and I love it!


// soal 2 .... jawaban soal 2
let kataPertama = "saya"; 
let kataKedua = "senang"; 
let kataKetiga = "belajar"; 
let kataKeempat = "javascript";

const jawaban2 = `${kataPertama} ${kataKedua.charAt(0).toUpperCase()}${kataKedua.slice(1)} ${kataKetiga.slice(0, 6)}${kataKetiga.charAt(6).toUpperCase()} ${kataKeempat.toUpperCase()}`;
console.log(jawaban2); //saya Senang belajaR JAVASCRIPT


// soal 3 .... jawaban soal 3
let panjangPersegiPanjang = "8";
let lebarPersegiPanjang = "5";

let alasSegitiga= "6";
let tinggiSegitiga = "7";

let kelilingPersegiPanjang = 2 * (parseInt(panjangPersegiPanjang) + parseInt(lebarPersegiPanjang));
let luasSegitiga = 0.5 * parseInt(alasSegitiga) * parseInt(tinggiSegitiga);

console.log(kelilingPersegiPanjang); //26
console.log(luasSegitiga); //21


// soal 4 .... jawaban soal 4
let sentences= 'wah javascript itu keren sekali'; 

let firstWord= sentences.substring(0, 3); 
let secondWord = sentences.substring(4, 14); // do your own! 
let thirdWord = sentences.substring(15, 18); // do your own! 
let fourthWord = sentences.substring(19, 24); // do your own! 
let fifthWord = sentences.substring(25); // do your own! 

console.log('Kata Pertama: ' + firstWord); //Kata Pertama: wah
console.log('Kata Kedua: ' + secondWord); //Kata Kedua: javascript
console.log('Kata Ketiga: ' + thirdWord); //Kata Ketiga: itu
console.log('Kata Keempat: ' + fourthWord); //Kata Keempat: keren
console.log('Kata Kelima: ' + fifthWord); //Kata Kelima: sekali


// soal 5 .... jawaban soal 5
var sentence = "I am going to be React JS Developer"; 

var exampleFirstWord = sentence[0]; 
var exampleSecondWord = sentence[2] + sentence[3]; 
var thirdWords = sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9]; // lakukan sendiri, wajib mengikuti seperti contoh diatas 
var fourthWords = sentence[11] + sentence[12]; // lakukan sendiri , wajib mengikuti seperti contoh diatas
var fifthWords = sentence[14] + sentence[15]; // lakukan sendiri , wajib mengikuti seperti contoh diatas
var sixthWords = sentence[17] + sentence[18] + sentence[19] + sentence[20] + sentence[21]; // lakukan sendiri , wajib mengikuti seperti contoh diatas
var seventhWords = sentence[23] + sentence[24]; // lakukan sendiri , wajib mengikuti seperti contoh diatas
var eighthWords = sentence[26] + sentence[27] + sentence[28] + sentence[29] + sentence[30] + sentence[31] + sentence[32] + sentence[33] + sentence[34]; // lakukan sendiri , wajib mengikuti seperti contoh diatas

console.log('First Word: ' + exampleFirstWord); //First word: I 
console.log('Second Word: ' + exampleSecondWord); //Second word: am 
console.log('Third Word: ' + thirdWords); //Third word: going
console.log('Fourth Word: ' + fourthWords); //Fourth word: to
console.log('Fifth Word: ' + fifthWords); //Fifth word: be 
console.log('Sixth Word: ' + sixthWords); //Sixth word: React 
console.log('Seventh Word: ' + seventhWords); //Seventh word: JS
console.log('Eighth Word: ' + eighthWords); //Eighth word: Developer


// soal 6 .... jawaban soal 6
let txt = "I can eat bananas all day";
let hasil = txt.slice(10, 17); //lakukan pengambilan kalimat di variable ini

console.log(hasil);