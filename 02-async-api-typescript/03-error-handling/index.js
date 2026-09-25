// ========================================
// Error Handling dengan .then() dan .catch()
// ========================================
/*Error handling digunakan untuk menangani kesalahan agar
program bisa merespons kegagalan dengan lebih terkontrol.*/
//fetch("https://jsonplaceholder.typicode.com/usersalah") //URL yang salah untuk menunjukkan error

console.log("=== FETCH DENGAN THEN CATCH ===");
fetch("https://jsonplaceholder.typicode.com/users") //URL yang benar untuk menunjukkan data yang berhasil diambil
    .then((response) => {

        if (!response.ok) { //response.ok adalah properti yang mengembalikan nilai boolean berdasarkan apakah HTTP response berhasil (status 200–299).
            throw new Error("Data gagal diambil!") //throw new error digunakan untuk melempar error secara manual
        }

        return response.json() //Mengambil/membaca isi response dalam format JSON.
    })
    .then((data) => { // .then() digunakan untuk menangani hasil Promise yang berhasil.
        console.log(data)
    })
    .catch((error) => { // .catch() digunakan untuk menangani error jika terjadi
        console.log(error.message)
    })

// ========================================
// Error Handling dengan async/await dan try/catch
// ========================================

console.log("=== FETCH DENGAN ASYNC AWAIT ===");
    async function ambilDataUser() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        )
        if (!response.ok) {
            throw new Error("Data gagal diambil!")
        }
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error.message)
    }
    finally{
        console.log("proses selesai"); //finally akan tetap berjalan meskipun terjadi error atau tidak
    }
}

ambilDataUser()

 // ========================================
// Catatan
// ========================================

// try mencoba menjalankan kode yang berpotensi error.
// catch menangkap error jika terjadi.
// finally tetap dijalankan setelah try atau catch selesai.
// response.ok memeriksa apakah HTTP response berhasil.
// throw new Error() digunakan untuk melempar error secara manual.