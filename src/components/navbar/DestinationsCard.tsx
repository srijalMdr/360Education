interface Event {
  image: string;
  flag: string;
  title: string;
}

export default function EventCard({ image, flag, title }: Event) {
  return (
    <div className="max-w-[294px] rounded-lg border bg-slate-100 p-[16px] shadow-sm md:max-w-[308px] md:p-[8px]">
      <img src={image} alt="image" className="mb-[16px]" />
      <section className="mb-[16px] flex items-center justify-start gap-1">
        <img src={flag} alt="location" />
        <p className="text-sm text-gray-600">{title}</p>
      </section>
    </div>
  );
}
