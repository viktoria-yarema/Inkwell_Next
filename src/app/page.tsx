import { getArticles } from "@/entities/articles/api/getArticles";
import { getTags } from "@/entities/tags/api/getTags";
import { getUser } from "@/entities/user/api/getUser";
import { PageContentVariants } from "@/entities/user/type";
import ArticleCard from "@/shared/components/ArticleCard";
import CategoryCard from "@/shared/components/CategoryCard";
import ExperienceBadge from "@/shared/components/ExperienceBadge";
import Hero from "@/shared/components/Layout/Hero";
import { ABOUT_PATH, ARTICLES_PATH } from "@/shared/routes/paths";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Growing Minds Kindergarten - Exploring and Growing Together",
  description:
    "A kindergarten teacher's blog sharing early childhood education insights, activities, and resources for parents and educators.",
};

export default async function Home() {
  const [user, articles, categories] = await Promise.all([
    getUser(),
    getArticles({ page: 1, limit: 3 }),
    getTags(),
  ]);

  const { pageContent } = user;
  const {
    hero,
    latestArticles,
    categories: categoriesData,
  } = pageContent[PageContentVariants.HOME];

  const { intro } = pageContent[PageContentVariants.ABOUT];

  return (
    <>
      <Hero title={hero.title} description={hero.subtitle} image={hero.imageUrl} />
      <section className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 title">{latestArticles.title}</h2>
          <p className="subtitle">{latestArticles.subtitle}</p>
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

      {/* About Teacher Section */}
      <section>
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative">
              <div className="relative h-[300px] md:h-[400px] w-full">
                {user?.avatarUrl && (
                  <Image
                    src={user?.avatarUrl}
                    alt={user?.firstName ?? "teacher"}
                    fill
                    className="object-cover rounded-2xl"
                  />
                )}
              </div>
              <ExperienceBadge />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 title">{intro.title}</h2>
              <p className="subtitle text-left mb-6 line-clamp-2">{intro.content}</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 title">{categoriesData.title}</h2>
          <p className="subtitle">{categoriesData.subtitle}</p>
        </div>

        <div className="flex flex-wrap gap-6 justify-center mx-auto">
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>
    </>
  );
}
