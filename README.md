# Sawala Learning Project

Repository pembelajaran pengembangan web yang berisi latihan dan mini project dari dasar JavaScript hingga pengembangan aplikasi web menggunakan React, Next.js, dan Strapi CMS.

Repository ini disusun secara bertahap untuk mendokumentasikan proses belajar, memahami konsep pemrograman, dan menerapkannya melalui project nyata.

## 🎯 Tujuan Pembelajaran

- Memahami dasar JavaScript dan logika pemrograman.
- Memahami asynchronous JavaScript, Promise, dan Async/Await.
- Menggunakan Fetch API untuk mengambil data dari API.
- Memahami dasar TypeScript dan penggunaan tipe data.
- Mengenal Node.js, sistem modul, dan npm.
- Memahami dasar React dan pengembangan antarmuka pengguna.
- Membangun aplikasi web menggunakan Next.js.
- Mengelola konten menggunakan Strapi CMS.
- Mengintegrasikan frontend dengan backend melalui API.
- Menerapkan materi pembelajaran dalam mini project dan project akhir.

## 📚 Daftar Materi

### 1. JavaScript Fundamentals

Folder: `01-javascript-fundamentals/`

Materi yang dipelajari:

- Variabel dan tipe data.
- Kondisi dan function.
- Object dan array.
- Looping dan array methods.
- Destructuring dan spread operator.
- ES Modules.
- Penerapan dasar JavaScript melalui latihan dan mini project.

Latihan dan mini project:

- `01-javascript-fundamentals/01-Kalkulator/`
- `01-javascript-fundamentals/01-variabel-tipe-data/`
- `01-javascript-fundamentals/02-data-siswa/`
- `01-javascript-fundamentals/02-kondisi-function/`
- `01-javascript-fundamentals/03-object-array/`
- `01-javascript-fundamentals/04-looping-array-methods/`
- `01-javascript-fundamentals/05-destructuring-spread/`
- `01-javascript-fundamentals/06-es-modules/`
- `01-javascript-fundamentals/mini-project-produk-list/`

### 2. Async JavaScript, API, dan TypeScript

Folder: `02-async-api-typescript/`

Materi yang dipelajari:

- Promise.
- Async/Await.
- Fetch API.
- Pengambilan data dari API.
- Error handling.
- Dasar TypeScript.
- Type dan interface.
- Integrasi API dengan aplikasi JavaScript dan TypeScript.

Latihan dan mini project:

- `02-async-api-typescript/01-promise-async-await/`
- `02-async-api-typescript/02-fetch-api/`
- `02-async-api-typescript/03-error-handling/`
- `02-async-api-typescript/04-typescript-basic/`
- `02-async-api-typescript/mini-project-consume-api/`

### 3. Node.js Fundamentals

Folder: `03-nodejs-fundamentals/`

Materi yang dipelajari:

- Pengenalan Node.js.
- Module system.
- Penggunaan npm dan `package.json`.
- Dasar pengembangan aplikasi backend.
- Pembuatan REST API.

Mini project:

- `03-nodejs-fundamentals/mini-project-rest-api/`

### 4. React Fundamentals

Folder: `04-react-fundamentals/`

Materi yang dipelajari:

- Pengenalan React.
- Pengembangan antarmuka pengguna berbasis komponen.
- Pengorganisasian komponen.
- Penerapan konsep React dalam aplikasi dashboard.

Mini project:

- `04-react-fundamentals/mini-project-react-dashboard/`

### 5. Next.js dan Strapi CMS

Folder: `05-nextjs-strapi-final-project/`

Bagian ini merupakan project akhir yang menggabungkan frontend menggunakan Next.js dan backend menggunakan Strapi CMS.

**ArticleSpace** adalah aplikasi artikel yang menampilkan konten berdasarkan data yang dikelola melalui Strapi CMS.

Fitur utama:

- Menampilkan daftar artikel.
- Menampilkan judul, deskripsi, kategori, dan gambar artikel.
- Menampilkan detail dan isi artikel.
- Mengambil data artikel melalui API Strapi.
- Menggunakan halaman dinamis berdasarkan slug artikel.
- Menampilkan status loading dan error ketika mengambil data.
- Menampilkan konten artikel dengan format Markdown.

Struktur project:

- `05-nextjs-strapi-final-project/frontend-nextjs/` — aplikasi frontend menggunakan Next.js dan TypeScript.
- `05-nextjs-strapi-final-project/backend-strapi/` — backend dan pengelolaan konten menggunakan Strapi CMS.

## 🛠 Teknologi yang Digunakan

- **JavaScript** — dasar pemrograman web.
- **TypeScript** — penulisan kode dengan sistem tipe.
- **Node.js** — lingkungan runtime JavaScript.
- **npm** — pengelolaan package dan dependency.
- **React** — pengembangan antarmuka berbasis komponen.
- **Next.js** — framework React untuk aplikasi web.
- **Tailwind CSS** — styling antarmuka.
- **Strapi CMS** — pengelolaan konten dan penyedia API.
- **REST API** — komunikasi data antara frontend dan backend.
- **Git dan GitHub** — version control dan pengelolaan repository.

## 📂 Struktur Repository

```text
sawala-learning-project/
├── 01-javascript-fundamentals/
│   ├── 01-Kalkulator/
│   ├── 01-variabel-tipe-data/
│   ├── 02-data-siswa/
│   ├── 02-kondisi-function/
│   ├── 03-object-array/
│   ├── 04-looping-array-methods/
│   ├── 05-destructuring-spread/
│   ├── 06-es-modules/
│   └── mini-project-produk-list/
├── 02-async-api-typescript/
│   ├── 01-promise-async-await/
│   ├── 02-fetch-api/
│   ├── 03-error-handling/
│   ├── 04-typescript-basic/
│   └── mini-project-consume-api/
├── 03-nodejs-fundamentals/
│   ├── 01-module-system/
│   ├── 02-npm-package-json/
│   └── mini-project-rest-api/
├── 04-react-fundamentals/
│   └── mini-project-react-dashboard/
├── 05-nextjs-strapi-final-project/
│   ├── frontend-nextjs/
│   └── backend-strapi/
├── .gitignore
└── README.md
```

## 🚀 Menjalankan Project Akhir

Project akhir berada di folder `05-nextjs-strapi-final-project/` dan terdiri dari frontend Next.js serta backend Strapi.

### Persyaratan

Pastikan Node.js dan npm sudah terpasang di komputer.

### 1. Menjalankan Backend Strapi

Buka terminal di folder repository, kemudian jalankan:

```powershell
cd 05-nextjs-strapi-final-project/backend-strapi
npm install
npm run develop
```

Setelah backend berjalan, buka:

`http://localhost:1337/admin`

Gunakan akun administrator Strapi untuk mengelola artikel. Pastikan artikel sudah dipublikasikan agar dapat diakses melalui API publik.

### 2. Menjalankan Frontend Next.js

Buka terminal baru, kemudian jalankan:

```powershell
cd 05-nextjs-strapi-final-project/frontend-nextjs
npm install
```

Buat file `.env.local` di dalam folder `frontend-nextjs/` dengan isi:

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

Kemudian jalankan:

```powershell
npm run dev
```

Buka aplikasi melalui:

`http://localhost:3000`

Pastikan backend Strapi tetap berjalan saat frontend digunakan.

**Catatan:** Perintah di atas ditujukan untuk menjalankan project secara lokal. Jangan mengunggah file `.env.local` yang berisi konfigurasi rahasia ke repository.

## 🌱 Alur Pembelajaran

Urutan pembelajaran dalam repository ini adalah:

1. JavaScript Fundamentals.
2. Async JavaScript, API, dan TypeScript.
3. Node.js Fundamentals.
4. React Fundamentals.
5. Next.js dan Strapi CMS melalui project akhir.

Setiap tahap menjadi dasar untuk memahami tahap berikutnya, mulai dari logika pemrograman hingga integrasi frontend dan backend.

## 📝 Catatan

- Repository ini digunakan untuk dokumentasi proses belajar dan penyimpanan latihan pemrograman.
- Setiap folder berisi materi atau latihan sesuai tahap pembelajaran.
- Project akhir menggunakan frontend Next.js dan backend Strapi CMS.
- Konfigurasi lokal dan file yang berisi informasi sensitif tidak boleh diunggah ke repository.
- Struktur repository dapat berkembang seiring bertambahnya materi dan project.

---

**Sawala Learning Project**
