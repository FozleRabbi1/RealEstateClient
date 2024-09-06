import { Outlet } from "react-router-dom";
import Nav from "../shared/nav/Nav";
import Footer from "../shared/Footer/Footer";
import { useEffect, useRef, useState } from "react";

const Main = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [delayedPosition, setDelayedPosition] = useState({ x: 0, y: 0 });
  const [delayedPosition2, setDelayedPosition2] = useState({ x: 0, y: 0 });
  const requestRef = useRef();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  useEffect(() => {

    const updateCursor = () => {
      const delayCursor = (current, target, delay) => current + (target - current) * delay;
      setDelayedPosition(prev => ({
        x: delayCursor(prev.x, mousePosition.x, 0.1),
        y: delayCursor(prev.y, mousePosition.y, 0.1),
      }));

      setDelayedPosition2(prev => ({
        x: delayCursor(prev.x, mousePosition.x, 0.5),
        y: delayCursor(prev.y, mousePosition.y, 0.5),
      }));
      requestRef.current = requestAnimationFrame(updateCursor);
    };
    requestRef.current = requestAnimationFrame(updateCursor);
    return () => cancelAnimationFrame(requestRef.current);
  }, [mousePosition]);




  return (

    <div className="bg-slate-50 text-black pt-5">
      <div className="w-[95%] mx-auto">
        <div className="sticky top-0  z-[50] ">
          <Nav scrollY={scrollY} />
        </div>
        <Outlet />
        <Footer />


        <div className="hidden lg:block">
          {/* ============= Same Code ================== */}
          {/* <div
            style={{
              position: "fixed",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "aqua",
              pointerEvents: "none",
              zIndex: 99999999,
              transform: "translate(-50%, -50%)",
              left: `${delayedPosition.x}px`,
              top: `${delayedPosition.y}px`,
              mixBlendMode: "difference"
            }}
            className="custom-cursor"
          ></div>
          <div
            style={{
              position: "fixed",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "1px solid aqua",
              backgroundColor: "transparent",
              pointerEvents: "none",
              zIndex: 9999,
              transform: "translate(-50%, -50%)",
              left: `${delayedPosition2.x}px`,
              top: `${delayedPosition2.y}px`,
              mixBlendMode: "difference"
            }}
            className="custom-cursor-ring"
          ></div> */}


          {/* ============= Same Code === Just change the color ================== */}
          <div
            style={{
              position: "fixed",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "white",
              pointerEvents: "none",
              zIndex: 99999999,
              transform: "translate(-50%, -50%)",
              left: `${delayedPosition.x}px`,
              top: `${delayedPosition.y}px`,
              mixBlendMode: "difference"
            }}
            className="custom-cursor"
          ></div>

          <div
            style={{
              position: "fixed",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "1px solid #ffffff",
              backgroundColor: "white",
              pointerEvents: "none",
              zIndex: 9999,
              transform: "translate(-50%, -50%)",
              left: `${delayedPosition2.x}px`,
              top: `${delayedPosition2.y}px`,
              mixBlendMode: "difference"
            }}
            className="custom-cursor-ring"
          ></div>




        </div>
      </div>
    </div>

  );
};

export default Main;