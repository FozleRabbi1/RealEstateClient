import { RiHomeLine } from "react-icons/ri";
import GrayButton from "../../../shared/Buttons/GrayButton/GrayButton";

const Process = () => {
    return (
        <div className="py-10 md:pb-32">
            <div className="flex flex-col justify-center items-center" >
                <GrayButton title="Our process" btnStyle="bg-gray-200 px-1 py-[3px] rounded-full" icon={RiHomeLine} iconStyle="bg-gray-400 text-white rounded-full text-xl p-[2px] mr-1" />
                <h2 className="text-center font-['Cera Pro'] text-[25px] md:text-[48px] font-medium leading-[60px] tracking-[-1.44px]  xl:w-[35%] my-1 md:my-2">
                    Find your dream house as easy as 1, 2, 3
                </h2>
                <p className="text-center font-['Cera Pro'] text-[16px] font-normal leading-[24px] tracking-[-0.48px]  xl:w-[35%]">
                    Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus. Non a massa maecenas massa.
                </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-10 mt-10 lg:mt-14 ">
                <div className=" ">
                    <div className="collapse collapse-plus  mb-3 bg-white border-black rounded-lg px-0 ">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title text-md font-semibold">1. Search for your favorite   house in your location</div>
                        <div className="collapse-content opacity-70  font-[500]">
                            <p>Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people</p>
                        </div>
                    </div>

                    <div className="collapse collapse-plus mb-3 bg-white border-black rounded-lg">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-md font-semibold">2. Make a visit appointment with one of our agents</div>
                        <div className="collapse-content opacity-70  font-[500]">
                            <p >This is the second  accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-plus mb-3 bg-white border-black rounded-lg">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-md font-semibold">3. Get your dream house in a month, or less</div>
                        <div className="collapse-content opacity-70  font-[500]">
                            <p>This is the second  accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-plus mb-3 bg-white border-black rounded-lg">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-md font-semibold">4. Get your dream house in a month, or less</div>
                        <div className="collapse-content opacity-70  font-[500]">
                            <p>This is the second  accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-plus mb-3 bg-white border-black rounded-lg">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-md font-semibold">5. Get your dream house in a month, or less</div>
                        <div className="collapse-content opacity-70  font-[500]">
                            <p>This is the second  accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes.</p>
                        </div>
                    </div>

                    

                </div>


                <div className="w-full">
                    <img className="w-full" src="https://i.ibb.co/Vjr993Y/Group-1000008181.png" alt="" />
                </div>
            </div>

        </div>
    );
};

export default Process;