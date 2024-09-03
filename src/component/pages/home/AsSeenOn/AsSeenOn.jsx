import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import CountUp from 'react-countup';
import { useInView } from "react-intersection-observer";

const AsSeenOn = () => {
    const imageParentClass = "flex justify-center items-center";
    const imageChildClass = "w-[110px] h-[22px]";
    const swiperRef = useRef(null);
    const carasodDatas = [
        { id: 1, title: "“If you want convenience, call Tina”", secondTitle: "Chicago, IL", description: "Lorem ipsum dolor sit amet consectetur ultrices rutrum fusce dui nisl neque placerat velit.", image: "https://i.ibb.co/262Cdzy/brixagency-1.png" },
        { id: 2, title: "“If you want convenience, call Tina”", secondTitle: "Chicago, IL", description: "Lorem ipsum dolor sit amet consectetur ultrices rutrum fusce dui nisl neque placerat velit.", image: "https://i.ibb.co/262Cdzy/brixagency-1.png" },
    ];
    
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div className="mt-[80px]">
            <h2 className="text-center text-[#A4A6B0] text-lg font-normal leading-[22.5px]">
                As seen on:
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4 mt-6 lg:mx-20">
                <div className={imageParentClass}>
                    <img className={imageChildClass} src="https://i.ibb.co/Qd9dXbZ/Company.png" alt="" />
                </div>
                <div className={imageParentClass}>
                    <img className={imageChildClass} src="https://i.ibb.co/5FnrgSh/Agency.png" alt="" />
                </div>
                <div className={imageParentClass}>
                    <img className={imageChildClass} src="https://i.ibb.co/ZggGFc4/Application.png" alt="" />
                </div>
                <div className={imageParentClass}>
                    <img className={imageChildClass} src="https://i.ibb.co/PTYs9Tk/A-Logo-Wrapper.png" alt="" />
                </div>
                <div className={imageParentClass}>
                    <img className={imageChildClass} src="https://i.ibb.co/ZggGFc4/Application.png" alt="" />
                </div>
                <div className={imageParentClass}>
                    <img className={imageChildClass} src="https://i.ibb.co/nLqNzQ3/Enterprise-2x.png" alt="" />
                </div>
            </div>

            <div className="flex mt-6 py-10 flex-col lg:flex-row">

                <div className=" lg:w-1/2 grid grid-cols-2">
                    <div>
                        <h2 className="font-[500] text-[18px] leading-[150%]">
                            Our Project
                        </h2>
                        <h2 className="font-bold text-[50px] lg:text-[72px] leading-[115%]">
                            <div ref={ref}>
                                {inView && (
                                    <CountUp start={0} end={10} duration={2} />
                                )} k
                                <span className="font-bold text-[40px] lg:text-[60px] text-gray-400">+</span>
                            </div>
                        </h2>
                        <p className="text-[16px] w-[98%] lg:w-[70%]">Lorem ipsum dolor sit amet consectetur fermentum</p>
                    </div>
                    <div>
                        <h2 className="font-[500] text-[18px] leading-[150%]">Our Customer</h2>
                        <h2 className="font-bold text-[50px] lg:text-[72px] leading-[115%]">
                            <div ref={ref}>
                                {inView && (
                                    <CountUp start={0} end={200} duration={2} />
                                )}
                                <span className="font-bold text-[40px] lg:text-[60px] text-gray-400">K</span>
                            </div>
                        </h2>
                        <p className="text-[16px] w-[98%] lg:w-[70%]">Lorem ipsum dolor sit amet consectetur fermentum</p>
                    </div>
                </div>

                <div className="mx-5 lg:w-1/2 relative bg-white flex justify-center items-center rounded-xl py-2 md:py-10 mt-5 lg:mt-0">
                    <div className="overflow-hidden flex justify-center items-center">
                        <div className="w-[90%] md:w-[90%]">
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                pagination={{ clickable: true }}
                                navigation={false}
                                speed={2500}
                                loop={true}
                                modules={[Navigation]}
                                className="mySwiper"
                                onSwiper={(swiper) => { swiperRef.current = swiper; }}
                            >
                                {carasodDatas.map((item) => (
                                    <SwiperSlide
                                        key={item.id}
                                        className="overflow-hidden flex justify-center items-center text-center"
                                    >
                                        <div className="flex justify-center items-center" >
                                            <img className=" w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full" src="https://i.ibb.co/262Cdzy/brixagency-1.png" alt="" />
                                            <div className="ml-2 md:ml-10">
                                                <h2 className="text-black font-semibold text-left text-[14px] md:text-[16px]">
                                                    {item.title}
                                                </h2>
                                                <div>
                                                    <p className="text-lg text-black text-left text-[14px] md:text-[16px] leading-4">
                                                        {item.description}
                                                    </p>
                                                </div>
                                                <h2 className="mt-1 text-sm text-gray-500 text-left">
                                                    {item.secondTitle}
                                                </h2>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>

                    <button
                        onClick={() => swiperRef.current.slidePrev()}
                        className="size-8 md:size-12 border border-black duration-300 flex justify-center items-center rounded-full text-xl bg-white hover:bg-black text-black hover:text-white absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 z-[10]"
                    >
                        <IoMdArrowForward />
                    </button>

                    <button
                        onClick={() => swiperRef.current.slideNext()}
                        className="size-8 md:size-12 border border-black duration-300 flex justify-center items-center rounded-full text-xl bg-white hover:bg-black text-black hover:text-white absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 z-[10]"
                    >
                        <IoMdArrowBack />
                    </button>


                </div>
            </div>
        </div>
    );
};

export default AsSeenOn;
