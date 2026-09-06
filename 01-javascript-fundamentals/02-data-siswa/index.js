// MINI EXERCISE - DATA SISWA


//data siswa
const datasiswa = [
    {nama: "Diyah", umur: 18, nilai:95},
    {nama: "Risa", umur: 18, nilai:70},
    {nama: "Ira", umur: 17, nilai:90},
    {nama: "Rizka", umur: 17, nilai:65},
    {nama: "Kirana", umur: 17, nilai:85},
];

//menampilkan data siswa
console.log("1. DAFTAR SEMUA SISWA");
datasiswa.forEach(function(dataSiswa) {
    console.log(
        "Nama:", dataSiswa.nama,
        "Umur:", dataSiswa.umur,
        "Nilai:", dataSiswa.nilai
    );
});

//memfilter siswa yang lulus
const datasiswaLulus = datasiswa.filter(function(dataSiswa){
    return dataSiswa.nilai >= 80;
});

console.log("2. DAFTAR SISWA LULUS", datasiswaLulus);

for(const dataSiswa of datasiswaLulus){
    console.log(dataSiswa.nama + ":" +dataSiswa.nilai);
}

//mencari siswa berdasarkan nama
const datasiswaDicari = datasiswa.find(function(dataSiswa){
    return dataSiswa.nama === "Diyah";
});


console.log("3. SISWA YANG DICARI",datasiswaDicari);

//mengambil data nama, nilai dan umur
console.log("4. DATA NAMA , NILAI DAN UMUR");
datasiswa.forEach(function(dataSiswa){
    console.log(dataSiswa.nama+ ":" + dataSiswa.nilai + ":" + dataSiswa.umur);
});


//menampilkan data nilai saja
const nilaisiswa = datasiswa.map(function(dataSiswa){
    return dataSiswa.nilai;
});

console.log("5. DAFTAR NILAI SISWA", nilaisiswa);


//menjumlahkan nilai
const totalnilai = datasiswa.reduce(function(total, dataSiswa){
    return total + dataSiswa.nilai;
}, 0);

console.log("6. TOTAL NILAI", totalnilai);


//menampilkan nama siswa yang lulus saja
const namaSiswaLulus = datasiswaLulus.map(function(dataSiswa){
    return dataSiswa.nama;
});

console.log("7. DAFTAR NAMA SISWA LULUS", namaSiswaLulus);


//menghitung nilai rata-rata
const nilaiRatarata = totalnilai / datasiswa.length;
console.log("8. NILAI RATARATA", nilaiRatarata);


//mencari siswa dengan nilai tertinggi
const siswaNilaiTertinggi = datasiswa.filter(function (dataSiswa) {
    return dataSiswa.nilai === Math.max(...datasiswa.map(data => data.nilai));
});

console.log("9. SISWA DENGAN NILAI TERTINGGI ", siswaNilaiTertinggi);


//mencari siswa dengan nilai terendah
const siswaNilaiTerendah = datasiswa.filter(function (dataSiswa) {
    return dataSiswa.nilai === Math.min(...datasiswa.map(data => data.nilai));
});

console.log("10. SISWA DENGAN NILAI TERENDAH", siswaNilaiTerendah);