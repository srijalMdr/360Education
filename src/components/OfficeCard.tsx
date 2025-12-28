type OfficeInfo = {
  image: string;
  title: string;
  location: string;
  phones: string[];
  email: string;
  address: string;
};

export default function OfficeCard({
  image,
  title,
  location,
  phones,
  email,
  address,
}: OfficeInfo) {
  return (
    <div className="flex flex-col gap-4 rounded-xl p-2 text-white md:px-6">
      <div className="flex items-center gap-2">
        <img src={image} alt="visit" />
        <article>
          <p className="text-[12px] font-medium uppercase text-yellow-400">
            {title}
          </p>
          <p className="text-[16px] font-medium">{location}</p>
        </article>
      </div>

      <div className="flex items-start gap-2">
        <img src="/about/call.png" alt="call" />
        <article>
          <p className="text-[14px] font-[400px]">Call Us</p>
          <p className="text-[14px] font-bold">{phones.join(", ")}</p>
        </article>
      </div>

      <div className="flex items-start gap-2">
        <img src="/about/email.png" alt="email" />
        <article>
          <p className="text-[14px] font-[400px]">E-mail Us</p>
          <p className="text-[14px] font-bold">{email}</p>
        </article>
      </div>
      <div className="flex items-start gap-2">
        <img src="/about/visit.png" alt="visit" />
        <article>
          <p className="text-[14px] font-[400px]">Visit Us</p>
          <p className="text-[14px] font-bold">{address}</p>
        </article>
      </div>
    </div>
  );
}
