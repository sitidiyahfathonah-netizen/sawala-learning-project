// COMMONJS MODULES
const { tambah, kurang } = require("./math");

console.log("Hasil tambah:", tambah(1, 2));
console.log("Hasil kurang:", kurang(10, 2));

// NODE.JS RUNTIME
// Node.js adalah runtime environment untuk menjalankan
// JavaScript di luar browser.

// EVENT LOOP
// Event loop membantu Node.js menangani callback operasi
// asynchronous tanpa harus menunggu semua operasi selesai.

// MODULE SYSTEM
// CommonJS menggunakan require() dan module.exports.
// ES Modules menggunakan import dan export.

// ASYNCHRONOUS JAVASCRIPT
// JavaScript dapat menjalankan operasi asynchronous,
// misalnya timer atau operasi I/O.

console.log("1. Kode synchronous");

setTimeout(() => {
  console.log("3. Callback asynchronous");
}, 0);

console.log("2. Kode synchronous berikutnya");

// Urutan output: 1, 2, kemudian 3.