/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import "./nav.css"

const Nav = ({ scrollY }) => {
  console.log(scrollY)
  return (
    <div className={`navbar   text-black lg:px-20  ${scrollY >= 100 ? "border-b" : "border-b-transparent"} duration-300`}>

      <div className="navbar-start flex items-center">
        <div className="dropdown xl:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-800 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
          >
            <li><a href="#">Property Management</a></li>
            <li>
              <a href="#">Parent</a>
              <ul className="p-2 bg-gray-700 rounded">
                <li><a href="#">Submenu 1</a></li>
                <li><a href="#">Submenu 2</a></li>
              </ul>
            </li>
            <li><a href="#">Item 3</a></li>
          </ul>
        </div>
        <Link to="/" > 
        <img className="w-[140px] h-[32px]  " src="https://i.ibb.co/S6QFhgf/logoText.png" alt="" />
         </Link>
      </div>


      <div className="navbar-center hidden xl:flex ">
        <ul className="menu menu-horizontal px-1">
          <li  className="text-[16px]">
            <details>
              <summary>Property Management</summary>
              <ul className="p-2 bg-gray-700 rounded">
                <li><a href="#">Submenu 1</a></li>
                <li><a href="#">Submenu 2</a></li>
              </ul>
            </details>
          </li>
          
          <li>
            <details>
              <summary>Owners</summary>
              <ul className="p-2 bg-gray-700 rounded">
                <li><a href="#">Submenu 1</a></li>
                <li><a href="#">Submenu 2</a></li>
              </ul>
            </details>
          </li>

          

          <li className="text-[16px]"> <Link to="about">Residents</Link> </li>
          <li className="text-[16px]"> <Link to="about">Rentals</Link> </li>
          <li className="text-[16px]"> <Link to="about">Apply</Link> </li>
          <li>
            <details>
              <summary>Resources</summary>
              <ul className="p-2 bg-gray-700 rounded">
                <li><a href="#">Submenu 1</a></li>
                <li><a href="#">Submenu 2</a></li>
              </ul>
            </details>
          </li>
          <li className="text-[16px]"> <Link to="about">About</Link> </li>
          <li className="text-[16px]"> <Link to="about">Contact</Link> </li>


        </ul>
      </div>

      <div className="navbar-end">
        <button>button</button>
      </div>
    </div>
  );
};

export default Nav;
