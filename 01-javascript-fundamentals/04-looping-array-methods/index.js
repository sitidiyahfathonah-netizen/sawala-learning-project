
const siswa = [
    { nama: "Budi", nilai: 85, },
    { nama: "Ani", nilai: 90, },
    { nama: "Citra", nilai: 75, },
];

for (const datasiswa of siswa) {
    console.log(datasiswa.nama, datasiswa.nilai);
}

//mengulang data (array)
// array.forEach()

siswa.forEach(function (dataSiswa) {
    console.log(dataSiswa.nama, dataSiswa.nilai);
})

// array.map() membuat array baru
const namasiswa = siswa.map(function (dataSiswa) {
    return dataSiswa.nama;
})

console.log(namasiswa);

// array.filter()membuat array baru yang memenuhi kondisi tertentu
const nilaiSiswa = siswa.filter(function (dataSiswa) {
    return dataSiswa.nilai >= 80;
})

console.log(nilaiSiswa);

// find()mencari satu data pertama yang cocok.
const siswaAni = siswa.find(function (dataSiswa) {
    return dataSiswa.nama === "Ani";
})

console.log(siswaAni);

//some()mengecek apakah ada minimal 1 data yang memenuhi kondisi tertentu
const nilaiDibawah80 = siswa.some(function (dataSiswa) {
    return dataSiswa.nilai < 80;
})

console.log(nilaiDibawah80);

//every()mengecek apakah semua data memenuhi kondisi tertentu
const nilaiDiatas60 = siswa.every(function (dataSiswa) {
    return dataSiswa.nilai >= 70;
})

console.log(nilaiDiatas60);

//LATIHAN
const nilaiUjian = [
    { nama: "Budi", nilai: 85 },
    { nama: "Ani", nilai: 90 },
    { nama: "Citra", nilai: 75 },
];

//tentukan apakah semua siswa lulus (nilai >= 80)
const nilaiSiswaLulus = nilaiUjian.filter(function (dataSiswa) {
    return dataSiswa.nilai >= 80;
})

console.log("Siswa yang lulus", nilaiSiswaLulus);

//tentukan siswa lulus (nama siswa yang nilainya ≥ 80)
const namaSiswaLulus = nilaiSiswaLulus.map(function (dataSiswa) {
    return dataSiswa.nama;
})

console.log("Daftar nilai siswa", namaSiswaLulus);

//reduce() digunakan untuk mengolah seluruh isi array menjadi satu hasil.
const totalNilai = siswa.reduce(function (total, dataSiswa) {
    return total + dataSiswa.nilai;
}, 0);

console.log("Total nilai", totalNilai);

//hitung rata rata nilai siswa
const RataNilai = totalNilai / siswa.length;
console.log("Rata - rata nilai", RataNilai.toFixed(2));//menampilkan 2 angka dibelakang koma

//Latihan mini
const siswaTertinggi = siswa.reduce(function (siswaTertinggi, dataSiswa) {
    if (dataSiswa.nilai > siswaTertinggi.nilai) {
        return dataSiswa;
    } else {
        return siswaTertinggi;
    }
}, siswa[0]);

console.log("Siswa dengan nilai tertinggi adalah", siswaTertinggi.nama);

//latihan akhir
//mencari siswa dengan niali terendah

const siswaNilaiTerendah = siswa.reduce(function (siswaNilaiTerendah, dataSiswa) {
    if (dataSiswa.nilai < siswaNilaiTerendah.nilai) {
        return dataSiswa;
    } else {
        return siswaNilaiTerendah;
    }
}, siswa[0]);

console.log("Siswa dengan nilai terendah adalah", siswaNilaiTerendah.nama);