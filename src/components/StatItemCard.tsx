interface StatItem {
  image: string;
  number: string;
  description: string;
}

interface StatItemCardProps {
  item: StatItem;
  index: number;
  total: number;
}

export default function StatItemCard({
  item,
  index,
  total,
}: StatItemCardProps) {
  const mobileBorder =
    index > 0 && index < total - 1 ? "border-y border-stone-400" : "";

  const desktopBorder =
    index !== 0
      ? "md:border-l md:border-stone-400 md:border-y-0"
      : "md:border-none";

  return (
    <div
      className={`flex items-center gap-[4.5px] py-[16px] md:px-5 md:first:px-0 md:last:pr-0 ${mobileBorder} ${desktopBorder}`}
    >
      <div className="flex w-[40px] flex-shrink-0 items-center justify-center md:h-12 md:w-12">
        <img
          src={item.image}
          alt={item.description}
          className="h-full w-full object-contain"
        />
      </div>

      <article className="flex flex-col md:w-[145px]">
        <h2 className="text-[18px] font-bold leading-tight text-primary">
          {item.number}
        </h2>
        <p className="text-[14px] font-medium leading-tight text-gray-800">
          {item.description}
        </p>
      </article>
    </div>
  );
}
