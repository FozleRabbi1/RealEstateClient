import { FaArrowCircleRight } from "react-icons/fa";
import Button from "../../../shared/Button/Button";

const HeroSection = () => {

    // const handleButton = (i) =>{
    //     console.log(i)
    // }

    return (
        <div className="">

            <div className=" relative -mt-20">
                <img className="w-full  xl:h-[100vh]" src=" https://i.ibb.co/dBW4Kjv/hero-Image.png" alt="" />

                <div className="absolute top-[35%] md:top-[30%] lg:top-[15%] left-0  w-full grid grid-cols-6 px-5 lg:px-20">

                    <div className="col-span-6 md:col-span-3 lg:col-span-4 ">
                        <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-[25px] md:leading-[70px] xl:leading-[82.8px] w-full lg:pr-[10%]  text-white tracking-[1px] ">
                            Chicago’s Southside Property Management
                        </h2>
                    </div>

                    <div className="col-span-6 md:col-span-3 lg:col-span-2 md:ml-2 lg:ml-0 " >
                        <p className="text-base font-normal leading-4 md:leading-6 ">
                            Lorem ipsum dolor sit amet consectetur fermentum eget fringilla egestas a aliquam arcu arcu nunc pretium id semper ut volutpat. Id gravida aenean.
                        </p>
                        <Button title="Click Me" btnStyle="bg-[#990A05] text-white mt-3 flex justify-center items-center flex-row-reverse py-2"  icon={FaArrowCircleRight} />

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



                    </div>

                </div>
            </div>



        </div>
    );
};

export default HeroSection;
