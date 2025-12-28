import Logo from "../Logo";

export default function DesktopNav() {
  return (
    <div>
      <div className="border-b">
        <header className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank">
              <img
                src="/facebook.png"
                alt="Facebook"
                className="h-[24px] w-[24px]"
              />
            </a>

            <a href="https://instagram.com" target="_blank">
              <img
                src="/instagram.png"
                alt="Instagram"
                className="h-[24px] w-[24px]"
              />
            </a>

            <a href="https://tiktok.com" target="_blank">
              <img
                src="/tiktok.png"
                alt="TikTok"
                className="h-[24px] w-[24px]"
              />
            </a>
          </div>
          <ul className="flex gap-8 text-[14px] text-lg font-normal text-paragraph">
            {[
              { label: "Blogs", href: "#blogs" },
              { label: "Events", href: "#events" },
              { label: "About Us", href: "#about" },
              { label: "Mock Test", href: "#mock-test" },
              { label: "Student Resources", href: "#resources" },
            ].map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="flex cursor-pointer items-center gap-1 hover:text-blue-600"
                >
                  {label}
                  {label === "Student Resources" && (
                    <img
                      src="/down.png"
                      alt="dropdown"
                      className="h-3 w-3 object-contain"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </header>
      </div>

      <nav className="mx-auto max-w-7xl items-center justify-between px-4 py-4 md:flex">
        <Logo />

        <div className="flex items-center gap-[24px]">
          <ul className="flex gap-8 text-lg font-medium">
            {[
              { label: "Services", href: "#services" },
              { label: "Student Destinations", href: "#destinations" },
              { label: "Scholarships", href: "#scholarships" },
              { label: "Test Preparation", href: "#test" },
              { label: "Program & University", href: "#program" },
            ].map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="flex cursor-pointer items-center gap-1 hover:text-blue-600"
                >
                  {label}
                  {(label === "Services" ||
                    label === "Student Destinations") && (
                    <img
                      src="/down.png"
                      alt="down"
                      className="h-3 w-3 object-contain"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-[7.5px] md:gap-[28px]">
            <img src="/search.png" alt="search" className="md:ml-[15px]" />
            <button className="rounded-md border border-primary bg-white px-[20px] py-[12px] text-center text-base font-medium text-primary md:px-[32px] md:py-[16px]">
              Contact Us
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
