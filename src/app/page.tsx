import { getUser } from "@/entities/user/api/getUser";
import { PageContentVariants } from "@/entities/user/type";
import HeroSection from "@/app/sections/HeroSection";
import LatestArticlesSection from "@/app/sections/LatestArticlesSection";
import AboutTeacherSection from "@/app/sections/AboutTeacherSection";
import EducationalFocusSection from "@/app/sections/EducationalFocusSection";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Growing Minds Kindergarten - Exploring and Growing Together",
  description:
    "A kindergarten teacher's blog sharing early childhood education insights, activities, and resources for parents and educators.",
};

export default async function Home() {
  const user = await getUser();
  const { pageContent } = user;
  const {
    hero,
    latestArticles,
    categories: categoriesData,
  } = pageContent[PageContentVariants.HOME];

  const { intro } = pageContent[PageContentVariants.ABOUT];

  return (
    <>
      <HeroSection title={hero.title} description={hero.subtitle} imageUrl={hero.imageUrl} />
      <LatestArticlesSection title={latestArticles.title} subtitle={latestArticles.subtitle} />
      <AboutTeacherSection title={intro.title} content={intro.content} />
      <EducationalFocusSection title={categoriesData.title} subtitle={categoriesData.subtitle} />
    </>
  );
}
