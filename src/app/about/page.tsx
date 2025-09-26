import { getUser } from "@/entities/user/api/getUser";
import { PageContentVariants } from "@/entities/user/type";
import type { Metadata } from "next";
import AboutHeroSection from "./sections/AboutHeroSection";
import EducationSection from "./sections/EducationSection";
import ProfessionalExperienceSection from "./sections/ProfessionalExperienceSection";
import SkillsSection from "./sections/SkillsSection";
import TeachingPhilosophySection from "./sections/TeachingPhilosophySection";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "About the Teacher",
  description:
    "Learn more about Ms. Jane, a dedicated kindergarten teacher with over 10 years of experience in early childhood education.",
};

export default async function AboutPage() {
  const user = await getUser();
  const { pageContent } = user;
  const { intro, professionalExperience, philosophy, skills, educations } =
    pageContent[PageContentVariants.ABOUT];

  return (
    <>
      <div className="flex flex-col gap-16 container-custom">
        <AboutHeroSection title={intro.title} content={intro.content} />
        <TeachingPhilosophySection title={philosophy.title} content={philosophy.content} />
        <ProfessionalExperienceSection experiences={professionalExperience} />
        <EducationSection educations={educations} />
        <SkillsSection skills={skills} />
      </div>
    </>
  );
}
