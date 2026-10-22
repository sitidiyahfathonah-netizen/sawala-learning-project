
"use client";

export default function ArticleError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-5">
      <div className="max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">
          Artikel gagal dimuat
        </h2>

        <p className="mt-3 text-slate-600">
          Maaf, terjadi kesalahan saat memuat artikel.
          Silakan coba lagi.
        </p>

        <button
          onClick={() => reset()}
          className="mt-6 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Coba Lagi
        </button>
      </div>
    </main>
  );
}
