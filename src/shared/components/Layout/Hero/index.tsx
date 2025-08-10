import { ARTICLES_PATH } from "@/shared/routes/paths";
import { getImageUrl } from "@/shared/utils/getImage";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type HeroProps = {
  title: string;
  description: string;
  image: string;
};

const Hero: FC<HeroProps> = ({ title, description, image }) => {
  return (
    <section className=" ">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight title">{title}</h1>
            <p className="subtitle text-left mb-6">{description}</p>
            <Link
              href={ARTICLES_PATH}
              className="btn-primary md:w-fit text-lg md:text-xl md:h-[58px] flex items-center justify-center"
            >
              View Articles
            </Link>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="relative h-[336px] md:h-[400px] w-full">
              <Image
                src={getImageUrl(`/page-content/${image}`)}
                alt={title}
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
