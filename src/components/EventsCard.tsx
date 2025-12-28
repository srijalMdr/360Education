interface Event {
  image: string;
  title: string;
  location: string;
}

export default function EventCard({ image, title, location }: Event) {
  return (
    <div className="max-w-[294px] rounded-lg border bg-slate-100 p-[16px] shadow-sm md:max-w-[392px] md:p-[24px]">
      <img src={image} alt="event" className="mb-[16px]" />
      <section className="mb-[16px] flex items-center justify-start gap-1">
        <img src="/eLocation.png" alt="location" />
        <p className="text-sm text-gray-600">{location}</p>
      </section>
      <article className="mb-[16px] flex items-start justify-between">
        <h3 className="mb-2 w-[163px] text-[16px] font-[500px] md:w-[209px] md:text-[20px]">
          {title}
        </h3>
        <p className="w-[99px] rounded-md bg-gray-300 px-[5px] py-[5px] text-sm md:w-[119px] md:px-[16px] md:py-[6px]">
          28<sup>th</sup> Jan 2025
        </p>
      </article>
      <button className="hidden h-[42px] w-full rounded-md border-b-2 border-r-2 border-secondaryYellow bg-primary px-6 py-2 text-[14px] font-medium text-white md:block">
        Register Now{" "}
      </button>
    </div>
  );
}
