import Hero from "@/shared/components/Layout/Hero";

type HeroSectionProps = {
  title: string;
  description: string;
  imageUrl: string;
};

export default function HeroSection({ title, description, imageUrl }: HeroSectionProps) {
  return <Hero title={title} description={description} image={imageUrl} />;
}
