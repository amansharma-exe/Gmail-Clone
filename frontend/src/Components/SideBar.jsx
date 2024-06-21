import React from "react";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { HiInboxArrowDown } from "react-icons/hi2";
import { GiJusticeStar } from "react-icons/gi";
import { RiDraftLine } from "react-icons/ri";
import { SiMinutemailer } from "react-icons/si";
import { RiSpam2Fill } from "react-icons/ri";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setOpen } from "../Redux/AppSlice";

const sidebarItems = [
  {
    icon: <HiInboxArrowDown size={"24px"} />,
    text: "Inbox",
  },
  {
    icon: <GiJusticeStar size={"24px"} />,
    text: "Starred",
  },
  {
    icon: <RiDraftLine size={"24px"} />,
    text: "Draft",
  },
  {
    icon: <SiMinutemailer size={"24px"} />,
    text: "Sent",
  },
  {
    icon: <RiSpam2Fill size={"24px"} />,
    text: "Spam",
  },
  {
    icon: <IoIosArrowDropdownCircle size={"24px"} />,
    text: "More",
  },
];

const SideBar = () => {
  const dispatch = useDispatch();

  return (
    <div className="w-[15%] ">
      <div className="p-3 ">
        <button
          onClick={() => dispatch(setOpen(true))}
          className="flex items-center gap-2 bg-blue-100 p-2 rounded-2xl hover:shadow-md"
        >
          <HiMiniPencilSquare size={"24px"} />
          Compose
        </button>
      </div>
      <div className=" text-gray-800">
        {sidebarItems.map((item, index) => {
          return (
            <div className="flex item-center pl-6 py-1  rounded-full gap-4 my-2 hover:cursor-pointer hover:bg-gray-200">
              {item.icon}
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
