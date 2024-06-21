import React, { useState } from "react";
import { FaRegSquare } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { IoReload } from "react-icons/io5";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { MdAllInbox } from "react-icons/md";
import { FaTags } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { MdTipsAndUpdates } from "react-icons/md";
import { SiGoogleforms } from "react-icons/si";
import Emails from "./Emails";

const mailType = [
  {
    icon: <MdAllInbox size={"24px"} />,
    text: "Primary",
  },
  {
    icon: <FaTags size={"24px"} />,
    text: "Promotions",
  },
  {
    icon: <IoIosPeople size={"24px"} />,
    text: "Socials",
  },
  {
    icon: <MdTipsAndUpdates size={"24px"} />,
    text: "Updates",
  },
  {
    icon: <SiGoogleforms size={"24px"} />,
    text: "Forms",
  },
];

const Inbox = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      {/*  defining Header For Body */}
      <div className="flex items-center justify-between my-2">
        <div className="flex items-center gap-3">
          <div className="hover:bg-gray-100 p-2">
            <FaRegSquare size={"24px"} />
          </div>
          <div className="hover:bg-gray-100 p-2 pl-0 pr-0">
            <FaCaretDown size={"24px"} />
          </div>
          <div className="hover:bg-gray-100 p-2 pr-5 pl-5 hover:cursor-pointer">
            <IoReload size={"24px"} />
          </div>
          <div className="hover:bg-gray-100 p-2 hover:cursor-pointer">
            <PiDotsThreeOutlineVerticalFill size={"24px"} />
          </div>
        </div>
        <div className="flex items-center gap-2 ">
          <div>
            <span>1-100</span>
          </div>
          <div className="hover:bg-gray-100 hover:cursor-pointer p-2">
            <IoIosArrowBack size={"24px"} />
          </div>
          <div className="hover:bg-gray-100 hover:cursor-pointer p-2">
            <IoIosArrowForward size={"24px"} />
          </div>
        </div>
      </div>
      {/*  defining Body For Inbox Emails */}
      <div className="h-90vh overflow-y-auto ">
        <div className="flex items-center gap-1">
          {mailType.map((item, index) => {
            return (
              <button
                onClick={() => setSelected(index)}
                className={` ${
                  selected === index
                    ? "border-b-4 border-b-blue-600 text-blue-600"
                    : "border-b-4 border-b-transparent"
                } items-center flex gap-2 p-2 w-40 hover:bg-gray-100`}
              >
                {item.icon}
                {item.text}
              </button>
            );
          })}
        </div>
        <Emails />
      </div>
    </div>
  );
};

export default Inbox;
