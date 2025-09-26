import ExperienceBadge from "@/shared/components/ExperienceBadge";

type AboutHeroSectionProps = {
  title: string;
  content: string;
};

export default async function AboutHeroSection({ title, content }: AboutHeroSectionProps) {
  return (
    <section className="">
      <div className="">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-dark title">{title}</h1>
            <p className="subtitle text-left">{content}</p>
            <div className="flex gap-4">{/* Social links can be added here in the future */}</div>
          </div>
          <div className="relative">
            <div className="relative h-[300px] md:h-[400px] w-full">
              {/* Avatar image can be added here */}
            </div>
            <ExperienceBadge />
          </div>
        </div>
      </div>
    </section>
  );
}
