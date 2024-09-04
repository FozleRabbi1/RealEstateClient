
import { useRef } from "react";
import GrayButton from "../../../shared/Buttons/GrayButton/GrayButton";
import { TbMessageCircleFilled } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import Button from "../../../shared/Buttons/Button/Button";
import { FaArrowCircleRight } from "react-icons/fa";
import { MdChevronRight } from "react-icons/md";

const Testimonials = () => {

    const swiperRef = useRef(null);
    const carasodDatas = [
        { id: 1, name: "Andy Smith", title: "Navigating properties made easy, unbeatable USA options.", secondTitle: "Chicago, IL", description: "Sem egestas elit pretium turpis eu quis tristique phasellus pellentesque elementum pharetra iaculis metus pretium.", image: "https://i.ibb.co/262Cdzy/brixagency-1.png" },
        { id: 2, name: "Andy Smith", title: "Navigating properties made easy, unbeatable USA options.", secondTitle: "Chicago, IL", description: "Sem egestas elit pretium turpis eu quis tristique phasellus pellentesque elementum pharetra iaculis metus pretium.", image: "https://i.ibb.co/262Cdzy/brixagency-1.png" },
    ];

    return (
        <div className="py-10 md:pb-32">

            <div className="flex flex-col justify-center items-center" >
                <GrayButton title="Testimonials" btnStyle="bg-gray-200 px-1 py-[3px] rounded-full" icon={TbMessageCircleFilled} iconStyle="bg-gray-400 text-white rounded-full text-xl p-[2px] mr-1" />
                <h2 className="text-center font-['Cera Pro'] text-[25px] md:text-[48px] font-medium leading-[60px] tracking-[-1.44px]  xl:w-[35%] my-1 md:my-2">
                    Look at what people say about us
                </h2>

                <p className="text-center font-['Cera Pro'] text-[16px] font-normal leading-[24px] tracking-[-0.48px]  xl:w-[35%]">
                    Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus. Non a massa maecenas massa.
                </p>
            </div>

            <div className="flex justify-end mx-auto lg:w-2/3 mt-5 xl:-mt-4 mb-4">
                <button
                    onClick={() => swiperRef.current.slideNext()}
                    className="size-8 md:size-12 border border-black duration-300 flex justify-center items-center rounded-full text-xl bg-white hover:bg-black text-black hover:text-white  z-[10]"
                >
                    <IoMdArrowBack />
                </button>

                <button
                    onClick={() => swiperRef.current.slidePrev()}
                    className="size-8 md:size-12 border border-black duration-300 flex justify-center items-center rounded-full text-xl bg-white hover:bg-black text-black hover:text-white  z-[10] ml-5"
                >
                    <IoMdArrowForward />
                </button>
            </div>

            <div className="mx-auto lg:w-2/3  bg-white flex justify-center items-center rounded-xl py-2 xl:py-10 mt-5 lg:mt-0">
                <div className="overflow-hidden flex justify-center items-center ">
                    <div className="w-[90%] md:w-[100%] mx-auto lg:p-10">
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
                                    <div className="flex justify-center items-center xl:gap-16 xl:px-10" >
                                        <img className=" w-[60px] h-[60px] md:w-[120px] md:h-[120px] rounded-full ml-2 lg:ml-0" src="https://i.ibb.co/262Cdzy/brixagency-1.png" alt="" />

                                        <div className="ml-2 md:ml-10">
                                            <h2 className="text-black font-semibold text-left text-[14px] md:text-[30px]">
                                                {item.title}
                                            </h2>
                                            <div>
                                                <p className="text-lg text-black text-left text-[14px] md:text-[16px] leading-4 lg:py-5">
                                                    {item.description}
                                                </p>
                                            </div>
                                            <h2 className="text-left font-semibold mt-2 md:mt-0 ">{item.name}</h2>
                                            <h2 className="mt-1 text-lg text-gray-500 text-left">
                                                {item.secondTitle}
                                            </h2>
                                        </div>

                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>




            </div>

            <div className="flex justify-center items-center mt-5 md:mt-10">
                <Button title="CTA 1" btnStyle="bg-[#990A05] text-white mt-4 flex justify-center items-center flex-row-reverse py-2" icon={FaArrowCircleRight} />

                <Button title="CTA 1" btnStyle=" text-black mt-4 flex justify-center items-center flex-row-reverse py-2 font-semibold " icon={MdChevronRight } />
            </div>

        </div>
    );
};

export default Testimonials;