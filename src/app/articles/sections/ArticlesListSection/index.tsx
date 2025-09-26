import { getArticles } from "@/entities/articles/api/getArticles";
import { getTags } from "@/entities/tags/api/getTags";
import ArticleCard from "@/shared/components/ArticleCard";

type ArticlesListSectionProps = {
  category?: string;
};

export default async function ArticlesListSection({ category }: ArticlesListSectionProps) {
  const [articles, categories] = await Promise.all([
    getArticles({ page: 1, limit: 10, tag: category }),
    getTags(),
  ]);

  if (articles.items?.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium mb-2">No articles found</h3>
        <p className="text-font-primary/80">
          No articles found in this category. Please try another category or check back later.
        </p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.items?.map(article => (
        <ArticleCard key={article.id} article={article} tags={categories} />
      ))}
    </div>
  );
}
