import { FaArrowCircleRight } from "react-icons/fa";
import Button from "../../../shared/Button/Button";

const HeroSection = () => {


    return (
        <div className="">

            <div className="relative -mt-20">
                <img className="w-full h-[50vh] md:h-auto xl:h-[100vh]" src="https://i.ibb.co/dBW4Kjv/hero-Image.png" alt="" />

                <div className="absolute max-w-[1440px] top-[35%] md:top-[30%] lg:top-[15%] left-1/2 transform -translate-x-1/2 w-full px-5  ">

                    <div className="flex flex-col lg:flex-row lg:gap-8">

                        <div className="w-[100%] lg:w-[50%] ">
                            <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-[25px] md:leading-[70px] xl:leading-[82.8px] w-full text-white tracking-[1px]">
                                Chicago’s Southside Property Management
                            </h2>
                        </div>

                        <div className="w-[100%] lg:w-[50%]">
                            <div className="lg:ml-10">
                                <p className="text-base font-normal leading-4 md:leading-6">
                                    Lorem ipsum dolor sit amet consectetur fermentum eget fringilla egestas a aliquam arcu arcu nunc pretium id semper ut volutpat. Id gravida aenean.
                                    Lorem ipsum dolor sit amet consectetur fermentum eget fringilla egestas a aliquam arcu arcu nunc pretium id semper ut volutpat. Id gravida aenean.
                                </p>
                                <Button title="Click Me" btnStyle="bg-[#990A05] text-white mt-4 flex justify-center items-center flex-row-reverse py-2" icon={FaArrowCircleRight} />
                            </div>
                        </div>

                    </div>



                </div>
            </div>




        </div>
    );
};

export default HeroSection;






{/* <Button
                            title="Submit"
                            btnStyle="bg-blue-500 text-white hover:bg-blue-600"
                            onClick={() => handleButton("")}
                        /> */}

{/* <Button
                            title="Delete"
                            btnStyle="bg-red-500 text-white hover:bg-red-600"
                            onClick={handleDelete}
                            type="button"
                            disabled={isDisabled}
                        /> */}