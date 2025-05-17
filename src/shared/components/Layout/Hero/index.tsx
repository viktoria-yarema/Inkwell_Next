import HeroImage1 from '@/public/images/hero-image-1.jpg';
import HeroImage2 from '@/public/images/hero-image-2.jpg';
import HeroImage from '@/public/images/hero-image.jpg';
import { ARTICLES_PATH } from '@/shared/routes/paths';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-primary-blue/70 to-white pt-12 pb-16 md:pt-20 md:pb-24">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Exploring and Growing Together
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Welcome to Growing Minds! I&apos;m Ms. Jane, a kindergarten teacher passionate about
              early childhood education. Here you&apos;ll find creative activities, teaching
              resources, and insights to support young learners.
            </p>
            <Link href={ARTICLES_PATH} className="btn-primary inline-block">
              View Articles
            </Link>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="relative h-[300px] md:h-[400px] w-full">
              <Image
                src={HeroImage}
                alt="Kindergarten classroom with children engaged in learning activities"
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg hidden md:block animate-float">
              <Image
                src={HeroImage1}
                alt="Decorative element"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <div
              className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg hidden md:block animate-float"
              style={{ animationDelay: '2s' }}
            >
              <Image
                src={HeroImage2}
                alt="Decorative element"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
