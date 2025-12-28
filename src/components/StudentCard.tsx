interface Student {
  image: string;
  name: string;
}
export default function StudentCard({ image, name }: Student) {
  return (
    <div>
      <div className="max-w-[320px] rounded-lg border bg-slate-100 p-[16px] shadow-sm md:max-w-[332px] md:p-[24px]">
        <section className="flex items-center justify-start gap-[2.5px] md:gap-[8px]">
          <img src={image} alt="location" />
          <div>
            <p className="text-[16px] font-[500px]">{name}</p>
            <p className="text-[12px] font-[400px] text-paragraph">
              17 Feb 2025
            </p>
          </div>
        </section>
        <img src="/student/stars.png" alt="star" className="py-[12px]" />
        <p className="mb-[8px] text-[14px] font-[400px] text-gray-600">
          360 Education made my study abroad journey seamless! From selecting
          the right university to securing my visa, their expert...
        </p>
        <p className="text-[14px] font-[500px] text-blue-500 underline">
          Read More...
        </p>
      </div>
    </div>
  );
}
