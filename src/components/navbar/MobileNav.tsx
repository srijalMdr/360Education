import { useState } from "react";
import Logo from "../Logo";
import MobileDrawer from "./MobileDrawer";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-[16px] py-3 md:hidden">
      <span className="flex items-center justify-between">
        <button onClick={() => setOpen(true)}>
          <img src="/hamburger.png" alt="hamburger" />
        </button>
        {open && <MobileDrawer onClose={() => setOpen(false)} />}
        <Logo />
      </span>

      <span className="flex h-[35px] w-[161px] items-center gap-[16px]">
        <img src="/search.png" alt="search" />
        <button className="h-[35px] w-[125px] rounded-md border-2 border-primary bg-white text-center text-base font-medium text-primary">
          Contact Us
        </button>
      </span>
    </nav>
  );
}
