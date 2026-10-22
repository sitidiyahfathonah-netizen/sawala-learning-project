
import type { Article } from "@/types/article";

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export async function getArticles(): Promise<Article[]> {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/articles?populate=*`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error("Gagal mengambil data artikel dari Strapi");
    }

    const result = await response.json();

    return result.data.map((item: any) => {
      const foto = item.foto?.[0]?.url;

      return {
        id: item.id,
        title: item.title,
        description: item.description,
        category: item.category,
        slug: item.slug,
        imageUrl: foto
          ? foto.startsWith("http")
            ? foto
            : `${STRAPI_URL}${foto}`
          : null,
      };
    });
  } catch (error) {
    console.error("Error mengambil artikel:", error);
    return [];
  }
}
