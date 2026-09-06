import produk from "./data.js";

//1. tampilkan semua produk dengan perulangan
for (let i = 0; i < produk.length; i++) {
    console.log(`ID: ${produk[i].id}, Nama: ${produk[i].nama}, Harga: ${produk[i].harga}, Kategori: ${produk[i].kategori}`);
}


//2. filter produk elektronik
const produkElektronik = produk.filter(function (dataProduk) {
    return dataProduk.kategori === "Elektronik";
});

console.log("Produk Elektronik: ", produkElektronik);

//3. ubah menjadi nama produk saja
const produkElektronikNama= produkElektronik.map(function (dataProduk) {
    return dataProduk.nama;
});

console.log("Produk Elektronik: ", produkElektronikNama);


//4. mencari produk berdasarkan nama
const produkDicari=produk.find(function(dataProduk){
    return dataProduk.nama === "Mouse";
})

console.log("Produk dengan nama Mouse: ", produkDicari);

//5. filter berdasarkan nama/kata kunci
const kataKunci = "tulis";
const hasilPencarian = produk.filter(function (dataProduk) {
    return dataProduk.nama.toLowerCase().includes(kataKunci);
});
console.log("Produk dengan nama mengandung kata ", kataKunci, ": ", hasilPencarian);

//6. filter berdasarkan kategori
const kategoriDicari = "ATK";
const hasilKategori = produk.filter(function (dataProduk) {
    return dataProduk.kategori === kategoriDicari;
});
console.log("Produk dengan kategori ", kategoriDicari, ": ", hasilKategori);

//7. filter berdasarkan harga
const hargaDicari = 50000;
const hasilHarga = produk.filter(function (dataProduk) {
    return dataProduk.harga === hargaDicari;
});
console.log("Produk dengan harga ", hargaDicari, ": ", hasilHarga);