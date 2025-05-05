import Link from "next/link"
import Image from "next/image"
import { formatDate } from "@/shared/utils/utils"
import type { Article } from "@/entities/articles/type"

interface ArticleCardProps {
  article: Article
  featured?: boolean
}

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  return (
    <article className={`bg-white rounded-2xl overflow-hidden shadow-sm card-hover ${featured ? "md:col-span-2" : ""}`}>
      <Link href={`/articles/${article.slug}`} className="block">
        <div className="relative aspect-video w-full">
          <Image src={article.coverImage || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
          <div className="absolute top-4 left-4 bg-primary-yellow/90 text-white text-xs font-medium px-3 py-1 rounded-full">
            {article.category}
          </div>
        </div>
      </Link>

      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
        </div>

        <Link href={`/articles/${article.slug}`} className="block group">
          <h3
            className={`font-bold text-gray-800 group-hover:text-primary-yellow transition-colors ${featured ? "text-2xl mb-3" : "text-xl mb-2"}`}
          >
            {article.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
        </Link>

        <Link
          href={`/articles/${article.slug}`}
          className="inline-flex items-center font-medium text-primary-yellow hover:text-primary-yellow/80 transition-colors"
        >
          Read more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  )
}
