import { Logo } from "../../Logo";
import { BackButton } from "./components/BackButton";
import DesktopNavigation from "./components/DesktopNavigation";
import MobileMenu from "./components/MobileMenu";

export default function Header() {
  return (
    <header className="bg-primary-light/20 fixed right-0 left-0 top-0 z-50 backdrop-blur-sm backdrop-saturate-[100%]">
      <div className="container-custom py-4 flex items-center justify-between ">
        <div className="flex items-center gap-2">
          <BackButton />
          <Logo />
        </div>
        <DesktopNavigation />
        <MobileMenu />
      </div>
    </header>
  );
}
