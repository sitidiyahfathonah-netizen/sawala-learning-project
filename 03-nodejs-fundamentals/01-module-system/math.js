// CommonJS: mengekspor fungsi agar dapat digunakan
// oleh file JavaScript lainnya.

const tambah = (a, b) => a + b;

const kurang = (a, b) => a - b;

module.exports = {
  tambah,
  kurang,
};