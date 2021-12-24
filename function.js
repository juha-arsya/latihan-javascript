//  Menghitung volume 2 kubus

function jumlahVolume2Kubus(a, b) {
  var total;
  var volumeA;
  var volumeB;

  volumeA = a * a * a;
  volumeB = b * b * b;

  total = volumeA + volumeB;

  return total;
}

console.log(jumlahVolume2Kubus(8, 5));

// Lebih sederhana / REFACTORING
// Menghitung volume balok

function jumlahVolumeBalok(p, l, t) {
  return p * l * t;
}

console.log(jumlahVolumeBalok(3, 6, 4));

// FUNGTION REKUSRIF

function tampilAngka(n) {
  if (n === 0) return; // BASE CASE

  console.log(n);

  return tampilAngka(n - 1);
}

tampilAngka(10);

// CONTOH REKURSIF : FAKTORIAL

function faktorial(n) {
  if (n === 0) return 1;
  return n * faktorial(n - 1);
}

console.log(faktorial(5));
