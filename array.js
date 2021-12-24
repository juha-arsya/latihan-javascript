// array
// "Kumpulan nilai, yang memiliki index."

// Menampilakan isi array

var arr = ["Juha", "Arsya", "Dani", "Arifu"];

for (var i = 0; i < arr.length; i++) {
  console.log("Mahasiswa ke-" + (i + 1) + " :" + arr[i]);
}

// METHOD PADA ARRAY :

// 1. length :
// Untuk mengetahui jumlah elemen pada array

var arr = ["Juha", "Arsya", "Dani", "Arif"];
console.log(arr.length); // 4

// 2. join :
// Untuk mengetahui jumlah elemen pada array

var arr = ["Juha", "Arsya", "Dani", "Arifu"];
console.log(arr.join(" - ")); // Juha - Arsya - Dani - Arif

// 3. push, pop, shift, unshift :
// menambah atau menghapus elemen pada array

// push & pop ( akhir array )
// push : menambah elemen baru pada akhir array
// pop  : menghapus elemen pada akhir array

var arr = ["Juha", "Arsya", "Dani", "Arifu"];
arr.push("Tampan", "Pemberani");
arr.pop();
arr.pop();
console.log(arr.join(" - "));

// unshift & shift ( awal array )
// unshift : menambah elemen baru pada awal array
// shift   : menghapus elemen pada awal array

var arr = ["Dani", "Arifu", "Juha", "Arsya"];
arr.unshift("Tampan", "Pemberani");
arr.shift();
arr.shift();
console.log(arr.join(" - "));

// 4. splice :
// Menyisipkan elemen array pada tengah-tengah

// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)

var arr = ["Juha", "Arsya", "Arifu"];
arr.splice(2, 0, "Dani", "Tampan");
console.log(arr.join(" - "));

// 5. slice :
// Mengiris arry menjadi array yg baru

// slice(awal, akhir)

var arr = ["Juha", "Arsya", "Dani", "Arif", "Moona"];
var arr2 = arr.slice(1, 4);
console.log(arr.join(" - "));
console.log(arr2.join(" - "));

// 6. forEach
// mengeksekusi setiap item pada array

var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// for( var i=0; i<angka.length; i++ ) {
//   console.log(angka[i]);
// }

angka.forEach(function (e) {
  console.log(e);
});

//

var angka = [1, 2, 3, 4, 5, 6, 7, 8];
var nama = ["Juha", "Arsya", "Dani", "Arif"];

nama.forEach(function (e, i) {
  console.log("Mahasiswa ke-" + (i + 1) + " adalah : " + e);
});

// 7. map
// mengembalikan nilai array

var angka = [1, 2, 3, 4, 5, 6, 7, 8];
var angka2 = angka.map(function (e) {
  return e * 2;
});
console.log(angka2.join(" - "));

// 8. sort
// mengurutkan isi array

var angka = [1, 2, 7, 5, 3, 6, 8, 4];
console.log(angka.join(" - "));

angka.sort();
console.log(angka.join(" - "));

//

var urutAngka = [1, 3, 6, 11, 23, 5, 33, 9, 57];
urutAngka.sort(function (a, b) {
  return a - b;
});
console.log(urutAngka.join(" - "));

// 9. filter, find :
// mencari elemen pada array

// filter :
// mengembalikan banyak nilai

var angka = [1, 3, 6, 11, 23, 5, 33, 9, 57];
var angka2 = angka.filter(function (x) {
  return x > 10;
});
console.log(angka2.join(" - "));

// find :
// mengembalikan satu nilai

var angka = [1, 3, 6, 11, 23, 5, 33, 9, 57];
var angka2 = angka.find(function (x) {
  return x > 10;
});
console.log(angka2);
