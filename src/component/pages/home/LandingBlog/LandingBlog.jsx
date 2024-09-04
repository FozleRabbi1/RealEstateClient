import { FaChevronRight } from "react-icons/fa";
import GrayButton from "../../../shared/Buttons/GrayButton/GrayButton";
import { HiMiniPencil } from "react-icons/hi2";
import ReadMoreButton from "../../../shared/Buttons/ReadMore/ReadMoreButton";
import { IoCalendarOutline } from "react-icons/io5";

const LandingBlog = () => {

    const blogList = [
        { id: 1, icon: "https://i.ibb.co/1TC1yGn/Frame-1000008163-1.png", mainLine: "Here’s how decorate your new home from scratch", image: "https://i.ibb.co/mNpb28b/Rectangle-2.png", articleTitle: "Resources", date: "Mar 30, 2025" },
        { id: 2, icon: "https://i.ibb.co/jhvqfbf/Frame-1000008163.png", mainLine: "Home buying basics: How many bedrooms and bathrooms?", image: "https://i.ibb.co/GcXGNFz/Mask-group-1.png", articleTitle: "News", date: "Mar 30, 2025" },
        { id: 3, icon: "https://i.ibb.co/p4sVRK9/Frame-1000008098.png", mainLine: "First-time homebuyer’s guide: Steps for beginners", image: "https://i.ibb.co/v4jbg0H/Mask-group.png", articleTitle: "Articles", date: "Mar 30, 2025" },
    ]

    return (
        <div className="mb-40">

            <div>
                <GrayButton title="Our blogss" btnStyle="bg-gray-200 px-1 pt-[3px] rounded-full" icon={HiMiniPencil} iconStyle="bg-gray-400 text-white rounded-full text-xl p-[2px] mr-1" />

                <div className="flex justify-between">
                    <h2 className=" text-[25px] md:text-[48px] font-medium leading-[60px] my-4">
                        Read our latest blog
                    </h2>
                    <ReadMoreButton title="Browse all articles" icon={FaChevronRight} iconStyle="ml-2" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                    {blogList?.map((item) => (
                        <div key={item.id} className="relative">
                            <img className=" rounded-3xl h-[400px] w-full object-cover" src={item.image} alt="" />
                            <div className="absolute top-5 left-5 flex items-center bg-white rounded-full px-2 py-1" >
                                <img className="size-4 mr-2" src={item.icon} alt="" />
                                <h2>{item.articleTitle}</h2>
                            </div>

                            <div>
                                <h2 className="text-[24px] font-medium leading-[30px] my-2">
                                    {item.mainLine}
                                </h2>

                                <span className="flex justify-between items-center mt-4">
                                    <h2 className="flex items-center text-gray-400" > <IoCalendarOutline className="mr-2" />
                                        {item.date}</h2>
                                    <ReadMoreButton title="Read More" icon={FaChevronRight} iconStyle="ml-2" />
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LandingBlog;