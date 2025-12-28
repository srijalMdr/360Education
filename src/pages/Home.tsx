import NavBar from "../components/navbar/NavBar";
import About from "./About";
import CareerCounseling from "./CareerCounseling";
import Events from "./Events";
import Explore from "./Explore";
import Form from "./Form";
import Hero from "./Hero";
import Legacy from "./Legacy";
import Partner from "./Partner";
import StudentSuccessStories from "./StudentSuccessStories";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Events />
      <Form />
      <Explore />
      <Legacy />
      <CareerCounseling />
      <Partner />
      <StudentSuccessStories />
      <About />
    </div>
  );
}
