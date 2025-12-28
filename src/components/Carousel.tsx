import { useEffect, useState } from "react";

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  desktopItems?: number;
  mobileItems?: number;
}

export default function Carousel<T>({
  items,
  renderItem,
  desktopItems = 3,
  mobileItems = 1,
}: CarouselProps<T>) {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(mobileItems);

  useEffect(() => {
    const updateCards = () => {
      setVisibleCards(window.innerWidth >= 1024 ? desktopItems : mobileItems);
    };

    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, [desktopItems, mobileItems]);

  const prev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  const next = () => {
    setIndex((prev) => Math.min(prev + 1, items.length - visibleCards));
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-300"
          style={{
            transform: `translateX(-${index * (100 / visibleCards)}%)`,
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="w-full flex-shrink-0"
              style={{ width: `${100 / visibleCards}%` }}
            >
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <button
          onClick={prev}
          disabled={index === 0}
          className="rounded-md border px-4 py-2 disabled:opacity-40"
        >
          ←
        </button>
        <button
          onClick={next}
          disabled={index >= items.length - visibleCards}
          className="rounded-md border px-4 py-2 disabled:opacity-40"
        >
          →
        </button>
      </div>
    </div>
  );
}
