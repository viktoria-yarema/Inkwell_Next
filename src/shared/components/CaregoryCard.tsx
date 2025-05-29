import { TAG_ICONS } from "@/entities/tags/constants";
import type { Tag } from "@/entities/tags/type";
import { BookOpen } from "lucide-react";
import Link from "next/link";
import { ARTICLES_PATH } from "../routes/paths";

type CategoryCardProps = {
  category: Tag;
};

export default function CategoryCard({ category }: CategoryCardProps) {
  const IconComponent = TAG_ICONS[category.icon]?.Icon || BookOpen;

  return (
    <Link
      href={`${ARTICLES_PATH}?category=${category.id}`}
      className="bg-white rounded-2xl w-full  md:w-[200px] p-4 shadow-sm flex flex-col items-center text-center card-hover"
    >
      <div className="bg-primary-blue p-4 rounded-full mb-4">
        <IconComponent className="h-8 w-8 text-white" />
      </div>
      <p className="font-bold text-lg mb-2">{category.title}</p>
    </Link>
  );
}
