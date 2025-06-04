import LogoImage from "@/shared/assets/logos/logo.png";
import { HOME_PATH } from "@/shared/routes/paths";
import { cn } from "@/shared/utils/cn";
import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  logoClassName?: string;
  textClassName?: string;
};

export const Logo = ({ logoClassName, textClassName }: LogoProps) => {
  return (
    <Link href={HOME_PATH} className="flex items-center gap-2">
      <div className="relative w-10 h-10 md:w-12 md:h-12 transition-all duration-300 ease-in-out">
        <Image
          src={LogoImage}
          alt="Growing Minds Logo"
          width={48}
          height={48}
          className={cn("object-contain ", logoClassName)}
        />
      </div>
      <span className={cn("font-bold text-xl md:text-2xl text-primary-dark", textClassName)}>
        Growing Minds
      </span>
    </Link>
  );
};
