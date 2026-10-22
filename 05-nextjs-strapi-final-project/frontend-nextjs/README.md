# ArticleSpace

ArticleSpace adalah aplikasi web artikel edukasi yang membahas teknologi dan pengembangan web. Aplikasi ini memungkinkan pengguna membaca ringkasan artikel pada halaman utama dan membuka halaman detail untuk membaca materi secara lengkap.

Konten artikel dikelola melalui Strapi CMS dan ditampilkan menggunakan Next.js.

## Fitur Utama

- Menampilkan daftar artikel dari Strapi CMS.
- Menampilkan judul, kategori, deskripsi, dan gambar artikel.
- Menampilkan halaman detail artikel berdasarkan slug.
- Mendukung konten artikel berformat Markdown.
- Menampilkan status loading saat halaman dimuat.
- Menangani kondisi daftar artikel kosong dan kesalahan pemuatan halaman.

## Teknologi yang Digunakan

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS
- React Markdown

### Backend dan CMS
- Strapi CMS
- REST API
- SQLite

### Tools
- Git dan GitHub
- npm

## Struktur Project

```text
05-nextjs-strapi-final-project/
├── frontend-nextjs/
│   ├── app/
│   │   ├── artikel/
│   │   │   └── [slug]/
│   │   │       ├── page.tsx
│   │   │       ├── loading.tsx
│   │   │       └── error.tsx
│   ├── components/
│   ├── lib/
│   │   └── strapi.ts
│   ├── types/
│   └── package.json
│
└── backend-strapi/
    └── package.json
```

## Persyaratan

Pastikan perangkat sudah memiliki:
- Node.js
- npm
- Git

## Cara Menjalankan Project

### 1. Menjalankan Backend Strapi

Buka terminal di folder backend:

```bash
cd backend-strapi
npm install
npm run develop
```

Buka dashboard Strapi melalui:

`http://localhost:1337/admin`

Masuk menggunakan akun administrator Strapi yang sudah dibuat.

### 2. Menyiapkan Data Artikel

Buat atau gunakan koleksi Article di Strapi dengan field yang diperlukan, seperti:
- `title`
- `description`
- `category`
- `slug`
- `foto`
- `konten`

Pastikan artikel sudah dipublikasikan dan API memiliki izin membaca data artikel.

### 3. Menjalankan Frontend Next.js

Buka terminal baru di folder frontend:

```bash
cd frontend-nextjs
npm install
```

Buat file `.env.local` di dalam folder `frontend-nextjs`:

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

Jalankan aplikasi:

```bash
npm run dev
```

Buka aplikasi melalui:

`http://localhost:3000`

## Integrasi REST API

Frontend mengambil data artikel dari Strapi menggunakan REST API.

Endpoint daftar artikel:

`http://localhost:1337/api/articles?populate=*`

Halaman detail menggunakan slug untuk mengambil artikel yang sesuai.

URL dasar Strapi diatur melalui variabel lingkungan `NEXT_PUBLIC_STRAPI_URL`.

## Pengembangan Selanjutnya

- Menambahkan pencarian dan filter artikel.
- Meningkatkan tampilan responsif.
- Mengembangkan pengujian aplikasi.
- Menyiapkan deployment frontend dan backend.

## Lisensi

Project ini dibuat untuk keperluan pembelajaran dan pengembangan aplikasi web.
