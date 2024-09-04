import { FaCircleUser } from "react-icons/fa6";
import Button from "../../../shared/Buttons/Button/Button";
import { FaArrowCircleRight } from "react-icons/fa";
import GrayButton from "../../../shared/Buttons/GrayButton/GrayButton";

const TheHeart = () => {
    return (
        <div className="py-10 lg:py-40">

            <div className="flex flex-col xl:flex-row justify-center items-center gap-4 xl:gap-24">
                <img src="https://i.ibb.co/kJv0BJw/Group-1000008118.png" alt="" />

                <div className="" >                    
                    <GrayButton title="About us" btnStyle="bg-gray-200 px-1 py-[3px] rounded-full " icon={FaCircleUser} iconStyle="text-gray-400 bg-white rounded-full text-xl mr-1" />
                    <h2 className="font-['Cera Pro'] text-[25px] md:text-[30px] lg:text-[48px] font-medium leading-[60px] tracking-[-1.44px] lg:w-[60%] lg:my-3">
                        The heart of real estate innovation
                    </h2>
                    <p className="lg:w-[70%]">Lorem ipsum dolor sit amet consectetur. Gravida elementum dolor semper felis pulvinar feugiat risus adipiscing dictum. Ultricies nec elementum nisi ut. Cras diam odio sed auctor pellentesque. Sit nisl ipsum.</p>
                    <Button title="Click Me" btnStyle="bg-[#990A05] text-white mt-4 flex justify-center items-center flex-row-reverse py-2" icon={FaArrowCircleRight} />
                </div>
            </div>

        </div>
    );
};

export default TheHeart;