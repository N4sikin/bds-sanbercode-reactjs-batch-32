//soal 1
var nilaiJohn = 80;
var nilaiDoe = 50;

/**
nilai >= 80 indeksnya A
nilai >= 70 dan nilai < 80 indeksnya B
nilai >= 60 dan nilai < 70 indeksnya c
nilai >= 50 dan nilai < 60 indeksnya D
nilai < 50 indeksnya E
**/

//.... jawaban soal 1
//nilai Jhon
if (nilaiJohn >= 80) {
    console.log('A')
} else if (nilaiJohn >= 70) {
    console.log('B')
} else if (nilaiJohn >= 60) {
    console.log('C')
} else if (nilaiJohn >= 50) {
    console.log('D')
} else {
    console.log('E')
}

//nilai Doe
if (nilaiDoe >= 80) {
    console.log('A')
} else if (nilaiDoe >= 70) {
    console.log('B')
} else if (nilaiDoe >= 60) {
    console.log('C')
} else if (nilaiDoe >= 50) {
    console.log('D')
} else {
    console.log('E')
}


//soal 2
var tanggal = 30;
var bulan = 5;
var tahun = 1994;
// Output 30 Mei 1994

//.... jawaban soal 2
switch (bulan) {
    case 1:
        console.log(`${tanggal} Januari ${tahun}`)
        break;
    case 2:
        console.log(`${tanggal} Februari ${tahun}`)
        break;
    case 3:
        console.log(`${tanggal} Maret ${tahun}`)
        break;
    case 4:
        console.log(`${tanggal} April ${tahun}`)
        break;
    case 5:
        console.log(`${tanggal} Mei ${tahun}`)
        break;
    case 6:
        console.log(`${tanggal} Juni ${tahun}`)
        break;
    case 7:
        console.log(`${tanggal} Juli ${tahun}`)
        break;
    case 8:
        console.log(`${tanggal} Agustus ${tahun}`)
        break;
    case 9:
        console.log(`${tanggal} September ${tahun}`)
        break;
    case 10:
        console.log(`${tanggal} Oktober ${tahun}`)
        break;
    case 11:
        console.log(`${tanggal} November ${tahun}`)
        break;
    case 12:
        console.log(`${tanggal} Desember ${tahun}`)
        break;
    default:
        break;
}


// soal 3
/**
LOOPING PERTAMA
2 - I love coding
4 - I love coding
6 - I love coding
8 - I love coding
10 - I love coding
12 - I love coding
14 - I love coding
16 - I love coding
18 - I love coding
20 - I love coding
LOOPING KEDUA
20 - I will become a frontend developer
18 - I will become a frontend developer                                                                              
16 - I will become a frontend developer
14 - I will become a frontend developer
12 - I will become a frontend developer
10 - I will become a frontend developer
8 - I will become a frontend developer
6 - I will become a frontend developer
4 - I will become a frontend developer
2 - I will become a frontend developer
**/

//.... jawaban soal 3
console.log('LOOPING PERTAMA')
for (var i = 2; i <= 20; i += 2) {
    console.log(`${i} - I love coding`)
}

console.log('LOOPING KEDUA')
for (var j = 20; j > 0; j -= 2) {
    console.log(`${j} - I will become a frontend developer`)
}


//soal 4
/**
1 - Santai
2 - Berkualitas
3 - I Love Coding 
4 - Berkualitas
5 - Santai
6 - Berkualitas
7 - Santai
8 - Berkualitas
9 - I Love Coding
10 - Berkualitas
11 - Santai
12 - Berkualitas
13 - Santai
14 - Berkualitas
15 - I Love Coding
16 - Berkualitas
17 - Santai
18 - Berkualitas
19 - Santai
20 - Berkualitas
**/

//.... jawaban soal 4
for (var a = 1; a <= 20; a++) {
    if ((a % 3) === 0 && (a % 2) === 1) {
        console.log(`${a} - I Love Coding`)
    } else if ((a % 2) === 1) {
        console.log(`${a} - Santai`)
    } else {
        console.log(`${a} - Berkualitas`)
    }
}


// soal 5
/**
#
##
###
####
#####
######
#######
**/

//.... jawaban soal 5
for (var b = 0; b < 7; b++) {
    var pagar = '#';
    for (var c = 0; c < b; c++ ) {
        pagar += '#'
    }
    console.log(pagar)
}