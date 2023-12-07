// soal 3
function filterBooksPromise(colorful, amountOfPage){
    return new Promise(function(resolve, reject){
      var books=[
          {name: "shinchan", totalPage: 50, isColorful: true},
          {name: "Kalkulus", totalPage: 250, isColorful: false},
          {name: "doraemon", totalPage: 40, isColorful: true},
          {name: "algoritma", totalPage: 250, isColorful: false},
      ]
      if (amountOfPage >= 40) {
          resolve(books.filter(x=> x.totalPage >= amountOfPage && x.isColorful == colorful));
        } else {
          var reason= new Error("Maaf buku di bawah 40 halaman tidak tersedia")
          reject(reason);
        }
    });
  }
  
// Lanjutkan code untuk menjalankan function filterBookPromise ( menggunakan async/await )
const berwarna = true
const tidakBerwarna = false

const filter = async (...data) => {
	//console.log(data)
	var j = 0
	while (j < parseInt(data.length / 2) * 2) {
		//console.log(`${data[j]}, ${data[j + 1]}`)
		try {
			const result = await filterBooksPromise(data[j], data[j + 1])
			console.log(result)
			j += 2
		} catch(err) {
			console.log(err.message)
			j += 2
		}
	}
}

filter(berwarna, 40, tidakBerwarna, 250, berwarna, 30)