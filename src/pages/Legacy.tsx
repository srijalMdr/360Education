import LegacyItemCard from "../components/LegacyItemCard";

const ITEMS = [
  { image: "/visa.png", number: "98.2%", description: "Visa Success Rate" },
  {
    image: "/university.png",
    number: "500+",
    description: "Partnered Universities",
  },
  { image: "/destination.png", number: "8", description: "Study Destinations" },
  {
    image: "/students.png",
    number: "15K+",
    description: "Successful Students",
  },
  {
    image: "/experience.png",
    number: "23",
    description: "Years of Experience",
  },
  {
    image: "/scholarship.png",
    number: "$5M+",
    description: "Scholarship Secured",
  },
];

export default function Leg() {
  return (
    <div className="w-full bg-[url('/background.png')] bg-cover bg-no-repeat md:h-[calc(100vh-150px)]">
      <div className="mx-auto max-w-7xl px-4">
        <main className="flex flex-col gap-6 pt-[48px] md:flex-row md:items-start md:justify-between md:pt-[93px]">
          <aside className="flex-shrink-0 md:w-[698px]">
            <h1 className="mb-4 text-[24px] font-normal md:mb-6 md:text-[32px]">
              A Legacy of Trust, Excellence, and{" "}
              <strong className="font-bold text-primary">
                Student Success
              </strong>
            </h1>

            <p className="mb-6 text-base font-normal md:text-lg">
              At 360 Education, we are committed to guiding students toward a
              successful international education journey. With expert
              counseling, comprehensive support, and a strong network of global
              institutions, we help students make informed decisions and achieve
              their academic dreams with confidence.
            </p>

            <section className="mb-[32px] grid grid-cols-2 gap-x-7 md:mb-[48px] md:grid-cols-3 md:gap-x-8 md:gap-y-6">
              {ITEMS.map((item, index) => (
                <LegacyItemCard
                  key={item.description}
                  item={item}
                  index={index}
                  total={ITEMS.length}
                />
              ))}
            </section>

            <button className="mb-[48px] h-[42px] w-[282px] rounded-md border-b-2 border-r-2 border-secondary bg-primary px-6 py-2 text-[14px] font-medium text-white md:mb-36">
              Learn More about 360 Education
            </button>
          </aside>

          <img
            src="/legacy.png"
            alt="model"
            className="mx-auto mb-24 flex-shrink-0 object-contain md:mx-0 md:mb-0 md:h-[515px]"
          />
        </main>
      </div>
    </div>
  );
}
