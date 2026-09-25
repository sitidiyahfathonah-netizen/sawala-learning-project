/*TypeScript adalah JavaScript yang dilengkapi sistem tipe data 
sehingga kita bisa menentukan tipe data yang diharapkan 
dan mendeteksi kesalahan tipe saat pengembangan. */
// ========================================
// TypeScript Basic
// ========================================

// Tipe Data Dasar
let nama: string = "Diyah";
let umur: number = 18
let sudahPkl: boolean = true

// Function TypeScript
function tambah(
    a: number, //parameter a harus bertipe number
    b: number //parameter b harus bertipe number
): number { //return harus bertipe number
    return a + b
}
console.log(tambah(20, 3))
