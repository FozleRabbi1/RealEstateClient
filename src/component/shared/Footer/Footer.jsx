import Button from "../Buttons/Button/Button";
import { FaCircleArrowRight } from "react-icons/fa6";
import "./Footer.css"
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { TiSocialLinkedin } from "react-icons/ti";
import { MdEmail } from "react-icons/md";
import { IoBag } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiSolidMessageRounded } from "react-icons/bi";

const Footer = () => {
  const spanStyle = "absolute top-0 left-0 h-full w-full border  rounded-md bg-aqua transition-all duration-300"
  const spanDivStyle = "layer relative w-full h-full transition-transform duration-300 transform group-hover:rotate-[-35deg] group-hover:skew-[20deg]"
  const iconStyle = "fab text-white text-[25px] leading-[55px] text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:translate-y-[-25px]"


  return (
    <div id="footer" className="bg-black rounded-xl">
      <div className="max-w-[1440px] mx-auto py-20 text-white ">

        <div className="grid grid-cols-2">
          <div className="w-[55%]">
            <h2 className="font-normal text-[36px] leading-[45px] tracking-[-1.08px]">
              Discover exclusive real estate opportunities
            </h2>

            <p>Lorem ipsum dolor sit amet consectetur. Egestas eu amet dictum tellus. Purus morbi lorem viverra cras.</p>

            <div className="flex mt-4 justify-between items-center bg-[#202127] rounded-full pl-5 pr-1 py-1">
              <h2>Enter your email address</h2>
              <Button title="Subscribe" btnStyle="bg-white text-black flex justify-center items-center flex-row-reverse py-1" iconStyle="bg-white text-red" icon={FaCircleArrowRight} />
            </div>

            <div className="flex ">
              <div className="icons mt-8 flex space-x-4 mr-5">
                <a href="#" className="relative w-[40px] h-[40px] group">
                  <div className={spanDivStyle}>
                    <span className={`${spanStyle} border-blue-600`}></span>
                    <span className={`${spanStyle} border-blue-600`}></span>
                    <span className={`${spanStyle} border-blue-600`}></span>
                    <span className={`${spanStyle} border-blue-600`}></span>
                    <FaFacebook className={`group-hover:translate-x-[-2px] text-blue-600 ${iconStyle}`} />
                  </div>
                </a>
              </div>

              <div className="icons mt-8 flex space-x-4 mr-5">
                <a href="#" className="relative w-[40px] h-[40px] group">
                  <div className={spanDivStyle}>
                    <span className={`${spanStyle} border-sky-600`}></span>
                    <span className={`${spanStyle} border-sky-600`}></span>
                    <span className={`${spanStyle} border-sky-600`}></span>
                    <span className={`${spanStyle} border-sky-600`}></span>
                    <FaTwitter className={`group-hover:translate-x-[-2px] text-sky-600 ${iconStyle}`} />
                  </div>
                </a>
              </div>

              <div className="icons mt-8 flex space-x-4 mr-5">
                <a href="#" className="relative w-[40px] h-[40px] group">
                  <div className={spanDivStyle}>
                    <span className={`${spanStyle} border-orange-600`}></span>
                    <span className={`${spanStyle} border-orange-600`}></span>
                    <span className={`${spanStyle} border-orange-600`}></span>
                    <span className={`${spanStyle} border-orange-600`}></span>
                    <CiInstagram className={`group-hover:translate-x-[-2px] text-orange-600 ${iconStyle}`} />
                  </div>
                </a>
              </div>
              <div className="icons mt-8 flex space-x-4">
                <a href="#" className="relative w-[40px] h-[40px] group">
                  <div className={spanDivStyle}>
                    <span className={`${spanStyle} border-blue-500`}></span>
                    <span className={`${spanStyle} border-blue-500`}></span>
                    <span className={`${spanStyle} border-blue-500`}></span>
                    <span className={`${spanStyle} border-blue-500`}></span>
                    <TiSocialLinkedin className={`group-hover:translate-x-[-2px] text-blue-500 ${iconStyle}`} />
                  </div>
                </a>
              </div>
            </div>

          </div>
          <div>
            <h2 className="font-medium text-[20px] leading-[25px] tracking-[-0.6px] mb-2">
              Main pages
            </h2>


            <div className="ulliStyle">
              <div className="grid grid-cols-3 ">
                <ul>
                  <li>Home </li>
                  <li>About</li>
                  <li>Properties</li>
                  <li>Location CMS</li>
                  <li>Property CSM</li>
                  <li>Type CMS Sales</li>
                  <li>Property single</li>
                </ul>
                <ul>
                  <li>Agents</li>
                  <li>Agents single</li>
                  <li>Blog</li>
                  <li>Blog post</li>
                  <li>Post a free property</li>
                  <li>Post a paid property</li>
                  <li>Contact</li>
                </ul>
                <ul>
                  <li>FAQs</li>
                  <li>Property Management</li>
                  <li>Owner Resource Page</li>
                  <li>Resident Resource Page</li>
                  <li>Resident Resource Page</li>
                </ul>
              </div>
            </div>
          </div>
        </div>


        <div className="mt-10   grid grid-cols-2">
          <div>
            <img src="https://i.ibb.co/S6QFhgf/logoText.png" alt="" />
            <h2>Powerd by DataSolve </h2>
          </div>

          <div>
            <h2 className=" font-medium text-[20px] leading-[25px] tracking-[-0.6px] mb-2">
              Contact us
            </h2>

            <div className="grid grid-cols-2 gap-y-3">
              <span className="flex">
                <MdEmail className="text-4xl text-white mr-3" />
                <div>
                  <h2>Email address</h2>
                  <h2>info@home.com</h2>
                </div>
              </span>
              <span className="flex">
                <IoBag className="text-4xl text-white mr-3" />
                <div>
                  <h2>Sales executives</h2>
                  <h2>sales@home.com</h2>
                </div>
              </span>
              <span className="flex">
                <BsFillTelephoneFill className="text-4xl text-white mr-3" />
                <div>
                  <h2>Phone number</h2>
                  <h2>(123) 456 - 7890</h2>
                </div>
              </span>
              <span className="flex">
                <BiSolidMessageRounded className="text-4xl text-white mr-3" />
                <div>
                  <h2>Help & support</h2>
                  <h2>support@home.com</h2>
                </div>
              </span>

            </div>

          </div>

        </div>
      </div>
    </div>




  );
};

export default Footer;