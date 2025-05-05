import Link from "next/link"
import { Palette, BookOpen, PuzzleIcon as PuzzlePiece, Heart, type LucideIcon } from "lucide-react"
import type { Category } from "@/lib/api"

interface CategoryCardProps {
  category: Category
}

export default function CategoryCard({ category }: CategoryCardProps) {
  // Map category icons to Lucide icons
  const iconMap: Record<string, LucideIcon> = {
    palette: Palette,
    "book-open": BookOpen,
    puzzle: PuzzlePiece,
    heart: Heart,
  }

  const IconComponent = iconMap[category.icon] || BookOpen

  return (
    <Link
      href={`/articles?category=${category.slug}`}
      className="bg-white rounded-2xl p-6 shadow-sm flex flex-col items-center text-center card-hover"
    >
      <div className="bg-light-yellow p-4 rounded-full mb-4">
        <IconComponent className="h-8 w-8 text-primary-yellow" />
      </div>
      <h3 className="font-bold text-lg mb-2">{category.name}</h3>
      <p className="text-gray-600 text-sm">{category.description}</p>
    </Link>
  )
}
