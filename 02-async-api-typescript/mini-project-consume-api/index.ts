//Untuk menjalankan program dan menampilkan hasilnya:
//ketik di terminal:
//tsx index.ts
import {getUsers} from "./api"


async function tampilkanUser(){
    console.log("Loading data!...")
    try {

        const data = await getUsers()
        console.log("Data berhasil diambil!")

    data.forEach((user)=>{
        console.log("Nama: " + user.name)
        console.log("Email: " + user.email)
        console.log("Kota: " + user.address.city)
        
    })
    } catch (error) {
        console.log("Error: Gagal mengambil data")
    }
    console.log("Proses selesai!")
}

tampilkanUser()