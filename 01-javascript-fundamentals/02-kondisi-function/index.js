//kondisi (if else)
const cekKelulusan = (nilai) => {
    if (nilai >= 75) {
        return "lulus";
    } else {
        return "tidak lulus";
    }
}
console.log(cekKelulusan(80));

//function
const hitungTotal = (harga, jumlah) => {
    const total = harga * jumlah;
    return total;
}
console.log(hitungTotal(10000, 3));

//function
function cekNilai(nilai) {
    if (nilai >= 90) {
        return "A";
    } else if (nilai >= 80) {
        return "B";
    } else if (nilai >= 70) {
        return "C";
    } else {
        return "D";
    }
}
console.log(cekNilai(85));