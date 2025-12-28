interface FooterColumnProps {
  title: string;
  items: string[];
  highlightItem?: string;
}

export default function FooterColumn({
  title,
  items,
  highlightItem,
}: FooterColumnProps) {
  return (
    <div>
      <div className="relative mb-4 inline-block">
        <h4 className="text-[16px] font-semibold uppercase text-white">
          {title}
        </h4>

        <span className="absolute -bottom-1 left-0 h-[3px] w-11 bg-secondary"></span>
      </div>

      <ul className="space-y-2 text-[16px] text-white/90">
        {items.map((item) => (
          <li
            key={item}
            className={`cursor-pointer transition ${
              item === highlightItem
                ? "text-secondaryYellow"
                : "hover:text-secondary"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
