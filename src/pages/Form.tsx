import ContactForm from "../components/ContactForm";

export default function Form() {
  return (
    <div className="w-full bg-[url('/formbg.png')] bg-cover bg-no-repeat md:h-screen">
      <div className="mx-auto max-w-7xl px-4">
        <main className="flex flex-col-reverse gap-6 pt-[48px] md:flex-row md:items-start md:pt-[93px]">
          <aside className="relative md:w-1/2">
            <img
              src="form.png"
              alt="form"
              className="relative z-10 mx-auto mb-[85px] mt-[41px] md:mb-[0px] md:mt-[0px]"
            />
            <img
              src="/imgbg.png"
              className="absolute -left-20 bottom-10 z-0 md:-bottom-12 md:left-12"
            />
          </aside>

          <div className="md:w-1/2">
            <header className="text-white">
              <span className="mb-[8px] text-[24px] md:text-[32px]">
                <strong className="font-[700px] text-secondaryYellow">
                  Fill out the form{" "}
                </strong>
                <span className="font-[500px]">below</span>
              </span>
              <p className="mb-[28px] md:mb-[40px]">
                Our experts will connect with you to help you choose the right
                university, program, and scholarships.
              </p>
            </header>
            <ContactForm />
          </div>
        </main>
      </div>
    </div>
  );
}
