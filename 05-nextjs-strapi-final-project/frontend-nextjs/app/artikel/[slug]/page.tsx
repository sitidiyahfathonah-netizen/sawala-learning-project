
import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

type Props = {
  params: Promise<{ slug: string }>;
};

async function ArticleContent({ params }: Props) {
  const { slug } = await params;

  const response = await fetch(
    `${STRAPI_URL}/api/articles?populate=*&filters[slug][$eq]=${encodeURIComponent(slug)}`,
    { cache: "no-store" }
  );

  if (!response.ok) {
    throw new Error("Gagal mengambil artikel dari Strapi");
  }

  const result = await response.json();
  const article = result.data?.[0];

  if (!article) {
    notFound();
  }

  const foto = article.foto?.[0]?.url;

  const imageUrl = foto
    ? foto.startsWith("http")
      ? foto
      : `${STRAPI_URL}${foto}`
    : null;

  return (
    <article className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="p-6 pb-0 sm:p-10 sm:pb-0">
        <Link
          href="/#daftar-artikel"
          className="text-sm font-semibold text-blue-600 hover:text-blue-800"
        >
          ← Kembali ke daftar artikel
        </Link>
      </div>

      {imageUrl && (
        <div className="mx-6 mt-8 overflow-hidden rounded-2xl bg-slate-100 sm:mx-10">
          <img
            src={imageUrl}
            alt={article.title}
            className="max-h-[420px] w-full object-cover"
          />
        </div>
      )}

      <div className="p-6 sm:p-10">
        <p className="inline-block rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">
          {article.category}
        </p>

        <h1 className="mt-5 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl">
          {article.title}
        </h1>

        <div className="my-8 h-1 w-20 rounded-full bg-blue-600" />

        <div className="text-base leading-8 text-slate-600">
          {article.konten ? (
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h2 className="mb-4 mt-8 text-2xl font-bold text-slate-900">
                    {children}
                  </h2>
                ),
                h2: ({ children }) => (
                  <h2 className="mb-3 mt-8 text-xl font-bold text-slate-900">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="mb-3 mt-6 text-lg font-bold text-slate-900">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="mb-5">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="mb-5 list-disc space-y-2 pl-6">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="mb-5 list-decimal space-y-2 pl-6">
                    {children}
                  </ol>
                ),
                strong: ({ children }) => (
                  <strong className="font-bold text-slate-900">
                    {children}
                  </strong>
                ),
              }}
            >
              {article.konten}
            </ReactMarkdown>
          ) : (
            <p>{article.description}</p>
          )}
        </div>
      </div>
    </article>
  );
}

export default function ArticleDetail({ params }: Props) {
  return (
    <main className="min-h-screen bg-slate-50 px-5 py-12">
      <Suspense
        fallback={
          <p className="py-10 text-center text-slate-500">
            Memuat artikel...
          </p>
        }
      >
        <ArticleContent params={params} />
      </Suspense>
    </main>
  );
}
