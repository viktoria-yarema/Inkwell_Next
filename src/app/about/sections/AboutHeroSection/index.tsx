import { getUser } from "@/entities/user/api/getUser";
import ExperienceBadge from "@/shared/components/ExperienceBadge";
import SocialMediaLinks from "@/shared/components/SocialMediaLinks";

type AboutHeroSectionProps = {
  title: string;
  content: string;
};

export default async function AboutHeroSection({ title, content }: AboutHeroSectionProps) {
  const user = await getUser();

  return (
    <section className="">
      <div className="">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-dark title">{title}</h1>
            <p className="subtitle text-left mb-6">{content}</p>
            <div className="mb-6">
              <SocialMediaLinks socialMedia={user?.socialMedia || []} />
            </div>
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
