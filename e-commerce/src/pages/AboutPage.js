import AboutContent from "../components/About/AboutContent";
import AboutHeader from "../components/About/AboutHeader";
import AboutStats from "../components/About/AboutStats";
import { AboutTeam } from "../components/About/AboutTeam";
import { AboutVideo } from "../components/About/AboutVideo";
import AboutClients from "../components/About/AboutClients";
import AboutTestimonials from "../components/About/AboutTestimonials";

const AboutPage = () => {
  return (
    <>
      <div className="sm:w-[1000px] m-auto">
        <AboutHeader />
        <AboutContent />
        <AboutStats />
        <AboutVideo />
        <AboutTeam />
      </div>
      <AboutClients />
      <AboutTestimonials />
    </>
  );
};
export default AboutPage;
