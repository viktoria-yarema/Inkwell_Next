import { getTags } from "@/entities/tags/api/getTags";
import CategoryFilterSection from "./sections/CategoryFilterSection";
import ArticlesListSection from "./sections/ArticlesListSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Browse all articles on early childhood education, activities, and resources for kindergarten teachers and parents.",
};

type ArticlesPageProps = {
  searchParams: Promise<{ category?: string }>;
};

export default async function ArticlesPage({ searchParams }: ArticlesPageProps) {
  const { category } = await searchParams;
  const categories = await getTags();

  const activeCategory = category ? categories.find(cat => cat.id === category)?.title : null;

  return (
    <div className="container-custom pb-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {activeCategory ? `${activeCategory} Articles` : "All Articles"}
        </h1>
        <p className="subtitle">
          {activeCategory
            ? `Browse our collection of articles about ${activeCategory.toLowerCase()}.`
            : "Browse our collection of articles on early childhood education, activities, and resources."}
        </p>
      </div>
      <CategoryFilterSection activeCategory={category} />
      <ArticlesListSection category={category} />
    </div>
  );
}
