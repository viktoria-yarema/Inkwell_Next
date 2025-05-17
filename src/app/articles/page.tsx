import { getArticles } from '@/entities/articles/api/getArticles';
import { getTags } from '@/entities/tags/api/getTags';
import { TAG_ICONS } from '@/entities/tags/constants';
import ArticleCard from '@/shared/components/ArticleCard';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'Browse all articles on early childhood education, activities, and resources for kindergarten teachers and parents.',
};

type ArticlesPageProps = {
  searchParams: { category?: string };
};

export default async function ArticlesPage({ searchParams }: ArticlesPageProps) {
  const category = searchParams?.category;
  const [articles, categories] = await Promise.all([
    getArticles({ page: 1, limit: 10, tag: category }),
    getTags(),
  ]);

  const activeCategory = category ? categories.find(cat => cat.id === category)?.title : null;

  return (
    <div className="container-custom py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {activeCategory ? `${activeCategory} Articles` : 'All Articles'}
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {activeCategory
            ? `Browse our collection of articles about ${activeCategory.toLowerCase()}.`
            : 'Browse our collection of articles on early childhood education, activities, and resources.'}
        </p>
      </div>
      <div className="mb-10">
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/articles"
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              !searchParams.category
                ? 'bg-primary-yellow text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All
          </Link>
          {categories.map(category => {
            const Icon = TAG_ICONS[category.icon]?.Icon;
            return (
              <Link
                key={category.id}
                href={`/articles?category=${category.id}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-1 ${
                  searchParams.category === category.id
                    ? 'bg-primary-yellow text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {Icon && <Icon size={14} />}
                {category.title.toUpperCase()}
              </Link>
            );
          })}
        </div>
      </div>
      {articles.articles?.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.articles?.map(article => (
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
