//Export Function
const tambah = (a, b) => {
    return a + b;
}
const kurang = (a, b) => {
    return a - b;
}

const kali = (a, b) => {
    return a * b;
}

const bagi = (a, b) => {
    return a / b;
}

//named export(bisa kirim BANYAK data)
export { tambah,kurang,kali,bagi };

//export default(biasa dikirim hanya 1)
const perkalian = (a,b) => {
    return a * b;
}

//latihan
//gabungan named export & default
const tambah1 = (a, b) => {
    return a + b;
}
const kali1 = (a, b) => {
    return a * b;
}

export { tambah1};
export default kali1
