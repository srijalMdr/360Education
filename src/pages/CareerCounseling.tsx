export default function CareerCounseling() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-[80px] md:py-[96px]">
      <header className="mb-[32px] md:mb-[69px] md:text-center">
        <span className="mb-[8px] text-[24px] font-[400px] md:mb-[12px] md:text-[32px]">
          <strong className="font-[700px] text-primary">
            Personalized Solutions{" "}
          </strong>
          <span>for Your Global Education </span>
        </span>
        <p className="text-paragraph">
          Turn your international education dreams into reality.
        </p>
      </header>
      <div className="md:hidden">
        <img
          src="/counsellingtop.png"
          alt="countop"
          className="mb-[12px] w-full"
        />
        <img
          src="/counsellingsmall.png"
          alt="counsmall"
          className="mb-[32px] w-full"
        />
      </div>
      <main className="grid md:grid-cols-2">
        <img src="/counselling.png" alt="coun" className="hidden md:block" />
        <aside>
          <div className="mb-[8px] flex items-center gap-2 md:flex-col md:items-start">
            <img src="/counicon.png" alt="counicon" />
            <h1 className="text-[18px] font-bold md:text-[22px]">
              Career Counseling
            </h1>
          </div>
          <p className="mb-[16px] text-[16px] font-[400px] text-paragraph">
            Making the right career choice is crucial for long-term success. Our
            expert career counseling services provide personalized guidance to
            help you identify the best academic programs, universities, and
            career paths based on your strengths, interests, and global
            opportunities. Whether you're exploring options or need strategic
            advice, we ensure you make informed decisions that align with your
            aspirations.
          </p>
          <ul className="mb-[24px] list-disc space-y-2 pl-5 marker:text-primary">
            <li>Identify strengths and choose the right career path.</li>
            <li>Find the best-fit course and institution globally.</li>
            <li>Stay informed about future career opportunities.</li>
            <li>Explore financial aid and scholarship options.</li>
            <li>Improve your admission chances with expert guidance.</li>
          </ul>
          <button className="mb-[48px] h-[42px] w-[282px] rounded-md border-b-2 border-r-2 border-secondaryYellow bg-primary px-6 py-2 text-[14px] font-medium text-white md:mb-36">
            View Career Counseling in Detail
          </button>
        </aside>
      </main>
    </div>
  );
}
