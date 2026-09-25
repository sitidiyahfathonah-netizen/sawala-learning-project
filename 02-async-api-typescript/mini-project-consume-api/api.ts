//Untuk fungsi mengambil data dari API:

export interface User {
    id: number
    name: string
    username: string
    email: string
    address: {
        city: string
    }
}

export async function getUsers(){
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    )
    if (!response.ok) {
    throw new Error("Gagal mengambil data dari API")
}
    const data: User[] = await response.json() //User[] artinya adalah array of User
    return data
}

/* Catatan penting: 
API JSONPlaceholder sebenarnya menyimpan kota di address.city, 
bukan langsung di city. 
Karena itu, interface-mu belum sepenuhnya sesuai dengan bentuk data asli API*/ 
//api.ts adalah tempat interface dan memanggil api
// User[] digunakan untuk menentukan bahwa variabel data berupa array yang berisi kumpulan data user, 
//dengan struktur yang sudah didefinisikan pada interface User           
//function getUsers adalah fungsi yang digunakan untuk mengambil data dari API
//interface User adalah interface yang digunakan untuk menentukan struktur data user