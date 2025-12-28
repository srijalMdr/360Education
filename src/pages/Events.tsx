import Carousel from "../components/Carousel";
import EventCard from "../components/EventsCard";

const EVENTS = [
  {
    image: "/e1.png",
    title: "USA Education Fair - May & August Intake",
    location: "Biratnagar",
  },
  {
    image: "/e2.png",
    title: "USA Education Fair - May & August Intake",
    location: "Biratnagar",
  },
  {
    image: "/e3.png",
    title: "USA Education Fair - May & August Intake",
    location: "Biratnagar",
  },
];

export default function Events() {
  return (
    <div className="h-100vh mx-auto max-w-7xl px-4" id="events">
      <main className="mt-[64px] flex items-center justify-between">
        <div>
          <h1 className="mb-[8px] text-[24px] font-normal md:mb-[12px] md:text-[32px]">
            Upcoming{" "}
            <strong className="font-[700px] text-primary">Events</strong>
          </h1>

          <p className="mb-6 text-[16px] font-normal text-paragraph md:text-lg">
            Turn your international education dreams into reality.
          </p>
        </div>
        <div>
          <button className="mb-12 hidden h-[42px] w-[164px] rounded-md border-b-2 border-r-2 border-secondaryYellow bg-primary px-6 py-2 text-[14px] font-medium text-white md:block">
            View All Events
          </button>
        </div>
      </main>
      <section>
        <Carousel
          items={EVENTS}
          desktopItems={3}
          mobileItems={1}
          renderItem={(event) => <EventCard {...event} />}
        />
      </section>
      <button className="mb-[64px] h-[42px] w-full rounded-md border-b-2 border-r-2 border-secondaryYellow bg-primary px-6 py-2 text-[14px] font-medium text-white md:hidden">
        View All Events
      </button>
    </div>
  );
}
