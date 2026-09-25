//fetch api adalah tools untuk mengambil data dari API 
//API adalah perantaraan / jembatan untuk berkomunikasi dengan database
/*API tidak selalu berkomunikasi langsung dengan database. API merupakan perantara komunikasi antarsistem,
  dan server bisa menggunakan API untuk mengakses database.*/

//fetch() adalah tools yang ada di JavaScript untuk meminta atau mengambil data dari API

//JSON = JavaScript Object Notation
//JSON adalah format yang digunakan untuk berkomunikasi dengan API

//HTTP = cara client dan server berkomunikasi.
//Status Code = kode angka untuk memberitahu hasil request.
//200 = Berhasil
//201 = Berhasil membuat data
//404 = Tidak ditemukan
//500 = Error dari server

/*fetch() tidak otomatis melempar error hanya
karena server mengembalikan status 404 atau 500. 
Karena itu, kita perlu memeriksa response.ok.*/

// GET menggunakan async/await

async function ambilDataUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users") //fetch("URL") sedang melakukan pengambilan data dari API melalui URL tersebut menggunakan method GET.
        if (!response.ok) { //response.ok adalah properti yang mengembalikan nilai boolean berdasarkan apakah HTTP response berhasil (status 200–299).
            throw new Error("Data gagal diambil!") //  throw new error digunakan untuk melempar error secara manual.
        }
        const data = await response.json() //Mengambil/membaca isi response dalam format JSON.
        console.log("=== DATA GET ===")
        console.log(data)

    } catch (error) {
        console.log(error.message)
        
    } finally {
        console.log("Proses selesai!")
    }
}

ambilDataUser()


/*async function ambilDataUser(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    console.log(response.status) //Kode angka untuk memberitahu hasil request.
    const data = await response.json() //Mengambil/membaca isi response dalam format JSON.
    return data
}

async function tampilkanDataUser(){
    const data = await ambilDataUser()
    data.forEach(user => {
        console.log("Nama : " + user.name)
    })
}
tampilkanDataUser()*/

//HTTP Methods
//GET = Mengambil/mencari data dari API
//POST = mengirim/menambahkan data baru ke API
//PUT = Memperbarui/mengubah data di server
//DELETE = Menghapus data dari server



fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "Diyah",
        email: "diyah@email.com"
    })
})
.then((response)=>{    
    return response.json()
})
.then((data)=>{
    console.log("=== DATA POST ===")
    console.log(data)

})

fetch("https://jsonplaceholder.typicode.com/users/1", {
    method: "PUT",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify({
        name:"Diyah",
        email:"diyah@email.com"
    })
    
})
.then((response)=>{ // .then() digunakan untuk menangani hasil Promise yang berhasil.
    return response.json()
})
.then((data)=>{
    console.log("=== DATA PUT ===")
    console.log(data)
})

fetch("https://jsonplaceholder.typicode.com/users/1",{
    method: "DELETE"
})
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log("=== DATA DELETE ===")
    console.log(data)
})

async function tampilkanData(){
  const status = await fetch("https://jsonplaceholder.typicode.com/users")
  const status2 = await fetch("https://jsonplaceholder.typicode.com/users/1",{
    method: "DELETE"
  })
  const status3 = await fetch("https://jsonplaceholder.typicode.com/users/1",{
    method: "PUT",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify({
        name:"Diyah",
        email:"diyah@email.com"
    })
  })

  const status4 = await fetch("https://jsonplaceholder.typicode.com/users",{
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "Diyah",
        email: "diyah@email.com"
    })
  })

  console.log("=== DATA GET ===")
  console.log(status.json())
  console.log("=== DATA DELETE ===")
  console.log(status2.json())
  console.log("=== DATA PUT ===")
  console.log(status3.json())
  console.log("=== DATA POST ===")
  console.log(status4.json())

}