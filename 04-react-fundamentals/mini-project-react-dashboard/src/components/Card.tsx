
type Artikel = {
  id: number;
  judul: string;
  kategori: string;
  deskripsi: string;
  isi: string;
  tanggal: string;
};

type CardProps = {
  artikel: Artikel;
  nomor: string;
  onRead: () => void;
  onDelete: () => void;
};

function Card({ artikel, nomor, onRead, onDelete }: CardProps) {
  return (
    <article className="article-card">
      <div className="card-topline">
        <span className="card-number">{nomor}</span>
        <span className="category-badge">{artikel.kategori}</span>
      </div>

      <h3>{artikel.judul}</h3>

      <p className="article-description">{artikel.deskripsi}</p>

      <div className="article-footer">
        <time dateTime={artikel.tanggal}>{artikel.tanggal}</time>
        <span>Artikel</span>
      </div>

      <div className="article-actions">
        <button type="button" className="read-button" onClick={onRead}>
          Baca artikel <span aria-hidden="true">↗</span>
        </button>

        <button
          type="button"
          className="delete-button"
          onClick={onDelete}
          aria-label={`Hapus artikel ${artikel.judul}`}
        >
          Hapus
        </button>
      </div>
    </article>
  );
}

export default Card;
