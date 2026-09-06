//import
import {tambah, kurang, kali, bagi} from "./math.js";


console.log("Hasil penjumlahan:", tambah(10, 5));
console.log("Hasil pengurangan:", kurang(10, 5));
console.log("Hasil perkalian:", kali(10, 5));
console.log("Hasil pembagian:", bagi(10, 5));

//import default
import perkalian from "./math.js";
console.log("Hasil perkalian:", perkalian(10, 5));

//latihan
//gabungan import named dan default
import perkalianDefault, { tambah1 } from "./math.js";

console.log("Hasil latihan (named):", tambah1(5, 5));
console.log("Hasil latihan (default):", perkalianDefault(5, 5));