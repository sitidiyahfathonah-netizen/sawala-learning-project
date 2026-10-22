# Artikelku

Artikelku adalah mini-project berbasis React dan TypeScript yang dibuat untuk mempraktikkan fundamental React. Aplikasi ini menyediakan dashboard sederhana untuk mengelola artikel pembelajaran, mencari artikel, memfilter kategori, dan membaca isi artikel pada tampilan terpisah.

## Tujuan Pembelajaran

Melalui project ini, beberapa konsep dasar React yang dipelajari meliputi:

- JSX dan pembuatan komponen React.
- Props untuk mengirim data dan fungsi antarkomponen.
- State menggunakan `useState`.
- Event handling pada formulir dan tombol.
- Conditional rendering untuk menampilkan halaman baca dan kondisi daftar artikel.
- List rendering untuk menampilkan koleksi artikel.
- Penggunaan `useEffect` untuk menyimpan perubahan data.
- TypeScript untuk mendefinisikan tipe data dan props komponen.

## Teknologi yang Digunakan

- React
- TypeScript
- Vite
- CSS
- Browser Local Storage

## Fitur

### 1. Dashboard Artikel
Menampilkan ringkasan jumlah artikel, jumlah kategori, dan hasil pencarian.

### 2. Tambah Artikel
Pengguna dapat menambahkan artikel dengan judul, kategori, ringkasan, dan isi artikel.

### 3. Pencarian Artikel
Pengguna dapat mencari artikel berdasarkan judul.

### 4. Filter Kategori
Pengguna dapat menyaring artikel berdasarkan kategori yang tersedia.

### 5. Halaman Baca Artikel
Pengguna dapat membuka artikel pada tampilan baca tersendiri dan kembali ke dashboard.

### 6. Hapus Artikel
Pengguna dapat menghapus artikel yang tidak lagi diperlukan.

### 7. Penyimpanan Data
Data artikel disimpan di browser menggunakan Local Storage agar perubahan tetap tersedia setelah halaman dimuat ulang pada browser yang sama.

## Struktur Project

```text
mini-project-react-dashboard/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ArticleDetail.tsx
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
└── vite.config.ts
```

## Cara Menjalankan Project

Pastikan Node.js dan npm sudah terpasang di komputer.

Buka terminal, kemudian masuk ke folder project:

```bash
cd 04-react-fundamentals/mini-project-react-dashboard
```

Install dependencies:

```bash
npm install
```

Jalankan development server:

```bash
npm run dev
```

Buka alamat lokal yang ditampilkan oleh Vite di terminal.

## Pemeriksaan Build

Untuk memeriksa TypeScript dan menghasilkan build produksi, jalankan:

```bash
npm run build
```

Jika proses berhasil, Vite akan menghasilkan file produksi di folder `dist/`.

## Batasan Project

- Artikel disimpan di Local Storage browser, bukan di database online.
- Data tidak otomatis tersinkronisasi antarperangkat atau browser.
- Halaman baca merupakan tampilan terpisah di dalam aplikasi React dan belum menggunakan URL khusus untuk setiap artikel.
- Project ini berfokus pada pembelajaran fundamental React dan TypeScript, bukan aplikasi pengelolaan artikel produksi.

## Status Pembelajaran

Mini-project ini merupakan bagian dari pembelajaran React Fundamentals pada Sawala Learning Project. Project digunakan untuk melatih pembuatan komponen, pengelolaan state, props, event handling, rendering data, dan penyimpanan data sederhana di browser.
