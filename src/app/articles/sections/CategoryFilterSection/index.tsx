import { getTags } from "@/entities/tags/api/getTags";
import { TAG_ICONS } from "@/entities/tags/constants";
import { ARTICLES_PATH } from "@/shared/routes/paths";
import Link from "next/link";

type CategoryFilterSectionProps = {
  activeCategory?: string;
};

export default async function CategoryFilterSection({
  activeCategory,
}: CategoryFilterSectionProps) {
  const categories = await getTags();

  return (
    <div className="mb-10">
      <div className="flex flex-wrap justify-center gap-3">
        <Link
          href={ARTICLES_PATH}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            !activeCategory
              ? "bg-primary text-font-secondary"
              : "bg-primary-light/20 text-font-primary hover:bg-primary-light/30"
          }`}
        >
          All
        </Link>
        {categories.map(cat => {
          const Icon = TAG_ICONS[cat.icon]?.Icon;
          return (
            <Link
              key={cat.id}
              href={`${ARTICLES_PATH}?category=${cat.id}`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-1 ${
                activeCategory === cat.id
                  ? "bg-primary text-font-secondary"
                  : "bg-primary-light/20 text-font-primary hover:bg-primary-light/30"
              }`}
            >
              {Icon && <Icon className="w-3.5 h-3.5" />}
              {cat.title.toUpperCase()}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
