
import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import Card from './components/Card';
import Button from './components/Button';
import ArticleDetail from './components/ArticleDetail';
import './App.css';

type Artikel = {
  id: number;
  judul: string;
  kategori: string;
  deskripsi: string;
  isi: string;
  tanggal: string;
};

const STORAGE_KEY = 'sawala-dashboard-artikel';

const artikelAwal: Artikel[] = [
  {
    id: 1,
    judul: 'Memulai Perjalanan Belajar JavaScript',
    kategori: 'Programming',
    deskripsi: 'Kenali dasar JavaScript dan perannya dalam pengembangan web.',
    isi: `JavaScript adalah bahasa pemrograman yang membuat halaman web menjadi interaktif. Dengan JavaScript, kita bisa merespons klik pengguna, memvalidasi formulir, mengolah data, dan membuat berbagai fitur menarik.

Untuk pemula, mulailah dengan memahami variabel, tipe data, operator, kondisi, perulangan, dan fungsi. Setelah itu, coba buat proyek sederhana agar materi yang dipelajari lebih mudah dipahami.

Konsistensi lebih penting daripada belajar terlalu banyak dalam satu waktu. Luangkan waktu untuk berlatih dan jangan takut mencoba hal baru.`,
    tanggal: '2026-10-20',
  },
  {
    id: 2,
    judul: 'Mengenal React untuk Pemula',
    kategori: 'Frontend',
    deskripsi: 'Pelajari cara membangun antarmuka web menggunakan komponen.',
    isi: `React adalah library JavaScript untuk membangun antarmuka pengguna. Salah satu konsep utamanya adalah component, yaitu bagian antarmuka yang dapat dibuat dan digunakan kembali.

React juga menyediakan props untuk mengirim data antarkomponen dan state untuk menyimpan data yang dapat berubah. Ketika state berubah, React dapat memperbarui tampilan yang berkaitan dengan data tersebut.

Mulailah dengan membuat komponen sederhana, kemudian pelajari cara menggabungkan beberapa komponen menjadi satu aplikasi.`,
    tanggal: '2026-10-20',
  },
  {
    id: 3,
    judul: 'Mengapa TypeScript Penting?',
    kategori: 'Programming',
    deskripsi: 'Kenali manfaat tipe data untuk membantu menulis kode yang lebih aman.',
    isi: `TypeScript adalah bahasa pemrograman yang memperluas JavaScript dengan sistem tipe. Sistem tipe membantu kita mengetahui bentuk data yang digunakan dalam program.

Contohnya, kita dapat menentukan bahwa sebuah judul harus berupa string dan sebuah jumlah harus berupa number. Dengan begitu, beberapa kesalahan dapat diketahui saat proses pengembangan, sebelum program dijalankan.

TypeScript sangat berguna saat aplikasi mulai berkembang dan memiliki banyak komponen serta data.`,
    tanggal: '2026-10-21',
  },
];

function ambilArtikel(): Artikel[] {
  try {
    const dataTersimpan = localStorage.getItem(STORAGE_KEY);

    if (dataTersimpan === null) {
      return artikelAwal;
    }

    const data: unknown = JSON.parse(dataTersimpan);

    if (!Array.isArray(data)) {
      return artikelAwal;
    }

    const dataValid = data.filter(
      (item): item is Record<string, unknown> =>
        typeof item === 'object' && item !== null,
    );

    return dataValid
      .filter(
        (item) =>
          typeof item.id === 'number' &&
          typeof item.judul === 'string' &&
          typeof item.kategori === 'string' &&
          typeof item.deskripsi === 'string' &&
          typeof item.tanggal === 'string',
      )
      .map((item) => ({
        id: item.id as number,
        judul: item.judul as string,
        kategori: item.kategori as string,
        deskripsi: item.deskripsi as string,
        isi:
          typeof item.isi === 'string'
            ? item.isi
            : (item.deskripsi as string),
        tanggal: item.tanggal as string,
      }));
  } catch {
    return artikelAwal;
  }
}

function App() {
  const [artikel, setArtikel] = useState<Artikel[]>(ambilArtikel);
  const [kataKunci, setKataKunci] = useState('');
  const [kategoriFilter, setKategoriFilter] = useState('Semua');
  const [judul, setJudul] = useState('');
  const [kategori, setKategori] = useState('Programming');
  const [deskripsi, setDeskripsi] = useState('');
  const [isi, setIsi] = useState('');
  const [pesan, setPesan] = useState('');
  const [artikelTerpilih, setArtikelTerpilih] =
    useState<Artikel | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(artikel));
    } catch {
      setPesan('Data gagal disimpan. Periksa penyimpanan browser.');
    }
  }, [artikel]);

  const daftarKategori = [
    'Semua',
    ...new Set(artikel.map((item) => item.kategori)),
  ];

  const artikelTampil = artikel.filter((item) => {
    const cocokJudul = item.judul
      .toLowerCase()
      .includes(kataKunci.toLowerCase());

    const cocokKategori =
      kategoriFilter === 'Semua' ||
      item.kategori === kategoriFilter;

    return cocokJudul && cocokKategori;
  });

  function tambahArtikel(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const artikelBaru: Artikel = {
      id: Date.now(),
      judul: judul.trim(),
      kategori,
      deskripsi: deskripsi.trim(),
      isi: isi.trim(),
      tanggal: new Date().toLocaleDateString('sv-SE'),
    };

    setArtikel((artikelSebelumnya) => [
      artikelBaru,
      ...artikelSebelumnya,
    ]);

    setJudul('');
    setKategori('Programming');
    setDeskripsi('');
    setIsi('');
    setPesan('Artikel berhasil ditambahkan dan disimpan di browser.');
    setKataKunci('');
    setKategoriFilter('Semua');
  }

  function hapusArtikel(id: number) {
    setArtikel((artikelSebelumnya) =>
      artikelSebelumnya.filter((item) => item.id !== id),
    );

    if (artikelTerpilih?.id === id) {
      setArtikelTerpilih(null);
    }

    setPesan('Artikel berhasil dihapus.');
  }

  if (artikelTerpilih) {
    return (
      <ArticleDetail
        artikel={artikelTerpilih}
        onBack={() => setArtikelTerpilih(null)}
      />
    );
  }

  return (
    <main className="dashboard">
      <nav className="topbar">
        <a
          className="brand"
          href="#beranda"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ARTIKELKU<span>.</span>
        </a>

        <div className="topbar-label">LEARNING SPACE</div>
      </nav>

      <header className="hero" id="beranda">
        <div className="hero-copy">
          <p className="eyebrow">SAWALA LEARNING PROJECT</p>
          <h1>
            Ruang untuk
            <br />
            <span>terus bertumbuh.</span>
          </h1>
          <p className="hero-description">
            Kumpulan catatan, ide, dan wawasan untuk menemani
            perjalanan belajarmu.
          </p>

          <a className="hero-link" href="#daftar-artikel">
            Jelajahi artikel <span>↘</span>
          </a>
        </div>

        <div className="hero-decoration" aria-hidden="true">
          <div className="decoration-orbit orbit-one" />
          <div className="decoration-orbit orbit-two" />
          <div className="decoration-center">
            <span>✳</span>
          </div>
          <p>LEARN · CREATE · GROW</p>
        </div>
      </header>

      <section className="stats-grid" aria-label="Ringkasan artikel">
        <article className="stat-card">
          <span className="stat-icon">▤</span>
          <div>
            <p>Total Artikel</p>
            <h2>{artikel.length}</h2>
          </div>
        </article>

        <article className="stat-card">
          <span className="stat-icon">◈</span>
          <div>
            <p>Total Kategori</p>
            <h2>
              {new Set(artikel.map((item) => item.kategori)).size}
            </h2>
          </div>
        </article>

        <article className="stat-card">
          <span className="stat-icon">⌕</span>
          <div>
            <p>Hasil Pencarian</p>
            <h2>{artikelTampil.length}</h2>
          </div>
        </article>
      </section>

      {pesan && (
        <div className="status-message" role="status">
          <span>✓</span> {pesan}
          <button
            type="button"
            aria-label="Tutup pesan"
            onClick={() => setPesan('')}
          >
            ×
          </button>
        </div>
      )}

      <section className="content-panel" id="tambah-artikel">
        <div className="section-heading">
          <div>
            <p className="eyebrow">BAGIKAN IDEMU</p>
            <h2>Tulis artikel baru</h2>
            <p>Setiap hal yang dipelajari layak untuk dicatat.</p>
          </div>
          <span className="heading-number">01 / CREATE</span>
        </div>

        <form className="article-form" onSubmit={tambahArtikel}>
          <div className="form-field">
            <label htmlFor="judul">Judul artikel</label>
            <input
              id="judul"
              value={judul}
              onChange={(event) => setJudul(event.target.value)}
              placeholder="Contoh: Perjalanan belajar React"
              required
              maxLength={100}
            />
          </div>

          <div className="form-field">
            <label htmlFor="kategori">Kategori</label>
            <select
              id="kategori"
              value={kategori}
              onChange={(event) => setKategori(event.target.value)}
            >
              <option value="Programming">Programming</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Design">Design</option>
              <option value="Umum">Umum</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="deskripsi">Ringkasan artikel</label>
            <textarea
              id="deskripsi"
              value={deskripsi}
              onChange={(event) => setDeskripsi(event.target.value)}
              placeholder="Tuliskan ringkasan singkat..."
              rows={2}
              required
              maxLength={300}
            />
          </div>

          <div className="form-field">
            <label htmlFor="isi">Isi artikel</label>
            <textarea
              id="isi"
              value={isi}
              onChange={(event) => setIsi(event.target.value)}
              placeholder="Tuliskan isi artikel secara lengkap..."
              rows={5}
              required
              maxLength={10000}
            />
          </div>

          <div className="form-submit">
            <p>Artikelmu akan disimpan di browser ini.</p>
            <Button teks="+ Simpan Artikel" type="submit" />
          </div>
        </form>
      </section>

      <section className="article-section" id="daftar-artikel">
        <div className="section-heading">
          <div>
            <p className="eyebrow">RUANG BACA</p>
            <h2>Jelajahi artikel</h2>
            <p>Temukan sesuatu yang baru untuk dipelajari hari ini.</p>
          </div>
          <span className="heading-number">02 / DISCOVER</span>
        </div>

        <div className="filters">
          <div className="search-field">
            <span aria-hidden="true">⌕</span>
            <input
              aria-label="Cari artikel"
              value={kataKunci}
              onChange={(event) => setKataKunci(event.target.value)}
              placeholder="Cari judul artikel..."
            />
          </div>

          <select
            aria-label="Filter kategori"
            value={kategoriFilter}
            onChange={(event) => setKategoriFilter(event.target.value)}
          >
            {daftarKategori.map((namaKategori) => (
              <option key={namaKategori} value={namaKategori}>
                {namaKategori === 'Semua'
                  ? 'Semua kategori'
                  : namaKategori}
              </option>
            ))}
          </select>
        </div>

        {artikelTampil.length > 0 ? (
          <div className="article-grid">
            {artikelTampil.map((item, index) => (
              <Card
                key={item.id}
                artikel={item}
                nomor={String(index + 1).padStart(2, '0')}
                onRead={() => setArtikelTerpilih(item)}
                onDelete={() => hapusArtikel(item.id)}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <span>⌕</span>
            <h3>Belum ada artikel yang cocok</h3>
            <p>Coba kata kunci atau kategori lainnya.</p>
          </div>
        )}
      </section>

      <footer className="dashboard-footer">
        <a className="brand" href="#beranda">
          ARTIKELKU<span>.</span>
        </a>
        <p>Tempat kecil untuk ide-ide besar.</p>
        <small>React + TypeScript · Sawala Learning Project</small>
      </footer>
    </main>
  );
}

export default App;
