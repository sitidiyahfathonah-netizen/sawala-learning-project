
import Link from "next/link";

type ArticleCardProps = {
    title: string;
    description: string;
    category: string;
    slug?: string;
    imageUrl?: string | null;
};

const accents = [
    "from-blue-500 to-indigo-600",
    "from-violet-500 to-fuchsia-600",
    "from-cyan-500 to-blue-600",
    "from-emerald-500 to-teal-600",
];

export default function ArticleCard({
    title,
    description,
    category,
    slug,
    imageUrl,
}: ArticleCardProps) {
    const accent = accents[title.length % accents.length];

    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="relative h-48 overflow-hidden bg-slate-100">
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt={title}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600">
                        <span className="text-7xl font-black text-white/90">
                            Aa
                        </span>
                    </div>
                )}

                <span className="absolute bottom-4 left-5 rounded-full bg-black/50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
                    ARTICLE
                </span>
            </div>


            <div className="flex flex-1 flex-col p-6">
                <span className="mb-4 w-fit rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">
                    {category}
                </span>

                <h3 className="text-xl font-extrabold leading-7 text-slate-900 group-hover:text-blue-700">
                    {title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-500">
                    {description}
                </p>

                {slug ? (
                    <Link
                        href={`/artikel/${slug}`}
                        className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
                    >
                        Baca Artikel <span aria-hidden="true">→</span>
                    </Link>
                ) : (
                    <p className="mt-6 text-sm text-slate-400">
                        Artikel belum memiliki slug.
                    </p>
                )}
            </div>
        </article>
    );
}
