// object
// "Kumpulan nilai, yang memiliki nama."

// Membuat object
var mhs = {
  nama: "Juha Arsya",
  umur: 20,
  ips: [3.75, 3.9, 3.9],
  alamat: {
    jalan: "jl. aja dulu No. 699",
    kota: "Tokyo",
    provinsi: "Musashi",
  },
};

// Membuat object pada js

// 1. object Literal
var mhs1 = {
  nama: "Juha Arsya",
  nim: "21120120120169",
  email: "juha.tampan21@gmail.com",
  jurusan: "Teknik Komputer",
};

var mhs2 = {
  nama: "Moona Sawada",
  nim: "120120020020",
  email: "moona.sawada23@gmail.com",
  jurusan: "Bahasa Jepang",
};

// 2. Function Declaration
function buatObjectMahasiswa(namaa, nim, email, jurusan) {
  var mhs = {};
  mhs.nama = namaa;
  mhs.nim = nim;
  mhs.email = email;
  mhs.jurusan = jurusan;
  return mhs;
}

var mhs3 = buatObjectMahasiswa("Azusa", "21120120130131", "azunyan@gmail.com", "Musik");

// 3. Constructor function (keyword new)
function Mahasiswa(nama, nim, email, jurusan) {
  (this.nama = nama), (this.nim = nim), (this.email = email), (this.jurusan = jurusan);
}

var mhs4 = new Mahasiswa("Mio Akiyama", "21120120101100", "mio.akiyama89@gmail.com", "Musik");

// 4. this

// cara 1 - function declaration
function halo() {
  console.log(this);
  console.log("helo");
}
this.halo(); // this mengembalikan object global

// cara 2 - object literal
var obj = { a: 10, nama: "Juha" };
obj.halo = function () {
  console.log(this);
  console.log("halo");
};
obj.halo(); // this mengembalikan object yang bersangkutan

// cara 3 - constructor
function Halo() {
  console.log(this);
  console.log("halo");
}
var obj1 = new Halo();
var obj2 = new Halo(); //this mengembalikan object yang baru dibuat
