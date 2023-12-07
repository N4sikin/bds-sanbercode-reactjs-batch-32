// soal 1
/*
    Tulis code function di sini
*/
const luasPersegiPanjang = (p = 1, l = 1) => {
    return p * l
}

const kelilingPersegiPanjang = (p = 1, l = 1) => {
    return 2 * (p + l)
}

const volumeBalok = (p = 1, t = 1, l = 1) => {
    return p * t * l
}
 
let panjang= 12
let lebar= 4
let tinggi = 8
 
let HasilluasPersegiPanjang = luasPersegiPanjang(panjang, lebar)
let HasilkelilingPersegiPanjang = kelilingPersegiPanjang(panjang, lebar)
let HasilvolumeBalok = volumeBalok(panjang, lebar, tinggi)

console.log(HasilluasPersegiPanjang ) 
console.log(HasilkelilingPersegiPanjang )
console.log(HasilvolumeBalok )


// soal 2
/* 
    Tulis kode function di sini
*/
const introduce = (...data) => {
    const [nama, umur, jenisKelamin, pekerjaan] = data
    let panggilan = ''
    if (jenisKelamin.toLowerCase() === 'laki-laki') {
        panggilan = 'Pak'
    } else if (jenisKelamin.toLowerCase() === 'perempuan') {
        panggilan = 'Bu'
    }
    return `${panggilan} ${nama} adalah seorang ${pekerjaan} yang berusia ${umur} tahun`
}
 
//kode di bawah ini jangan dirubah atau dihapus
const perkenalan = introduce("John", "30", "Laki-Laki", "penulis")
console.log(perkenalan) // Menampilkan "Pak John adalah seorang penulis yang berusia 30 tahun"


// soal 3
let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku" , 1992]
const [nama, jenisKelamin, hobi, tahunLahir] = arrayDaftarPeserta
let objDaftarPeserta = {}
objDaftarPeserta.nama = nama
objDaftarPeserta['jenis kelamin'] = jenisKelamin
objDaftarPeserta.hobi = hobi
objDaftarPeserta['tahun lahir'] = tahunLahir
console.log(objDaftarPeserta)


// soal 4
/**
1.nama: Nanas
  warna: Kuning
  ada bijinya: tidak
  harga: 9000 
2.nama: Jeruk
  warna: Oranye
  ada bijinya: ada
  harga: 8000
3.nama: Semangka
  warna: Hijau & Merah
  ada bijinya: ada
  harga: 10000
4.nama: Pisang
  warna: Kuning
  ada bijinya: tidak
  harga: 5000
**/
const buah = [
    {
        nama: 'Nanas',
        warna: 'Kuning',
        adaBijinya: false,
        harga: 9000 
    },
    {
        nama: 'Jeruk',
        warna: 'Oranye',
        adaBijinya: true,
        harga: 8000
    },
    {
        nama: 'Semangka',
        warna: 'Hijau & Merah',
        adaBijinya: true,
        harga: 10000
    },
    {
        nama: 'Pisang',
        warna: 'Kuning',
        adaBijinya: false,
        harga: 5000
    }
]
const buahTanpaBiji = buah.filter(f => f.adaBijinya === false)
console.log(buahTanpaBiji)


// soal 5
let phone = {
    name: "Galaxy Note 20",
    brand: "Samsung",
    year: 2020,
    colors: ["Mystic Bronze", "Mystic White", "Mystic Black"]
 }
 // kode diatas ini jangan di rubah atau di hapus sama sekali
 
 /* Tulis kode jawabannya di sini */
const phoneName = phone.name,
    phoneBrand = phone.brand,
    year = phone.year
const [colorBronze, colorWhite, colorBlack] = phone.colors

 // kode di bawah ini jangan dirubah atau dihapus
 console.log(phoneBrand, phoneName, year, colorBlack, colorBronze)


// soal 6
let warna = ["biru", "merah", "kuning" , "hijau"]

let dataBukuTambahan= {
  penulis: "john doe",
  tahunTerbit: 2020 
}

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
  warnaSampul:["hitam"]
}
// kode diatas ini jangan di rubah atau di hapus sama sekali

/* Tulis kode jawabannya di sini */ 
warna.map(color => buku.warnaSampul.push(color))
buku = Object.assign({...buku}, dataBukuTambahan)
console.log(buku)


// soal 7
/* 
    Tulis kode function di sini 
*/
let dataFilm = []

const tambahDataFilm = (nama = '', durasi = '', genre = '' , tahun = '') => {
    dataFilm.push({ nama: nama, durasi: durasi, genre: genre, tahun: tahun})
}

tambahDataFilm("LOTR", "2 jam", "action", "1999")
tambahDataFilm("avenger", "2 jam", "action", "2019")
tambahDataFilm("spiderman", "2 jam", "action", "2004")
tambahDataFilm("juon", "2 jam", "horror", "2004")

console.log(dataFilm)