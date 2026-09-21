//resolve, reject, fulfilled

/*function pesanMakan(callback){
    console.log("Mulai..")

    setTimeout(()=>{
        console.log("1.Makanan siap!")
        setTimeout(()=>{
            console.log("2.Saya makan!")
            
            setTimeout(()=>{
                console.log("3.Selesai bayar!")

                setTimeout(()=>{
                    console.log("4.Saya pulang!")
                       
                    callback()
                },1000)
            },1000)
        },1000)
    },1000)
}

function callback(){
    console.log("Semua proses selesai!")
}

pesanMakan(callback);
*/


/*const pesanMakanan = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("makanan sedang dibuat..")

        setTimeout(() => {
            console.log("makanan sudah selesai")
            resolve("Pesanan berhasil dibuat!")
        }, 1000)
    }, 1000)
})

pesanMakanan.then((status) => {
    console.log(status)
})
*/

/*const pesanMakanan = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Pesanan sedang dibuat..")

        reject("Makanan habis!")
    }, 1000)
})

pesanMakanan.catch((error) => {
    console.log(error)
})*/


/*const makananTersedia = false;
const pesanMakan = new Promise((resolve,reject)=>{
    if (makananTersedia) {
        resolve("Makana sedang dibuat")
    } else {
        reject("Makananan tidak tersedia")
    }
})

pesanMakan.then((sukses) => {
    console.log(sukses)
}).catch((error)=>{
    console.log(error)
})*/

// promise .then() .then() .then()
/*const pesanMakan = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve("makanan sedang dibuat")
    },1000)
})

pesanMakan
    .then((status) => {
        console.log(status)
        return "makanan selesai"
    })
    .then((status) => {
        console.log(status)
        return "saya pulang"
    })
    .then((status) => {
        console.log(status)
    })*/

/*const pesanMakan = new Promise((resolve) =>{
    setTimeout(() =>{
        resolve("makanan sedang dibuat")
    }, 1000)
})

pesanMakan.then((status) => {
    console.log(status)
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            reject("pembayaran gagal")
        }, 1000)
    })  
}).then((status) => {
    console.log(status)
}).catch((error) => {
    console.log(error)
})
.finally(() => {
    console.log("Proses selesai!")
})
*/


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
