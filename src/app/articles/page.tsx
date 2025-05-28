import { getArticles } from "@/entities/articles/api/getArticles";
import { getTags } from "@/entities/tags/api/getTags";
import { TAG_ICONS } from "@/entities/tags/constants";
import ArticleCard from "@/shared/components/ArticleCard";
import { ARTICLES_PATH } from "@/shared/routes/paths";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Browse all articles on early childhood education, activities, and resources for kindergarten teachers and parents.",
};

type ArticlesPageProps = {
  searchParams: Promise<{ category?: string }>;
};

export default async function ArticlesPage({ searchParams }: ArticlesPageProps) {
  const { category } = await searchParams;
  const [articles, categories] = await Promise.all([
    getArticles({ page: 1, limit: 10, tag: category }),
    getTags(),
  ]);

  const activeCategory = category ? categories.find(cat => cat.id === category)?.title : null;

  return (
    <div className="container-custom">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {activeCategory ? `${activeCategory} Articles` : "All Articles"}
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {activeCategory
            ? `Browse our collection of articles about ${activeCategory.toLowerCase()}.`
            : "Browse our collection of articles on early childhood education, activities, and resources."}
        </p>
      </div>
      <div className="mb-10">
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href={ARTICLES_PATH}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              !category
                ? "bg-primary-yellow text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All
          </Link>
          {categories.map(cat => {
            const Icon = TAG_ICONS[cat.icon]?.Icon;
            return (
              <Link
                key={cat.id}
                href={`${ARTICLES_PATH}?category=${cat.id}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-1 ${
                  category === cat.id
                    ? "bg-primary-yellow text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {Icon && <Icon className="w-3.5 h-3.5" />}
                {cat.title.toUpperCase()}
              </Link>
            );
          })}
        </div>
      </div>
      {articles.items?.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.items?.map(article => (
            <ArticleCard key={article.id} article={article} tags={categories} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium mb-2">No articles found</h3>
          <p className="text-gray-600">
            No articles found in this category. Please try another category or check back later.
          </p>
        </div>
      )}
    </div>
  );
}
