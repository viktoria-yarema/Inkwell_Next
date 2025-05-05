import type { Metadata } from "next"
import ArticleCard from "@/shared/components/article-card"
import Link from "next/link"
import { Palette, BookOpen, PuzzleIcon as PuzzlePiece, Heart } from "lucide-react"
import { getArticles } from "@/entities/articles/api/getArticles"
import { getTags } from "@/entities/tags/api/getTags"

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Browse all articles on early childhood education, activities, and resources for kindergarten teachers and parents.",
}

interface ArticlesPageProps {
  searchParams: { category?: string }
}

export default async function ArticlesPage({ searchParams }: ArticlesPageProps) {
  // Fetch all articles and categories
  const [articles, categories] = await Promise.all([getArticles(), getTags()])

  // Filter articles by category if provided in search params
  const filteredArticles = searchParams.category
    ? articles.filter((article) => article.category.toLowerCase().replace(/\s+/g, "-") === searchParams.category)
    : articles

  // Get the active category name for display
  const activeCategory = searchParams.category
    ? categories.find((cat) => cat.slug === searchParams.category)?.name
    : null

  return (
    <div className="container-custom py-12 md:py-16">
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

      {/* Category Filter */}
      <div className="mb-10">
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/articles"
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              !searchParams.category ? "bg-primary-yellow text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All
          </Link>

          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/articles?category=${category.slug}`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-1 ${
                searchParams.category === category.slug
                  ? "bg-primary-yellow text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {/* {category.icon === "palette" && <Palette size={14} />}
              {category.icon === "book-open" && <BookOpen size={14} />}
              {category.icon === "puzzle" && <PuzzlePiece size={14} />}
              {category.icon === "heart" && <Heart size={14} />}
              {category.name} */}
            </Link>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      {filteredArticles.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
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
  )
}
