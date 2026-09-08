import produk from "./data.js";

//1. tampilkan semua produk dengan perulangan
console.log("DAFTAR SEMUA PRODUK");
produk.forEach(function (dataProduk) {
    console.log(`ID: ${dataProduk.id}, Nama: ${dataProduk.nama}, Harga: ${dataProduk.harga}, Kategori: ${dataProduk.kategori}`);
})


//2. filter produk elektronik
const produkElektronik = produk.filter(function (dataProduk) {
    return dataProduk.kategori === "Elektronik";
})
console.log("PRODUK ELEKTRONIK")
console.log("Produk Elektronik: ", produkElektronik);

//3. ubah menjadi nama produk saja
const produkElektronikNama = produkElektronik.map(function (dataProduk) {
    return dataProduk.nama;
});
console.log("DAFTAR NAMA PRODUK")
console.log("Produk Elektronik: ", produkElektronikNama);


//4. mencari produk berdasarkan nama
const produkDicari = produk.find(function (dataProduk) {
    return dataProduk.nama === "Mouse";
})
console.log("MENCARI PRODUK BERDASARKAN NAMA")
console.log("Produk dengan nama Mouse: ", produkDicari);


//5. filter berdasarkan nama/kata kunci menggunakan includes() dan toLowerCase() agar bisa mencari nama produk walaupun hurufnya besar
const kataKunci = "tulis";
const hasilPencarian = produk.filter(function (dataProduk) {
    return dataProduk.nama.toLowerCase().includes(kataKunci);
});
console.log("MENCARI PRODUK BERDASARKAN KATA KUNCI");
console.log("Produk dengan nama mengandung kata ", kataKunci, ": ", hasilPencarian);


//6. filter berdasarkan kategori
const kategoriDicari = "ATK";
const hasilKategori = produk.filter(function (dataProduk) {
    return dataProduk.kategori === kategoriDicari;
});
console.log("MENCARI PRODUK BERDASARKAN KATEGORI");
console.log("Produk dengan kategori ", kategoriDicari, ": ", hasilKategori);


//7. filter berdasarkan harga
const hargaDicari = 50000;
const hasilHarga = produk.filter(function (dataProduk) {
    return dataProduk.harga === hargaDicari;
});
console.log("MENCARI PRODUK BERDASARKAN HARGA");
console.log("Produk dengan harga ", hargaDicari, ": ", hasilHarga);