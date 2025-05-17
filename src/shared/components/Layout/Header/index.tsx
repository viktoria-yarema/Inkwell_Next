import LogoImage from '@/shared/assets/logos/inkwell.svg';
import { HOME_PATH } from '@/shared/routes/paths';
import Image from 'next/image';
import Link from 'next/link';
import DesktopNavigation from './components/DesktopNavigation';
import MobileMenu from './components/MobileMenu';

export default function Header() {
  return (
    <header className="bg-white/80  sticky top-0 z-50 backdrop-blur-[4px] backdrop-saturate-[100%] bg-opacity-10 border border-opacity-0 border-[#ffffff]">
      <div className="container-custom py-4 flex items-center justify-between">
        <Link href={HOME_PATH} className="flex items-center gap-2">
          <div className="relative w-10 h-10 md:w-12 md:h-12">
            <Image
              src={LogoImage}
              alt="Growing Minds Logo"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <span className="font-bold text-xl md:text-2xl text-primary-yellow">Growing Minds</span>
        </Link>
        <DesktopNavigation />
        <MobileMenu />
      </div>
    </header>
  );
}
