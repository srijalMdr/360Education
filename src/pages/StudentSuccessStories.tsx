import Carousel from "../components/Carousel";
import StudentCard from "../components/StudentCard";

const STUDENTS = [
  {
    image: "/student/sailesh.png",
    name: "Sailesh Upreti",
  },
  {
    image: "/student/aarju.png",
    name: "Aarju Regmi",
  },
  {
    image: "/student/sakar.png",
    name: "Sakar Basnet",
  },
];

export default function StudentSuccessStories() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-[80px] md:py-[96px]" id="blogs">
      <header className="mb-[24px] md:text-center">
        <span className="mb-[8px] text-[24px] font-[400px] md:mb-[12px] md:text-[32px]">
          <span>Student Success Stories: </span>
          <strong className="font-[700px] text-primary">
            Hear from Our Achievers
          </strong>
        </span>
        <p className="text-paragraph">
          We help students make informed decisions and achieve their academic
          dreams with confidence.
        </p>
      </header>
      <img src="/reviewmob.png" alt="reviewmob" className="mx-auto md:hidden" />
      <div className="flex items-center gap-[51px]">
        <img src="/reviewlap.png" alt="reviewlap" className="hidden md:block" />
        <section className="mt-[36px] md:mt-[48px]">
          <Carousel
            items={STUDENTS}
            desktopItems={3}
            mobileItems={1}
            renderItem={(student) => <StudentCard {...student} />}
          />
        </section>
      </div>
    </div>
  );
}
