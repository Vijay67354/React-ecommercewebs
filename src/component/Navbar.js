import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { RiArrowDropDownLine } from "react-icons/ri";
import {BsSearch} from "react-icons/bs"

const Navbar = () => {
  // setting mobile nav
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // close menu on click
  const closeMenu = () => setClick(false);

  // change nav color when scrolling

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div
      className={
        color
          ? "header bg-[#fa4529]  z-50 spacingYtext rajez spacingYlogo"
          : "header bg-[#fa4529] bg-opacity-30 rajez"

        // : "header  bg-gradient-to-b from-black via-black bg-opacity-0 rajez"
      }
    >
      <nav className="navbar ">
      
          {/* <img
            src="logo/logo-dark.png"
            alt="logo"
            className="cursor-pointer md:w-28 w-[115px] h-[40px]"
          /> */}

          

        <div className="hamburger w-[213px]  p-[8px] pl-[36px] text-center  h-[56px]   bg-[#FA3434]" onClick={handleClick} >
            <div className="flex pt-2">
            <div>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
          </div>
          <div>
            <p className="pl-3 text-white">All Category</p>
          </div>
          </div>
        </div>
     

        <ul className={click ? "nav-menu active md:space-y-0 space-y-4" : "nav-menu"}>
          <li className="group dropdown no-underline text-black drop-shadow-2xl md:flex hidden nav-item text-[16px] uppercase  nav-desk font-bold   font-sans hover:text-primary group relative cursor-pointer">
          <Link to="/" className="text-black no-underline"> Home </Link>  
        
          </li>
          {/* for mobile start */}
          <li className="md:hidden block">
            <Link to="/"> <div className="py-2 text-white flex items-center justify-center w-full">
            WHY I2V ?

            
            </div>
            </Link>
             
          </li>
          {/* for mobile end */}

          <li className="group dropdown drop-shadow-2xl  md:flex hidden nav-item text-[16px] uppercase  nav-desk font-bold  text-black font-sans hover:text-primary group relative cursor-pointer">
       Portfolio
            <div className="group-hover:block lg:mt-12 dropdown-menu absolute hidden transition-all duration-300 translate-y-2 h-auto top-10 md:-left-10">
              {/* <div className="top-0 bg-white shadow-xl shadow-white/20 text-white text-xs w-[320px] flex flex-col"> */}
              <div className="top-0 bg-white shadow-xl  text-white text-xs w-[320px] flex flex-col">
                <Link to="/" className=" hover:bg-primary hover:text-white py-2 pt-4  m-1 text-black font-sans pl-4 text-[13px]">
                  IP Video Management Software
                </Link>

                <Link to="/" className=" hover:bg-primary hover:text-white py-2 m-1 text-black font-sans pl-4 text-[13px]">
               Work Caraousel
                </Link>

                <Link to="/" className=" hover:bg-primary hover:text-white py-2 m-1 text-black font-sans pl-4 text-[13px]">
               Work Finesry
                </Link>

                <Link to="/" className=" pb-4    hover:bg-primary hover:text-white py-2 m-1 text-black font-sans pl-4 text-[13px]">
               Work Chase
                </Link>
                {/* <Link to="/" className=" hover:bg-primary hover:text-white py-2 m-1">
                  AI Based Video Analytics
                </Link>
                <Link to="/" className=" hover:bg-primary hover:text-white py-2 m-1">
                  Intelligent Traffic Solutions
                </Link>
                <Link to="/" className=" hover:bg-primary hover:text-white py-2 m-1">
                  Central Monetoring System
                </Link>
                <Link to="/" className=" hover:bg-primary hover:text-white py-2 m-1">
                  Cloud Surveillance
                </Link>
                <Link to="/" className=" hover:bg-primary hover:text-white py-2 m-1">
                  Integrated command Center
                </Link> */}
              </div>
            </div>
          </li>
          {/* for mobile start */}
          <li className="md:hidden block">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="py-2 ml-5  text-white flex items-center justify-center w-full   ">
                    PRODUCTS
                    <RiArrowDropDownLine
                      className={open ? "rotate-180 transform w-8 h-8" : "w-8 h-8"}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-gray-500 mx-12 font-semibold">
                    <div className="bg-white text-black py-4 space-y-2 divide-y divide-red-400 rounded">
                      <li className="hover:bg-gray-50">
                        <Link to="/"> IP Video Management Software</Link>
                      </li>
                      <li>
                        <Link to="/"> AI Based Video Analytics</Link>
                      </li>
                      {/* <li>
                        <Link to="/"> Intelligent Traffic Solutions</Link>
                      </li>
                      <li>
                        <Link to="/"> Central Monetoring System</Link>
                      </li>
                      <li>
                        <Link to="/">  Cloud Surveillance</Link>
                      </li>
                      <li>
                        <Link to="/"> Integrated command Center</Link>
                      </li> */}
                    </div>
                  </Disclosure.Panel>

                </>
              )}
            </Disclosure>
          </li>
          {/* for mobile end */}
          <li className="group dropdown  no-underline drop-shadow-2xl md:flex hidden nav-item text-[16px] uppercase  nav-desk font-bold  text-black font-sans hover:text-primary group relative cursor-pointer">
 Blog
            <div className="group-hover:block mt-12 dropdown-menu absolute hidden transition-all duration-300 translate-y-2 h-auto top-10 md:-left-10">
              {/* <div className="top-0 bg-white shadow-xl shadow-white/20 text-white text-xs w-[320px] flex flex-col"> */}
              <div className="top-0 bg-white shadow-xl  text-white text-xs w-[320px] flex flex-col">
              <Link to="/" className=" hover:bg-primary hover:text-white py-2 pt-4  m-1 text-black font-sans pl-4 text-[13px]">
                  IP Video Management Software
                </Link>

                <Link to="/" className=" hover:bg-primary hover:text-white py-2 m-1 text-black font-sans pl-4 text-[13px]">
               Work Caraousel
                </Link>

                <Link to="/" className=" hover:bg-primary hover:text-white py-2 m-1 text-black font-sans pl-4 text-[13px]">
               Work Finesry
                </Link>

                <Link to="/" className=" pb-4    hover:bg-primary hover:text-white py-2 m-1 text-black font-sans pl-4 text-[13px]">
               Work Chase
                </Link>
              </div>
            </div>
          </li>
          {/* for mobile start */}
          <li className="md:hidden block">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="py-2 ml-3 text-white flex items-center justify-center w-full">
                    PARTNER
                    <RiArrowDropDownLine
                      className={open ? "rotate-180 transform w-8 h-8" : "w-8 h-8"}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-gray-500 mx-12 font-semibold">
                    <ul className="bg-white text-black py-4 space-y-2 divide-y divide-red-400 rounded">
                      <li className="hover:bg-gray-50">
                        <Link to="/">CHANNEL PARTNER</Link>
                      </li>
                      <li>
                        <Link to="/">TECHNOLOGY PARTNER</Link>
                      </li>
                    </ul>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </li>
          {/* for mobile end */}
          <li className="group dropdown drop-shadow-2xl md:flex hidden nav-item text-[16px] uppercase  nav-desk font-bold  text-black font-sans hover:text-primary group relative cursor-pointer">
            <Link to="/" className="text-black no-underline"> News  </Link>
            {/* <div className="group-hover:block dropdown-menu absolute hidden transition-all duration-300 translate-y-2 h-auto top-10 md:-left-10">
              <div className="top-0 bg-black shadow-xl shadow-white/20 text-white text-xs w-52 flex flex-col">
                <Link to="/whyi2v" className=" hover:bg-primary hover:text-white py-2 m-1">
                   WHY I2V ?
                </Link>
                <Link to="/whyi2v" className=" hover:bg-primary hover:text-white py-2 m-1">
                   WHY I2V ?
                </Link>
              </div>
            </div> */}
          </li>
          {/* for mobile start */}
          <li className="md:hidden block">
            <Link to="/"> <div className="py-2 text-white flex items-center justify-center w-full">
              SUPPORT

            </div> </Link>
          </li>
          {/* for mobile end */}
    
          {/* for mobile start */}
          <li className="md:hidden block">
            <Link to="/"> <div className="py-2 text-white flex items-center justify-center w-full">
              NEWS

            </div> </Link>
          </li>
          <li className="md:hidden block">
            <Link to="/"> <div className="py-2 text-white flex items-center justify-center w-full">
             Contact Us

            </div> </Link>
          </li>
          {/* for mobile end */}
        </ul>
        <div className="drop-shadow-2xl md:block hidden group">
          <div className="hover:animate-pulse ">
            <Link
              to="/"
              onClick={closeMenu}
              className="link-color  text-white group-hover:text-white "
            >
         <div className="flex ">
            <div>
            <img src="./images/Vector (20).png" />
            </div>
            <div>
            <img src="./images/nav.png" />
            </div>
         </div>
            </Link>
          </div>
        </div>


        {/* <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div> */}
      </nav>
      <hr
        // className={color ? "bg-black text-black " : "bg-black text-black p-[1px] w-[100%] mx-auto "}
        className="bg-black p-[2px] w-[100%] mx-auto A"
      />


    </div>
  );
};

export default Navbar;
