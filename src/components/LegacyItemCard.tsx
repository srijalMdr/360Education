interface LegacyItem {
  image: string;
  number: string;
  description: string;
}

interface LegacyItemCardProps {
  item: LegacyItem;
  index: number;
  total: number;
}

export default function LegacyItemCard({
  item,
  //   index,
  //   total,
}: LegacyItemCardProps) {
  return (
    <div className="py-[12px] md:px-6 md:py-[16px]">
      <article className="mb-[4.5px] flex items-center gap-[8px]">
        <img
          src={item.image}
          alt={item.description}
          className="w-[24px] md:w-[32px]"
        />
        <h2 className="text-[18px] font-bold text-primary">{item.number}</h2>
      </article>
      <p className="w-[150px] text-[14px] font-medium">{item.description}</p>
    </div>
  );
}
