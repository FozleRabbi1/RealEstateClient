import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { useRef } from "react";
import {  IoMdArrowForward } from "react-icons/io";


const AsSeenOn = () => {
    const swiperRef = useRef(null);

    const carasodDatas = [
        { id: 1, title: "“If you want convenience, call Tina”", secondTitle: "Chicago, IL", description: "Lorem ipsum dolor sit amet consectetur ultrices rutrum fusce dui nisl neque placerat velit.", image: "https://i.ibb.co/262Cdzy/brixagency-1.png" },
        { id: 2, title: "“If you want convenience, call Tina”", secondTitle: "Chicago, IL", description: "Lorem ipsum dolor sit amet consectetur ultrices rutrum fusce dui nisl neque placerat velit.", image: "https://i.ibb.co/262Cdzy/brixagency-1.png" },
    ];


    return (
        <div className="mt-[80px] w-full ">
            <h2 className="text-center text-[#A4A6B0] text-lg font-normal leading-[22.5px]">
                As seen on:
            </h2>

            <div className="flex justify-around mt-6">
                <img src="https://i.ibb.co/ZggGFc4/Application.png" alt="" />
                <img src="https://i.ibb.co/PTYs9Tk/A-Logo-Wrapper.png" alt="" />
                <img src="https://i.ibb.co/ZggGFc4/Application.png" alt="" />
                <img src="https://i.ibb.co/nLqNzQ3/Enterprise-2x.png" alt="" />
                <img src="https://i.ibb.co/5FnrgSh/Agency.png" alt="" />
                <img src="https://i.ibb.co/Qd9dXbZ/Company.png" alt="" />
            </div>


            <div className="flex mt-6 py-10">

                <div className="w-1/2 grid grid-cols-2">
                    <div>
                        <h2>Our Project</h2>
                        <h2>10k <span>+</span></h2>
                        <p>Lorem ipsum dolor sit amet consectetur fermentum</p>
                    </div>
                    <div>
                        <h2>Our Customer</h2>
                        <h2>200 <span>k</span> </h2>
                        <p>Lorem ipsum dolor sit amet consectetur fermentum</p>
                    </div>
                </div>


                <div className="border w-1/2 relative bg-red-100 flex justify-center items-center">

                    <div className="overflow-hidden flex justify-center items-center ">
                        <div className="w-[90%] md:w-[90%]">
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={false}
                                speed={2500}
                                loop={true}
                                modules={[Navigation]}
                                className="mySwiper bg-green-100"
                                onSwiper={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                            >
                                {carasodDatas.map((item) => (
                                    <SwiperSlide
                                        key={item.id}
                                        className="overflow-hidden flex justify-center items-center text-center"
                                    >
                                        <div>
                                            <h2 className=" text-black font-semibold ">
                                                {item.title}
                                            </h2>
                                            <div>
                                                <p className="text-xl leading-8 italic text-black">
                                                    {item.description}
                                                </p>
                                            </div>

                                            <h2 className="mt-1 text-sm text-gray-500">
                                                {item.role}
                                            </h2>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>


                    <button
                        onClick={() => swiperRef.current.slidePrev()}
                        className="size-12 border border-black duration-300 flex justify-center items-center rounded-full text-xl bg-white hover:bg-black text-black hover:text-white absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 z-[100]"
                    >
                        <IoMdArrowForward />
                    </button>


                </div>

            </div>



        </div>
    );
};

export default AsSeenOn;


// https://i.ibb.co/ZggGFc4/Application.png
// https://i.ibb.co/PTYs9Tk/A-Logo-Wrapper.png
// https://i.ibb.co/ZggGFc4/Application.png
// https://i.ibb.co/nLqNzQ3/Enterprise-2x.png
// https://i.ibb.co/5FnrgSh/Agency.png
// https://i.ibb.co/Qd9dXbZ/Company.png
