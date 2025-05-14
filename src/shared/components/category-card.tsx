import Link from "next/link"
import { BookOpen } from "lucide-react"
import type { Tag } from "@/entities/tags/type"
import { TAG_ICONS } from "@/entities/tags/constants"
interface CategoryCardProps {
  category: Tag
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const IconComponent = TAG_ICONS[category.icon]?.Icon || BookOpen

  return (
    <Link
      href={`/articles?category=${category.id}`}
      className="bg-white rounded-2xl p-6 shadow-sm flex flex-col items-center text-center card-hover"
    >
      <div className="bg-light-yellow p-4 rounded-full mb-4">
        <IconComponent className="h-8 w-8 text-primary-yellow" />
      </div>
      <p className="font-bold text-lg mb-2">{category.title}</p>
    </Link>
  )
}
