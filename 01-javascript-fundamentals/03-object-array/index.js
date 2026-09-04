// object
const produk = {
    nama: "Buku Tulis",
    harga: 2000,
    stok: 170,
}

console.log(produk.nama);
console.log(produk.harga);
console.log(produk.stok = 150);

//array
const buah = ["Apel", "Jeruk", "Mangga"];

console.log(buah[0]);

//array + object
const siswa = [
    {
        nama: "Budi",
        nilai: 85,
    },
    {
        nama: "Ani",
        nilai: 90,
    },
    {
        nama: "Citra",
        nilai: 75,
    },
]
console.log(siswa[0].nama);
console.log(siswa[0].nilai);

//menambahkan data ke array
buah.push("Semangka");
console.log(buah);

//menambahkan data ke array + object
//menambahkan length dari array + object
siswa.push({
    nama: "Deni",
    nilai: 80,
});

console.log(siswa.length);

//menghapus item terakhir dari array + object
siswa.pop();
console.log(siswa);

//mengedit item terakhir dari array + object
siswa[siswa.length - 1] = {
    nama: "Deni",
    nilai: 95,
};
console.log(siswa);

//menghapus item pertama dari array + object
siswa.shift();
console.log(siswa);

//menambahkan unshift(data awal)
siswa.unshift({
    nama: "Eka",
    nilai: 88,
});
console.log(siswa);
