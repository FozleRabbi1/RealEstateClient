
import GrayButton from "../../../shared/GrayButton/GrayButton";
import { TbMessageCircleFilled } from "react-icons/tb";

const Testimonials = () => {
    return (
        <div className="py-10 md:pb-32">
            
            <div className="flex flex-col justify-center items-center" >
                <GrayButton title="Our process" btnStyle="bg-gray-200 px-1 py-[3px] rounded-full" icon={TbMessageCircleFilled  } iconStyle="bg-gray-400 text-white rounded-full text-xl p-[2px] mr-1" />
                <h2 className="text-center font-['Cera Pro'] text-[25px] md:text-[48px] font-medium leading-[60px] tracking-[-1.44px]  xl:w-[35%] my-1 md:my-2">
                    Find your dream house as easy as 1, 2, 3
                </h2>

                <p className="text-center font-['Cera Pro'] text-[16px] font-normal leading-[24px] tracking-[-0.48px]  xl:w-[35%]">
                    Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus. Non a massa maecenas massa.
                </p>
            </div>
            
        </div>
    );
};

export default Testimonials;