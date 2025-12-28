import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-300 bg-white">
      <div className="mx-auto hidden md:block">
        <DesktopNav />
      </div>
      <div className="md:hidden">
        <MobileNav />
      </div>
    </header>
  );
}
