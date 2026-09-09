//kondisi (if else)
const cekKelulusan = (nilai) => {
    if (nilai >= 75) {
        return "lulus";
    } else {
        return "tidak lulus";
    }
}
console.log(cekKelulusan(80));

//function arrow menggunakan => (lebih singkat)
const hitungTotal = (harga, jumlah) => {
    const total = harga * jumlah;
    return total;
}
console.log(hitungTotal(10000, 3));

//function biasa
function cekNilai(nilai) {
    if (nilai >= 90) { //jika nilainya 90 atau lebih maka akan menampilkan A
        return "A";
    } else if (nilai >= 80) { //jika nilainya 80 atau lebih maka akan menampilkan B
        return "B";
    } else if (nilai >= 70) { //jika nilainya 70 atau lebih maka akan menampilkan C
        return "C";
    } else { //jika nilainya kurang dari 70 maka akan menampilkan D
        return "D";
    }
}
console.log(cekNilai(85));