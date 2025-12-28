import StatItemCard from "../components/StatItemCard";

const ITEMS = [
  {
    image: "/visa.png",
    number: "98%",
    description: "Visa Success Rate",
  },
  {
    image: "/university.png",
    number: "100+",
    description: "Partnered Universities",
  },
  {
    image: "/destination.png",
    number: "10+",
    description: "Study Destinations",
  },
];

export default function Hero() {
  return (
    <main
      id="hero"
      className="w-full bg-[url('/background.png')] bg-cover bg-center bg-no-repeat md:min-h-[calc(100vh-150px)]"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center px-4 md:grid-cols-2">
        <aside className="mt-[64px] md:mt-[104px]">
          <h1 className="mb-4 text-[32px] font-normal md:mb-6 md:text-5xl">
            Get{" "}
            <span className="relative z-10 inline-block">
              Expert Guidance
              <span className="absolute bottom-1 left-0 z-0 h-2 w-full rounded-sm bg-cyan-300/70" />
            </span>{" "}
            for Your{" "}
            <strong className="text-primary">Study Abroad Plans</strong>
          </h1>

          <p className="mb-6 text-[16px] font-normal md:mb-6 md:text-lg">
            Discover top universities, explore scholarship options, and get
            professional assistance to turn your international education dreams
            into reality.
          </p>

          <button className="mb-12 h-[42px] w-[209px] rounded-md border-b-2 border-r-2 border-secondary bg-primary px-6 py-2 text-[14px] font-medium text-white md:mb-36">
            Book an Appointment
          </button>

          <section className="hidden flex-col md:flex md:flex-row">
            {ITEMS.map((item, index) => (
              <StatItemCard
                key={item.description}
                item={item}
                index={index}
                total={ITEMS.length}
              />
            ))}
          </section>
        </aside>

        {/* Image column */}
        <div className="flex justify-end">
          <img
            src="/model.png"
            alt="model"
            className="mb-10 w-full max-w-[520px] object-contain md:mt-[104px] md:h-[583px]"
          />
        </div>

        <section className="mb-[48px] flex flex-col md:hidden">
          {ITEMS.map((item, index) => (
            <StatItemCard
              key={item.description}
              item={item}
              index={index}
              total={ITEMS.length}
            />
          ))}
        </section>
      </div>
    </main>
  );
}
