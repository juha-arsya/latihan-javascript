// PERULANGAN :
// FOR
// WHILE
// DO WHILE

var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

while (noAngkot <= angkotBeroperasi) {
  console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.");

  noAngkot++;
}

for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
  console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi.");
}

// Segitiga Bintang
var s = "";
for (var i = 0; i < 5; i++) {
  for (var j = 0; j <= i; j++) {
    s += "*";
  }
  s += "\n";
}
console.log(s);

// Segitiga Bintang Terbalik
var s = "";
for (var i = 5; i > 0; i--) {
  for (var j = 0; j < i; j++) {
    s += "*";
  }
  s += "\n";
}
console.log(s);

// Segitiga Bintang
var s = "";
var b = 5;
for (var h = 1; h <= b; h++) {
  for (var i = 1; i <= b - h; i++) {
    s += " ";
  }
  for (var j = 1; j < 2 * h; j++) {
    s += "*";
  }
  s += "\n";
}

console.log(s);
