// soal 1
let dataPeserta = ["john", "laki-laki", "programmer", "30"]
// Halo, nama saya john. saya laki-laki berumur 30 bekerja sebagai seorang programmer

//.... jawaban soal 1
const [nama, jenisKelamin, pekerjaan, umur] = dataPeserta
let output = `Halo, nama saya ${nama}. saya ${jenisKelamin} berumur ${umur} bekerja sebagai seorang ${pekerjaan}`
console.log(output)


// soal 2
let array1 = ["selamat", "anda", "melakukan", "perulangan", "array", "dengan", "for"]
/**
selamat
anda
melakukan
perulangan
array
dengan
for
**/

//.... jawaban soal 2
for (var i = 0; i < array1.length; i++) {
    console.log(array1[i])
}


// soal 3
let array2 = [1, 2, 3, 4, 5, 6,7, 8, 9, 10]
/**
2
4
6
8
10
**/

//.... jawaban soal 3
for (var j = 0; j < array2.length; j++) {
    if (array2[j] % 2 === 0) {
        console.log(array2[j])
    }
}


// soal 4
let kalimat= ["aku", "saya", "sangat", "sangat", "senang", "belajar", "javascript"]
//["saya", "sangat", "senang", "belajar", "javascript"]
// output = saya sangat senang belajar javascript

//.... jawaban soal 4
kalimat.splice(2, 1)
kalimat.shift()
const [a, b, c, d, e] = kalimat
const hasilKalimat = `${a} ${b} ${c} ${d} ${e}`
console.log(hasilKalimat)


// soal 5
var sayuran=[]
/**
=== INPUT ===
Kangkung
Bayam
Buncis
Kubis
Timun
Seledri
Tauge

=== OUTPUT ===
1. Bayam
2. Buncis
3. Kangkung
4. Kubis
5. Seledri
6. Tauge
7. Timun
**/

//.... jawaban soal 5
sayuran.push('Kangkung', 'Bayam', 'Buncis', 'Kubis', 'Timun', 'Seledri', 'Tauge')
sayuran.sort()
for (var k = 0; k < sayuran.length; k++) {
    console.log(`${k + 1}. ${sayuran[k]}`)
}