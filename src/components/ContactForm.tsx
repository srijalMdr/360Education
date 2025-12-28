export default function ContactForm() {
  return (
    <section className="w-full rounded-xl">
      <form className="space-y-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white">Full Name</label>
            <div className="relative">
              <img
                src="/icons/user.png"
                alt="full name"
                className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2"
              />
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-lg px-4 py-3 pl-11 text-sm outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white">
              Phone Number
            </label>
            <div className="relative">
              <img
                src="/icons/phone.png"
                alt="phone"
                className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2"
              />
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full rounded-lg px-4 py-3 pl-11 text-sm outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white">
              Email Address
            </label>
            <div className="relative">
              <img
                src="/icons/mail.png"
                alt="email"
                className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2"
              />
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full rounded-lg px-4 py-3 pl-11 text-sm outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white">
              Desired Degree
            </label>
            <div className="relative">
              <img
                src="/icons/degree.png"
                alt="degree"
                className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2"
              />
              <select className="w-full appearance-none rounded-lg px-4 py-3 pl-11 text-sm outline-none">
                <option>Select the degree</option>
                <option>Bachelor</option>
                <option>Master</option>
                <option>PhD</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white">
              Desired Faculty
            </label>
            <div className="relative">
              <img
                src="/icons/faculty.png"
                alt="faculty"
                className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2"
              />
              <select className="w-full appearance-none rounded-lg px-4 py-3 pl-11 text-sm outline-none">
                <option>Enter your name of the faculty</option>
                <option>Science</option>
                <option>Management</option>
                <option>IT</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white">
              Desired Destination
            </label>
            <div className="relative">
              <img
                src="/icons/location.png"
                alt="destination"
                className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2"
              />
              <select className="w-full appearance-none rounded-lg px-4 py-3 pl-11 text-sm outline-none">
                <option>Select the destination</option>
                <option>USA</option>
                <option>UK</option>
                <option>Australia</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-white">
            Test Preparation
          </label>
          <div className="relative">
            <img
              src="/icons/test.png"
              alt="test preparation"
              className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2"
            />
            <select className="w-full appearance-none rounded-lg px-4 py-3 pl-11 text-sm outline-none">
              <option>Select the test preparation</option>
              <option>IELTS</option>
              <option>PTE</option>
              <option>TOEFL</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-white">Message</label>
          <textarea
            rows={4}
            placeholder="Enter your queries/message"
            className="w-full resize-none rounded-lg px-4 py-3 text-sm outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg border-b-2 border-r-2 border-secondary bg-secondaryYellow py-3 text-sm font-semibold text-black transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
