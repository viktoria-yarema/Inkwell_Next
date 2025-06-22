import { TAG_ICONS } from "@/entities/tags/constants";
import type { Tag } from "@/entities/tags/type";
import { BookOpen } from "lucide-react";
import Link from "next/link";
import { ARTICLES_PATH } from "../routes/paths";
import { Card } from "./ui/card";

type CategoryCardProps = {
  category: Tag;
};

export default function CategoryCard({ category }: CategoryCardProps) {
  const IconComponent = TAG_ICONS[category.icon]?.Icon || BookOpen;

  return (
    <Card className="rounded-2xl cursor-pointer aspect-square min-w-[160px] p-4 flex flex-col items-center justify-center text-center card-hover">
      <Link
        href={`${ARTICLES_PATH}?category=${category.id}`}
        className="text-center w-full h-full flex flex-col items-center justify-center"
      >
        <div className="bg-primary p-4 rounded-full mb-4">
          <IconComponent className="h-8 w-8 text-font-secondary" />
        </div>
        <p className="font-bold text-lg mb-2 text-primary-dark">{category.title}</p>
      </Link>
    </Card>
  );
}
