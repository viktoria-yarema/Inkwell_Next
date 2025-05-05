import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import ArticleCard from "@/shared/components/article-card"
import NewsletterForm from "@/shared/components/newsletter-form"
import CategoryCard from "@/shared/components/category-card"
import { getUser } from "@/entities/user/api/getUser"
import { getArticles } from "@/entities/articles/api/getArticles"
import { getTags } from "@/entities/tags/api/getTags"

export const metadata: Metadata = {
  title: "Growing Minds Kindergarten - Exploring and Growing Together",
  description:
    "A kindergarten teacher's blog sharing early childhood education insights, activities, and resources for parents and educators.",
}

export default async function Home() {
  const user = await getUser();
  const articles = await getArticles();
  const categories = await getTags();

  // TODO: get latest articles from server 
  const latestArticles = articles.slice(0, 3);

  return (
    <div className="flex flex-col gap-16 md:gap-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-light-yellow to-white pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Exploring and Growing Together</h1>
              <p className="text-lg text-gray-700 mb-6">
                Welcome to Growing Minds! I&apos;m Ms. Jane, a kindergarten teacher passionate about early childhood
                education. Here you&apos;ll find creative activities, teaching resources, and insights to support young
                learners.
              </p>
              <Link href="/articles" className="btn-primary inline-block">
                View Articles
              </Link>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="relative h-[300px] md:h-[400px] w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Kindergarten classroom with children engaged in learning activities"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg hidden md:block animate-float">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Decorative element"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div
                className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg hidden md:block animate-float"
                style={{ animationDelay: "2s" }}
              >
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Decorative element"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Articles</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the latest teaching resources, activities, and insights for kindergarten education.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/articles" className="btn-secondary inline-block">
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
                    alt={user?.firstName ?? "teacher"}
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
              {/* <p className="text-gray-700 mb-6">{user?.bio}</p> */}
              <Link href="/about" className="btn-primary inline-block">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container-custom">
        <NewsletterForm />
      </section>
    </div>
  )
}
