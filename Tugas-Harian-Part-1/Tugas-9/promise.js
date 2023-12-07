// soal 2
// di file promise.js
function readBooksPromise (time, book) {
    console.log("saya mulai membaca " + book.name )
    return new Promise( function (resolve, reject){
      setTimeout(function(){
        let sisaWaktu = time - book.timeSpent
        if(sisaWaktu >= 0 ){
            console.log("saya sudah selesai membaca " + book.name + ", sisa waktu saya " + sisaWaktu)
            resolve(sisaWaktu)
        } else {
            console.log("saya sudah tidak punya waktu untuk baca "+ book.name)
            reject(sisaWaktu)
        }
      }, book.timeSpent)
    })
  }

  var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise ( menggunakan promise ) 
let i = 0
const execute = (waktu) => {
    if (i < books.length) {
        readBooksPromise(waktu, books[i])
        .then((sisaWaktu) => {
            i++
            execute(sisaWaktu)
        })
        .catch((err) => {
            i++
            return err
        })
    }
}

execute(10000)