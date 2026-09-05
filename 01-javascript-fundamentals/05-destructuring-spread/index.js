//object destructuring
const siswa = {
    nama: "budi",
    nilai: 80,
    jurusan: "x pplg"
}

const { nama, jurusan } = siswa;
console.log("Nama :", nama);
console.log("Jurusan :", jurusan);


//array destructuring
const warna = ["merah", "kuning", "hijau"];
const [warna1, warna2, warna3] = warna;

console.log("Warna pertama :", warna1);
console.log("Warna kedua :", warna2);
console.log("Warna ketiga :", warna3);

//skip data
const buah = ["Apel", "Mangga", "Jeruk"];
const [buah1, , buah3, ] = buah;

console.log("buah pertama:",buah1);
console.log("buah ketiga:",buah3);

//spread operator
const angka = [1, 2, 3];
const angka2 =[...angka];

console.log(angka2);

//gabungkan array menggunkan spread operator
const buahX = ["pisang", "mangga"];
const buahY = ["apel", "jeruk"];
const buahLengkap = [...buahX, ...buahY];

console.log(buahLengkap);

//spread object
const murid ={
    nama: "Budi",
    nilai: 80
}

const muridLengkap = { 
    ...murid,
    jurusan: "x pplg"
 };

console.log(muridLengkap);

//gabungan destructuring + spread operator
const mahasiswa ={
    nama1: "Diyah",
    nilai1: "90",
    jurusan: "TI",
}
const{nama1, nilai1} = mahasiswa
console.log("Nama :", nama1);
console.log("Nilai :", nilai1);

const siswaBaru ={ 
    ...mahasiswa,
    status: "Lulus",
}
console.log(siswaBaru);

//LATIHAN
const produk ={
    namaProduk:"Laptop",
    harga:7000000,
    kategori: "Elektronik",
};
const {namaProduk, harga} = produk
console.log("NamaProduk:", namaProduk);
console.log("harga:", harga);

const produkBaru ={
    ...produk,
    stok: 10,
};
console.log(produkBaru);