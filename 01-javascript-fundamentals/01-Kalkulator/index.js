//MINI EXERCISE - KALKULATOR


//data angka
const angka1 = 20;
const angka2 = 10;


console.log("kalkulator langsung")
//operasi matematika
console.log("Penjumlahan:", angka1 + angka2);
console.log("Pengurangan:", angka1 - angka2);
console.log("Perkalian:", angka1 * angka2);
console.log("Pembagian:", angka1 / angka2);
console.log("Sisa Pembagian:", angka1 % angka2);


//function kalkulator

//penambahan
function tambah(angka1, angka2) {
    return angka1 + angka2;
}

//pengurangan
function kurang(angka1, angka2) {
    return angka1 - angka2;
}

//perkalian
function kali(angka1, angka2) {
    return angka1 * angka2;
}

//pembagian
function bagi(angka1, angka2) {
    return angka1 / angka2;
}

//sisa pembagian
function sisaBagi(angka1, angka2) {
    return angka1 % angka2;
}

console.log("function kalkulator")
//menampilkan hasil
console.log("Penjumlahan:", tambah(angka1, angka2));
console.log("Pengurangan:", kurang(angka1, angka2));
console.log("Perkalian:", kali(angka1, angka2));
console.log("Pembagian:", bagi(angka1, angka2));
console.log("Sisa Pembagian:", sisaBagi(angka1, angka2));
