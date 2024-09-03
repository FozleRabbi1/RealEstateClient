import GrayButton from "../../../shared/GrayButton/GrayButton";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { RiSearchFill } from "react-icons/ri";


const Innovation = () => {
    return (
        <div className="flex flex-col xl:flex-row gap-10 items-center py-10 xl:pb-40 " >

            <div className=" w-full">
                <GrayButton title="Why us?" btnStyle="bg-gray-200 px-1 py-[3px]" icon={RiSearchFill } iconStyle="bg-gray-400 text-white rounded-full text-xl p-[2px] mr-1" />
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

            <img className="w-full" src="https://i.ibb.co/VJghgcK/Group-1000008076.png" alt="" />

        </div>
    );
};

export default Innovation;