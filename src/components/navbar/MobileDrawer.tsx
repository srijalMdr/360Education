interface MobileDrawerProps {
  onClose: () => void;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative h-full w-[346px] max-w-sm bg-white p-6">
        <div className="mb-[36px] mt-[20px] flex items-center justify-between">
          <button onClick={onClose} aria-label="Close menu">
            <img src="/close.png" alt="close" />
          </button>

          <img src="/search.png" alt="search" />
        </div>

        <ul className="flex flex-col gap-5 text-lg font-medium">
          {[
            { label: "Services", href: "#services" },
            { label: "Student Destinations", href: "#destinations" },
            { label: "Scholarships", href: "#scholarships" },
            { label: "Test Preparation", href: "#test" },
            { label: "Program & University", href: "#program" },
            { label: "Blogs", href: "#blogs" },
            { label: "Events", href: "#events" },
            { label: "About Us", href: "#about" },
            { label: "Mock Test", href: "#mock-test" },
            { label: "Student Resources", href: "#resources" },
          ].map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={onClose}
                className="flex cursor-pointer items-center justify-between hover:text-primary"
              >
                <span>{label}</span>

                {(label === "Services" ||
                  label === "Student Destinations" ||
                  label === "Student Resources") && (
                  <img
                    src="/right.png"
                    alt="right"
                    className="h-3 w-3 flex-shrink-0"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="mt-8 w-full rounded-md border border-primary py-2 text-[16px] font-medium text-primary"
          onClick={onClose}
        >
          Contact Us
        </button>

        <div className="mt-6 flex gap-4">
          <img src="/facebook.png" className="h-8 w-8" />
          <img src="/instagram.png" className="h-8 w-8" />
          <img src="/tiktok.png" className="h-8 w-8" />
        </div>
      </div>
    </div>
  );
};

export default MobileDrawer;
