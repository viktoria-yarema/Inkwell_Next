import LogoImage from "@/shared/assets/logos/inkwell.svg";
import { HOME_PATH } from "@/shared/routes/paths";
import Image from "next/image";
import Link from "next/link";
import { BackButton } from "./components/BackButton";
import DesktopNavigation from "./components/DesktopNavigation";
import MobileMenu from "./components/MobileMenu";

export default function Header() {
  return (
    <header className="bg-primary-light/20 fixed right-0 left-0 top-0 z-50 backdrop-blur-sm backdrop-saturate-[100%]">
      <div className="container-custom py-4 flex items-center justify-between ">
        <div className="flex items-center gap-2">
          <BackButton />
          <Link href={HOME_PATH} className="flex items-center gap-2">
            <div className="relative w-10 h-10 md:w-12 md:h-12 transition-all duration-300 ease-in-out">
              <Image
                src={LogoImage}
                alt="Growing Minds Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <span className="font-bold text-xl md:text-2xl text-primary">Growing Minds</span>
          </Link>
        </div>
        <DesktopNavigation />
        <MobileMenu />
      </div>
    </header>
  );
}
