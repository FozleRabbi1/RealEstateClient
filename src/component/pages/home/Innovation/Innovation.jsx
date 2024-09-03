import { FaBabyCarriage, FaCar } from "react-icons/fa";
import GrayButton from "../../../shared/GrayButton/GrayButton";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { RiFile3Line, RiSearchFill } from "react-icons/ri";
import { IoBedSharp } from "react-icons/io5";


const Innovation = () => {
    return (
        <div className="flex flex-col xl:flex-row gap-10 items-center py-10 xl:pb-40 " >

            <div className=" w-full">
                <GrayButton title="Why us?" btnStyle="bg-gray-200 px-1 py-[3px] rounded-full" icon={RiSearchFill} iconStyle="bg-gray-400 text-white rounded-full text-xl p-[2px] mr-1" />
                <h2 className="font-['Cera Pro'] text-[48px] font-medium leading-[60px] tracking-[-1.44px] xl:w-[60%] py-3">
                    Innovation defines our real estate
                </h2>
                <p className="w-[60%] text-sm">Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus. Non a massa.</p>

                <ul className="mt-5  ">
                    <li className="flex items-center" > <IoIosCheckmarkCircle className="mr-1" /> Lorem ipsum, dolor sit amet consectetur</li>
                    <li className="flex items-center" > <IoIosCheckmarkCircle className="mr-1" /> Lorem ipsum, dolor sit amet consectetur</li>
                    <li className="flex items-center" > <IoIosCheckmarkCircle className="mr-1" /> Lorem ipsum, dolor sit amet consectetur</li>
                    <li className="flex items-center" > <IoIosCheckmarkCircle className="mr-1" /> Lorem ipsum, dolor sit amet consectetur</li>
                </ul>

            </div>

            <div className="w-[90%] xl:w-full lg:relative">
                <img className="w-full " src="https://i.ibb.co/VJghgcK/Group-1000008076.png" alt="" />

                <div className="flex flex-wrap justify-between md:justify-evenly  mt-5 lg:mt-0 gap-1">
                    <GrayButton title="2 bathrooms" btnStyle="bg-white w-[155px] md:w-auto px-4 py-4 rounded lg:absolute lg:top-[25%] lg:-left-10 " icon={FaBabyCarriage} iconStyle="bg-gray-400 text-white rounded-full text-xl p-[2px] mr-1" />
                    <GrayButton title="2,553 sqtf" btnStyle="bg-white w-[155px] md:w-auto px-4 py-4 rounded lg:absolute lg:top-[15%] lg:-right-10 " icon={FaCar} iconStyle="bg-gray-400 text-white rounded-full text-xl p-[2px] mr-1" />
                    <GrayButton title="4 Parking zones" btnStyle="bg-white w-[155px] md:w-auto px-4 py-4 rounded lg:absolute lg:bottom-[25%] lg:left-[10%] " icon={IoBedSharp} iconStyle="bg-gray-400 text-white rounded-full text-xl p-[2px] mr-1" />
                    <GrayButton title="4 bedrooms" btnStyle="bg-white w-[155px] md:w-auto px-4 py-4 rounded lg:absolute lg:bottom-[10%] lg:right-[10%]  " icon={RiFile3Line} iconStyle="bg-gray-400 text-white rounded-full text-xl p-[2px] mr-1" />
                </div>

            </div>

        </div>
    );
};

export default Innovation;