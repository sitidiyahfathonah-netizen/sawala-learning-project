/*Promise adalah object JavaScript yang merepresentasikan hasil dari suatu proses asynchronous,
 baik yang berhasil maupun gagal
//Promise memiliki 3 state: 
//asynchronous function adalah function yang berjalan di latar belakang 
//1. Pending: proses sedang berlangsung
//2. Fulfilled: proses berhasil
//3. Rejected: proses gagal

//resolve, reject, fulfilled

//.then() → menangani hasil Promise yang berhasil (resolve).
//Namun, .then() juga bisa menangani hasil ketika Promise selesai,
//bergantung pada callback yang diberikan.
//async/await → Fungsi async mengembalikan Promise,
 sedangkan await menunggu hasil Promise sebelum melanjutkan eksekusi fungsi.

//async-await
/*const pesanMakan = new Promise((resolve) =>{
    setTimeout(() =>{
        resolve("makanan sudah siap!")
    }, 1000)
})
const makanMakanan = new Promise((resolve)=>{
    setTimeout(() =>{
        resolve("saya sudah selesai makan!")
    }, 3000)
})
async function tampilkanMakanan (){
    const status = await pesanMakan
    console.log(status)
    const status2 = await makanMakanan
    console.log(status2)
}


tampilkanMakanan()*/

function cekMakanan(makananTersedia){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (makananTersedia === true) {
                resolve("makanan tersedia!")
            } else {
                reject("makanan tidak tersedia!")
            }
        }, 1000)
    })
}

function pesanMakanan(makananTersedia) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (makananTersedia === true) {
                resolve("makanan sedang dibuat!")
            } else {
                reject("makanan tidak tersedia!")
            }
        }, 1000)
    })
}

function selesaiMemasak(makananTersedia){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (makananTersedia === true) {
                resolve("makanan selesai!")
            } else {
                reject("makanan tidak selesai!")
            }
        }, 1000)
    })
}

function makanMakanan2(makananTersedia) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (makananTersedia === true) {
                resolve("saya sudah selesai makan!")
            } else {
                reject("saya tidak bisa makan!")
            }
        }, 1000)
    })
}

function bayarMakanan(pembayaranTersedia){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (pembayaranTersedia === true) {
                resolve("pembayaran berhasil")
            } else {
                reject("pembayaran gagal")
            }
        }, 1000)
    })
}

async function tampilkanMakanan2() {
    try {
       const statusCek = await cekMakanan(true) //await menunggu promise selesai
       console.log(statusCek)
       
       const statusPesan = await pesanMakanan(true)
       console.log(statusPesan)

       const statusSelesai = await selesaiMemasak(true)
       console.log(statusSelesai)

       const statusMakan = await makanMakanan2(true)
       console.log(statusMakan)

       const statusBayar = await bayarMakanan(true)
       console.log(statusBayar)
    } catch (error) { //catch digunakan untuk menangkap error
        console.log(error)
    } finally { //finally akan tetap berjalan meskipun terjadi error atau tidak
        console.log("Proses selesai!")
    }
}

tampilkanMakanan2()

/*catatan 
-function cekMakanan digunakan untuk mengecek apakah makanan tersedia
-function pesanMakanan digunakan untuk memesan makanan
-function selesaiMemasak digunakan untuk menyelesaikan masakan
-function makanMakanan2 digunakan untuk makan makanan
-function bayarMakanan digunakan untuk membayar makanan
-function tampilkanMakanan2 digunakan untuk menampilkan semua fungsi*/

/* async await adalah cara untuk menjalankan promise secara berurutan 
-await menunggu promise selesai sebelum melanjutkan
-async function digunakan untuk menjalankan promise
-try digunakan untuk mencoba menjalankan kode yang berpotensi error
-catch digunakan untuk menangkap error jika terjadi
-finally akan tetap berjalan meskipun terjadi error atau tidak*/
