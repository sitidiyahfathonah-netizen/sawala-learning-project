export {}
// ========================================
// Interface
// ========================================


//interface digunakan untuk membuat aturan struktur sebuah object.
interface Siswa {
    nama: string
    umur: number
    sudahPkl: boolean
}

const siswa: Siswa = {
    nama: "Diyah",
    umur: 18,
    sudahPkl: true
}

console.log(siswa)

// ========================================
// Array TypeScript
// ========================================
const namaSiswa: string[] = [ //array namaSiswa hanya boleh berisi string
    "Diyah",
    "Eka",
    "Putri"]
console.log(namaSiswa)

// ========================================
// Union Type
// ========================================

// Union Type memungkinkan variabel memiliki lebih dari satu tipe data.
// Simbol | dibaca "atau".
let nilai: number | string = 80 //nilai bisa berisi number atau string
console.log(nilai)

// ========================================
// Optional Property
// ========================================

// Tanda ? berarti property boleh ada atau tidak ada.
interface User{
    nama : string //wajib di isi
    email ?: string //tidak wajib di isi karena ada tanda ? jadi opsional
}

const user: User = {
    nama : "Diyah",

}

console.log(user)

// ========================================
// Type Alias
// ========================================

// Type Alias digunakan untuk memberi nama pada suatu tipe data.
type Produk ={
    nama:string
    harga:number
    tersedia: boolean
}

const produk: Produk = {
    nama: "Buku",
    harga: 10000,
    tersedia: true
}

console.log(produk)

//CATATAN 
//Interface : digunakan untuk membuat aturan struktur sebuah object.
//Array TypeScript : array hanya boleh berisi tipe data yang sama.
//Union Type : memungkinkan variabel memiliki lebih dari satu tipe data.
//Optional Property : tanda ? berarti property boleh ada atau tidak ada.
//Type Alias : digunakan untuk memberi nama pada suatu tipe data.