import Carousel from "../components/Carousel";
import DestinationsCard from "../components/navbar/DestinationsCard";

const DESTINATIONS = [
  {
    image: "/destinations/aus.png",
    flag: "/destinations/ausflag.png",
    title: "Australia",
  },
  {
    image: "/destinations/usa.png",
    flag: "/destinations/usaflag.png",
    title: "USA",
  },
  {
    image: "/destinations/can.png",
    flag: "/destinations/canflag.png",
    title: "Canada",
  },
  {
    image: "/destinations/ger.png",
    flag: "/destinations/gerflag.png",
    title: "Germany",
  },
];

export default function Explore() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-[80px] md:py-[96px]">
      <header className="mb-[24px] md:text-center">
        <span className="mb-[8px] text-[24px] font-[400px] md:mb-[12px] md:text-[32px]">
          <span>Explore our </span>
          <strong className="font-[700px] text-primary">
            Top Student Destinations
          </strong>
        </span>
        <p className="text-paragraph">
          Turn your international education dreams into reality.
        </p>
      </header>
      <section>
        <Carousel
          items={DESTINATIONS}
          desktopItems={4}
          mobileItems={1}
          renderItem={(destination) => <DestinationsCard {...destination} />}
        />
      </section>
    </div>
  );
}
