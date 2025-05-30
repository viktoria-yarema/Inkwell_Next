import HeroImage from "@/shared/assets/hero/hero-3.png";
import { ARTICLES_PATH } from "@/shared/routes/paths";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="pt-16 pb-16 md:pt-20 md:pb-24 ">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight title">
              Exploring and Growing Together
            </h1>
            <p className="subtitle text-left mb-6">
              Welcome to Growing Minds! I&apos;m Ms. Jane, a kindergarten teacher passionate about
              early childhood education. Here you&apos;ll find creative activities, teaching
              resources, and insights to support young learners.
            </p>
            <Link
              href={ARTICLES_PATH}
              className="btn-primary md:w-fit text-lg md:text-xl md:h-[58px] flex items-center justify-center"
            >
              View Articles
            </Link>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="relative h-[300px] md:h-[400px] w-full">
              <Image
                src={HeroImage}
                alt="Kindergarten classroom with children engaged in learning activities"
                fill
                className="object-cover rounded-xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
