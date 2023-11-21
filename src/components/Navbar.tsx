import React from 'react';

interface Props {}

const Navbar = () => {
  return (
    <>
      <div className=" w-full flex content-center items-center justify-between px-11 text-[#d8d3d3] ">
        <div className="logo p-[10px] border-[1px] rounded-[10px] border-[#d8d3d3] text-xl leading-[25px] text-[#d8d3d3]">
          Logo
        </div>
        <div className="navbar-menu">
          <ul className="flex content-center text-[20px] font-light leading-[25px] items-center gap-[17px]">
            <li className="relative h-full">
              <a
                className="hover:after:absolute hover:after:rounded-[10px] hover:after:bottom-[-13px] hover:after:block hover:after:bg-gradient-to-r from-yellow-400 via-yellow-600 to-orange-500 hover:after:w-full hover:after:h-[3px]"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="relative h-full">
              <a
                className="hover:after:absolute hover:after:rounded-[10px] hover:after:bottom-[-13px] hover:after:block hover:after:bg-gradient-to-r from-yellow-400 via-yellow-600 to-orange-500 hover:after:w-full hover:after:h-[3px]"
                href="/"
              >
                About
              </a>
            </li>
            <li className="relative h-full">
              <a
                className="hover:after:absolute hover:after:rounded-[10px] hover:after:bottom-[-13px] hover:after:block hover:after:bg-gradient-to-r from-yellow-400 via-yellow-600 to-orange-500 hover:after:w-full hover:after:h-[3px]"
                href="/"
              >
                FAQ
              </a>
            </li>
            <li className="relative h-full">
              <a
                className="hover:after:absolute hover:after:rounded-[10px] hover:after:bottom-[-13px] hover:after:block hover:after:bg-gradient-to-r from-yellow-400 via-yellow-600 to-orange-500 hover:after:w-full hover:after:h-[3px]"
                href="/"
              >
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-btns flex content-center items-center gap-[18px]">
          <button className="text-xl leadiing-[25px] font-medium text-[#d8d3d3] rounded-[10px] p-[10px] border-[1px] border-[#d8d3d3]">
            Register
          </button>
          <button className=" text-xl leadiing-[25px] font-medium text-[#111010] rounded-[10px] p-[10px] bg-gradient-to-r from-yellow-400 via-yellow-600 to-orange-500">
            Sign in
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar