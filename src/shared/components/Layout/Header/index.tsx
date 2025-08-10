import { getImageUrl } from "@/shared/utils/getImage";
import Image from "next/image";
import { FC } from "react";
import DesktopNavigation from "./components/DesktopNavigation";
import MobileMenu from "./components/MobileMenu";

type HeaderProps = {
  logoUrl: string;
  brandName: string;
};

const Header: FC<HeaderProps> = ({ logoUrl, brandName }) => {
  return (
    <header className="bg-background/80 fixed right-0 left-0 top-0 z-50 backdrop-blur-sm backdrop-saturate-[100%]">
      <div className="container-custom py-4 flex items-center justify-between ">
        <div className="flex items-center gap-2">
          <Image
            src={getImageUrl(`/page-content/${logoUrl}`)}
            alt={brandName}
            width={48}
            height={48}
          />
          <p className="font-bold text-xl uppercase text-primary-dark">{brandName}</p>
        </div>
        <DesktopNavigation />
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
