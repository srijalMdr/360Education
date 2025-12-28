import FooterColumn from "../components/FooterColumn";
import OfficeCard from "../components/OfficeCard";

const offices = [
  {
    image: "/about/kamalpokhari.png",
    title: "Head Office",
    location: "Kamalpokhari",
    phones: ["01-5321268", "01-5321267", "01-5332779"],
    email: "hello@360education.global",
    address: "Remwork Building, Kamalpokhari, Kathmandu",
  },
  {
    image: "/about/kumaripati.png",
    title: "",
    location: "Kumaripati",
    phones: ["01-5321268", "01-5321267", "01-5332779"],
    email: "hello@360education.global",
    address: "Remwork Building, Kamalpokhari, Kathmandu",
  },
  {
    image: "/about/biratnagar.png",
    title: "",
    location: "Biratnagar",
    phones: ["01-5321268", "01-5321267", "01-5332779"],
    email: "hello@360education.global",
    address: "Remwork Building, Kamalpokhari, Kathmandu",
  },
];

export default function About() {
  return (
    <main
      id="about"
      className="min-h-screen w-full bg-[url('/about.png')] bg-cover bg-center bg-no-repeat"
    >
      <div className="w-full bg-[url('/map.png')] bg-cover bg-center bg-no-repeat md:min-h-[calc(100vh-150px)]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 gap-8 py-[48px] md:grid-cols-5 md:pb-[40px] md:pt-[70px]">
            <FooterColumn
              title="Quick Links"
              items={[
                "Home",
                "Services",
                "Destinations",
                "Programs",
                "Tests",
                "Blogs",
                "Scholarships",
                "Events",
              ]}
              highlightItem="Destinations"
            />

            <FooterColumn
              title="Services"
              items={[
                "Career Counseling",
                "Test-Preparation",
                "Financial Advice",
                "Pre-Departure Orientation",
                "University Admissions",
                "Visa Facilitation",
              ]}
            />

            <FooterColumn
              title="Destinations"
              items={[
                "Australia",
                "USA",
                "UK",
                "Canada",
                "Thailand",
                "UAE",
                "New Zealand",
                "Europe",
              ]}
            />

            <FooterColumn
              title="Test Preparation"
              items={["IELTS", "TOEFL", "PTE", "SAT", "OET", "Duolingo"]}
            />

            <FooterColumn
              title="Company"
              items={[
                "About",
                "Contacts",
                "Privacy Policy",
                "Terms & Conditions",
              ]}
            />
          </div>

          <article className="rounded-xl bg-white/10 p-6 backdrop-blur-md">
            <div className="relative mb-4 block w-fit md:mx-auto">
              <h4 className="text-[16px] font-semibold uppercase text-white md:mb-[16px]">
                Our Locations
              </h4>
              <span className="absolute -bottom-1 left-0 h-[3px] w-11 bg-secondary md:left-8" />
            </div>

            <section className="grid gap-6 px-4 sm:grid-cols-1 md:grid-cols-3">
              {offices.map((office, index) => (
                <OfficeCard key={index} {...office} />
              ))}
            </section>
          </article>

          <footer className="mt-[40px] md:mt-[48px]">
            <img
              src="/about/badge.png"
              alt="badge"
              className="mx-auto md:hidden"
            />

            <img
              src="/about/footer.png"
              alt="footer"
              className="hidden md:mx-auto md:block"
            />

            <p className="mx-auto mb-[24px] mt-[8px] text-center text-white md:mb-[60px] md:mt-[16px] md:w-[800px]">
              Our institution is recognized and accredited by leading global
              education bodies, ensuring high-quality standards and credibility.
              These accreditations validate our commitment to excellence,
              providing students with internationally accepted qualifications
              and enhanced career prospects.
            </p>

            <p className="pb-[32px] text-center text-white md:hidden">
              © 2025, 360 Education. All Rights are Reserved.
            </p>

            <div className="hidden md:flex md:items-center md:justify-between">
              <img src="/about/rights.png" alt="rights" />
              <img src="/about/makura.png" alt="makura" />
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
