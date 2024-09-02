import { Outlet } from "react-router-dom";
import Nav from "../shared/nav/Nav";
import Footer from "../shared/Footer/Footer";
import { useEffect, useState } from "react";

const Main = () => {
  const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (

    <div className="bg-white text-black pt-5">
      <div className="w-[95%] mx-auto  ">
        <div className="sticky top-0  z-[50] ">
          <Nav scrollY={scrollY} />
        </div>
        <Outlet />
        <Footer />
      </div>
    </div>

  );
};

export default Main;