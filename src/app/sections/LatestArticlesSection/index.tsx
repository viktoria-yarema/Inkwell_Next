import { getArticles } from "@/entities/articles/api/getArticles";
import { getTags } from "@/entities/tags/api/getTags";
import ArticleCard from "@/shared/components/ArticleCard";
import { ARTICLES_PATH } from "@/shared/routes/paths";
import Link from "next/link";

type LatestArticlesSectionProps = {
  title: string;
  subtitle: string;
};

export default async function LatestArticlesSection({
  title,
  subtitle,
}: LatestArticlesSectionProps) {
  const [articles, categories] = await Promise.all([getArticles({ page: 1, limit: 3 }), getTags()]);

  return (
    <section className="container-custom">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 title">{title}</h2>
        <p className="subtitle">{subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.items?.map(article => (
          <ArticleCard key={article.id} article={article} tags={categories} />
        ))}
      </div>

      <div className="text-center mt-10">
        <Link href={ARTICLES_PATH} className="btn-primary inline-block">
          View All Articles
        </Link>
      </div>
    </section>
  );
}
