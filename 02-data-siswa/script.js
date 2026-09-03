const siswa = [
    { nama: "Andi", umur: 17, nilai: 85 },
    { nama: "Budi", umur: 18, nilai: 70 },
    { nama: "Citra", umur: 17, nilai: 90 },
    { nama: "Deni", umur: 18, nilai: 60 },
];

const siswaLulus = siswa.filter(function (dataSiswa) {
    return dataSiswa.nilai >= 80;
});

console.log("Daftar siswa lulus : ", siswaLulus);

for (const dataSiswa of siswaLulus) {
    console.log(dataSiswa.nama + "-" + dataSiswa.nilai);
}

const siswaDicari = siswa.find(function (dataSiswa) {
    return dataSiswa.nama === "Budi";
});


console.log("Siswa yang dicari : ", siswaDicari);


siswa.forEach(function (dataSiswa) {
    console.log(dataSiswa.nama + " " + "memiliki nilai" + " " + dataSiswa.nilai);
});

const nilaisiswa = siswa.map(function (dataSiswa) {
    return dataSiswa.nilai;
});

console.log("Daftar nilai siswa", nilaisiswa);

const totalnilai = siswa.reduce(function (total, dataSiswa) {
    return total + dataSiswa.nilai;
}, 0);

console.log("Total nilai", totalnilai);