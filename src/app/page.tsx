import { getArticles } from '@/entities/articles/api/getArticles';
import { getTags } from '@/entities/tags/api/getTags';
import { getUser } from '@/entities/user/api/getUser';
import ArticleCard from '@/shared/components/ArticleCard';
import CategoryCard from '@/shared/components/CaregoryCard';
import Hero from '@/shared/components/Layout/Hero';
import { ABOUT_PATH, ARTICLES_PATH } from '@/shared/routes/paths';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Growing Minds Kindergarten - Exploring and Growing Together',
  description:
    "A kindergarten teacher's blog sharing early childhood education insights, activities, and resources for parents and educators.",
};

export default async function Home() {
  const [user, articles, categories] = await Promise.all([
    getUser(),
    getArticles({ page: 1, limit: 3 }),
    getTags(),
  ]);

  return (
    <div className="flex flex-col gap-16 md:gap-24 pb-16">
      <Hero />
      <section className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Articles</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the latest teaching resources, activities, and insights for kindergarten
            education.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.articles?.map(article => (
            <ArticleCard key={article.id} article={article} tags={categories} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href={ARTICLES_PATH} className="btn-secondary inline-block">
            View All Articles
          </Link>
        </div>
      </section>

      {/* About Teacher Section */}
      <section className="bg-light-blue/30 py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative">
              <div className="relative h-[300px] md:h-[400px] w-full">
                {user.avatarUrl && (
                  <Image
                    src={user.avatarUrl}
                    alt={user?.firstName ?? 'teacher'}
                    fill
                    className="object-cover rounded-2xl"
                  />
                )}
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-3 rounded-xl shadow-lg">
                <span className="text-primary-yellow font-bold">10+ Years Experience</span>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About the Teacher</h2>
              <Link href={ABOUT_PATH} className="btn-primary inline-block">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Focus Section */}
      <section className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Educational Focus</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore different areas of early childhood education through these categories.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 justify-center mx-auto">
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>
    </div>
  );
}
