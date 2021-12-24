// PENGKONDISIAN :
// IF
// IF-ELSE
// IF-ELSE IF-ELSE
// SWITCH

// LATIHAN PENGKONDISIAN 1 (IF-ELSE)

var jmlAngkot = 10;
var angkotBeroperasi = 6;

for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= 6) {
    console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.");
  } else {
    console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi.");
  }
}

// LATIHAN PENGKONDISIAN 2 (IF-ELSE IF-ELSE)

var angka = prompt("Masukkan angka :");

if (angka % 2 === 0) {
  alert(angka + " adalah bilangan GENAP");
} else if (angka % 2 === 1) {
  alert(angka + " adalah bilangan GANJIL");
} else {
  alert("Anda tidak memasukkan inputan angka");
}

// LOGIKA
// AND = &&
// OR  = ||

var jmlAngkot = 10;
var angkotBeroperasi = 6;

for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= 6 && noAngkot !== 5) {
    console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.");
  } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
    console.log("Angkot No. " + noAngkot + " sedang lembur.");
  } else {
    console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi.");
  }
}

// LATIHAN PENGKONDISIAN 3 (SWITCH)

var item = prompt("Masukkan nama makanan / minuman : \n (contoh: nasi, daging, susu, hamburger, softdrink)");

switch (item) {
  case "nasi":
  case "daging":
  case "susu":
    alert("makanan / minuman SEHAT!");
    break;
  case "hamburger":
  case "softdrink":
    alert("makanan / minuman TIDAK SEHAT!");
    break;
  default:
    alert("anda memasukkan nama makanan / minuman yang salah!");
    break;
}
