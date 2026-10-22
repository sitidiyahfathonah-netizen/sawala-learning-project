
import { Suspense } from "react";
import ArticleList from "@/components/organisms/ArticleList";
import { getArticles } from "@/lib/strapi";

async function ArticleSection() {
  const articles = await getArticles();

  return <ArticleList articles={articles} />;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-black text-white">
              A
            </span>
            <span className="text-xl font-extrabold tracking-tight">
              Article<span className="text-blue-600">Space</span>
            </span>
          </a>

          <a
            href="#daftar-artikel"
            className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600"
          >
            Jelajahi Artikel ↗
          </a>
        </nav>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-blue-700 text-white">
        <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-indigo-400/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 sm:py-28 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-blue-100">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              Ruang untuk ide dan wawasan
            </span>

            <h1 className="mt-7 max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Ide Hebat Dimulai dari
              <span className="block text-cyan-300">
                Bacaan yang Tepat.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-blue-100 sm:text-lg">
              Temukan wawasan baru seputar teknologi, pemrograman, dan
              pengembangan web. Belajar hal baru, satu artikel setiap hari.
            </p>

            <a
              href="#daftar-artikel"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-6 py-4 font-bold text-blue-950 shadow-lg transition hover:-translate-y-1 hover:bg-cyan-100"
            >
              Mulai Membaca <span aria-hidden="true">→</span>
            </a>

            <p className="mt-5 text-sm text-blue-200">
              Bacaan pilihan untuk menemani perjalanan belajarmu.
            </p>
          </div>

          <div className="hidden lg:block">
            <div className="rotate-3 rounded-3xl border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-md">
              <div className="rounded-2xl bg-white p-7 text-slate-900">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">
                    EDITOR'S PICK
                  </span>
                  <span className="text-2xl">✳</span>
                </div>

                <div className="my-8 h-48 overflow-hidden rounded-2xl bg-slate-100">
                  <img
                    src="/img/home.jpg"
                    alt="Ilustrasi pilihan artikel ArticleSpace"
                    className="h-full w-full object-cover"
                  />
                </div>

                <p className="text-sm font-semibold text-blue-600">
                  LEARN · EXPLORE · GROW
                </p>
                <h2 className="mt-2 text-2xl font-extrabold">
                  Pengetahuan membuka peluang baru.
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Mulai dari rasa ingin tahu, lanjutkan dengan membaca.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="daftar-artikel"
        className="mx-auto max-w-7xl scroll-mt-8 px-6 py-16 sm:py-20"
      >
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Temukan bacaanmu
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Artikel Terbaru<span className="text-blue-600">.</span>
            </h2>
            <p className="mt-3 max-w-xl leading-7 text-slate-500">
              Kumpulan artikel pilihan untuk memperluas wawasan dan
              meningkatkan kemampuanmu.
            </p>
          </div>

          <span className="w-fit rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600">
            Baca. Pelajari. Kembangkan.
          </span>
        </div>

        <Suspense
          fallback={
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="h-64 animate-pulse rounded-2xl bg-slate-200"
                />
              ))}
            </div>
          }
        >
          <ArticleSection />
        </Suspense>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-extrabold">
            Article<span className="text-blue-600">Space</span>
          </p>
          <p className="text-sm text-slate-500">
            Tempat belajar, berbagi, dan bertumbuh.
          </p>
        </div>
      </footer>
    </main>
  );
}
