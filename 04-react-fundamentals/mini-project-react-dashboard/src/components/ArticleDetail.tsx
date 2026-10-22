
type Artikel = {
  id: number;
  judul: string;
  kategori: string;
  deskripsi: string;
  isi: string;
  tanggal: string;
};

type ArticleDetailProps = {
  artikel: Artikel;
  onBack: () => void;
};

function ArticleDetail({ artikel, onBack }: ArticleDetailProps) {
  return (
    <main className="reader-page">
      <nav className="reader-header">
        <button
          type="button"
          className="back-button"
          onClick={onBack}
        >
          ← Kembali
        </button>

        <a className="brand" href="#artikel">
          ARTIKELKU<span>.</span>
        </a>

        <span className="reader-label">RUANG BACA</span>
      </nav>

      <article className="reader-content" id="artikel">
        <div className="reader-meta">
          <span className="category-badge">{artikel.kategori}</span>
          <time dateTime={artikel.tanggal}>{artikel.tanggal}</time>
        </div>

        <p className="eyebrow">CATATAN PEMBELAJARAN</p>

        <h1>{artikel.judul}</h1>

        <p className="reader-intro">{artikel.deskripsi}</p>

        <div className="reader-divider">
          <span>✳</span>
        </div>

        <div className="reader-body">
          {artikel.isi.split(/\n\s*\n/).map((paragraf, index) => (
            <p key={`${artikel.id}-${index}`}>{paragraf}</p>
          ))}
        </div>

        <div className="reader-end">
          <span>✳</span>
          <p>Kamu sudah sampai di akhir artikel.</p>

          <button
            type="button"
            className="back-button bottom-back"
            onClick={onBack}
          >
            ← Kembali ke daftar artikel
          </button>
        </div>
      </article>

      <footer className="reader-footer">
        <a className="brand" href="#artikel">
          ARTIKELKU<span>.</span>
        </a>
        <p>Terus belajar. Terus bertumbuh.</p>
      </footer>
    </main>
  );
}

export default ArticleDetail;
