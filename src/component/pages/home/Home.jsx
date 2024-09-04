import AsSeenOn from "./AsSeenOn/AsSeenOn";
import HeroSection from "./HeroSection/HeroSection";
import Innovation from "./Innovation/Innovation";
import LandingBlog from "./LandingBlog/LandingBlog";
import Process from "./Process/Process";
import Testimonials from "./Testimonials/Testimonials";
import TheHeart from "./TheHeart/TheHeart";


const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className="max-w-[1440px] mx-auto">
        <AsSeenOn />
        <TheHeart />
        <Innovation />
        <Process />
        <Testimonials />
        <LandingBlog />
      </div>
    </div>
  );
};
export default Home;
