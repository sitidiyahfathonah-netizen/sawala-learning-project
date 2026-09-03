const angka1 = "";
const angka2 = "";

const penjumlahan = angka1 + angka2;
const pengurangan = angka1 - angka2;
const perkalian = angka1 * angka2;
const pembagian = angka1 / angka2;

console.log("Penjumlahan:", penjumlahan)
console.log("pengurangan : ", pengurangan)
console.log("perkalian: ", perkalian)
console.log("pembagian: ", pembagian)

function tambah(angka1, angka2) {
    return angka1 + angka2;
}

function kurang(angka1, angka2) {
    return angka1 - angka2;
}

function kali(angka1, angka2) {
    return angka1 * angka2;
}

function bagi(angka1, angka2) {
    return angka1 / angka2;
}

console.log("penjumlahan: ", tambah(10, 20));
console.log("pengurangan: ", kurang(10, 20));
console.log("perkalian: ", kali(10, 20));
console.log("pembagian: ", bagi(10, 20));

const inputangka1 = document.getElementById("angka1");
const inputangka2 = document.getElementById("angka2");
const hasil = document.getElementById("hasil");

function ambilAngka() {
    if (inputangka1.value === "" || inputangka2.value === "") {
        hasil.textContent = "Masukkan kedua angka terlebih dahulu!!";
        return null;
    }

    const angka1 = Number(inputangka1.value);
    const angka2 = Number(inputangka2.value);

    return [angka1, angka2];
}

console.log(inputangka1);
console.log(inputangka2);
console.log(hasil);

console.log(inputangka1.value);
console.log(inputangka2.value);

const angkaInput1 = Number(inputangka1.value);
const angkaInput2 = Number(inputangka2.value);

console.log("Angka 1:", angkaInput1);
console.log("Angka 2:", angkaInput2);
console.log("Hasil tambah:", angkaInput1 + angkaInput2);

const tambahBtn = document.getElementById("tambahBtn");
tambahBtn.addEventListener("click", function () {
    const data = ambilAngka();

    if (data === null) {
        return;
    }

    const [angka1, angka2] = data;

    const hasilTambah = tambah(angka1, angka2);

    hasil.textContent = hasilTambah;
});

const kurangBtn = document.getElementById("kurangBtn");
kurangBtn.addEventListener("click", function () {
    const data = ambilAngka();

    if (data === null) {
        return;
    }

    const [angka1, angka2] = data;

    const hasilkurang = kurang(angka1, angka2);
    hasil.textContent = hasilkurang;
});

const kaliBtn = document.getElementById("kaliBtn");
kaliBtn.addEventListener("click", function () {
    const data = ambilAngka();

    if (data === null) {
        return;
    }

    const [angka1, angka2] = data;

    const hasilKali = kali(angka1, angka2);
    hasil.textContent = hasilKali
});

const bagiBtn = document.getElementById("bagiBtn");
bagiBtn.addEventListener("click", function () {
    const data = ambilAngka();

    if (data === null) {
        return;
    }

    const [angka1, angka2] = data;

    if (angka2 === 0) {
        hasil.textContent = "Tidak bisa membagi dengan 0!!"
        return;
    }
    const hasilBagi = bagi(angka1, angka2);
    hasil.textContent = hasilBagi
});