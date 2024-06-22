import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbMailSearch } from "react-icons/tb";
import { IoFilter } from "react-icons/io5";
import { FcSettings } from "react-icons/fc";
import { AiTwotoneAppstore } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between mx-0 h-12  ">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="p-3 hover:bg-gray-200 rounded-full cursor-pointer">
            <GiHamburgerMenu />
          </div>
          <img
            className="w-8 h-8"
            src="https://w7.pngwing.com/pngs/608/931/png-transparent-gmail-new-logo-icon.png"
            alt="logo"
          />
          <h1 className="text-2xl text-gray-500 font-medium">Gmail</h1>
        </div>
      </div>
      <div className="w-[50%] mr-30">
        <div className="flex items-center bg-gray-100 px-2 py-3 rounded-full">
          <TbMailSearch size={"20px"} className="text-gray-500 mx-3" />
          <input
            type="text"
            placeholder="Type here to Search Mail"
            className="rouded-full w-full bg-transparent outline-none px-1"
          />
          <IoFilter size={"20px"} className="text-gray-500 mx-3" />
        </div>
      </div>
      <div className="flex ">
        <div className=" p-3 flex rounded-full hover:bg-gray-200">
          <AiTwotoneAppstore size={"20px"} />
        </div>
        <div className="p-3 flex rounded-full hover:bg-gray-200">
          <FcSettings size={"20px"} />
        </div>
        <div className="p-3 flex rounded-full hover:bg-gray-200">
          <RxAvatar size={"20px"} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
