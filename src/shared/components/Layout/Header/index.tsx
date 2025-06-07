import { Logo } from "../../Logo";
import DesktopNavigation from "./components/DesktopNavigation";
import MobileMenu from "./components/MobileMenu";

export default function Header() {
  return (
    <header className="bg-background/80 fixed right-0 left-0 top-0 z-50 backdrop-blur-sm backdrop-saturate-[100%]">
      <div className="container-custom py-4 flex items-center justify-between ">
        <div className="flex items-center gap-2">
          <Logo />
        </div>
        <DesktopNavigation />
        <MobileMenu />
      </div>
    </header>
  );
}
