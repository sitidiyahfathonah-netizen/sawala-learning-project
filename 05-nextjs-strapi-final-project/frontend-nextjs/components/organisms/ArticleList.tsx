
import ArticleCard from "@/components/molecules/ArticleCard";
import type { Article } from "@/types/article";

type ArticleListProps = {
  articles: Article[];
};

export default function ArticleList({ articles }: ArticleListProps) {
  if (articles.length === 0) {
    return (
      <p className="rounded-xl border border-gray-200 bg-white p-8 text-center text-gray-500">
        Belum ada artikel yang tersedia.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          title={article.title}
          description={article.description}
          category={article.category}
          slug={article.slug}
          imageUrl={article.imageUrl}
        />
      ))}
    </div>
  );
}
