import { getTags } from "@/entities/tags/api/getTags";
import CategoryCard from "@/shared/components/CategoryCard";

type EducationalFocusSectionProps = {
  title: string;
  subtitle: string;
};

export default async function EducationalFocusSection({
  title,
  subtitle,
}: EducationalFocusSectionProps) {
  const categories = await getTags();

  return (
    <section className="container-custom">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 title">{title}</h2>
        <p className="subtitle">{subtitle}</p>
      </div>

      <div className="flex flex-wrap gap-6 justify-center mx-auto">
        {categories.map(category => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
