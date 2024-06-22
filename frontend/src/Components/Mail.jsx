import React from "react";
import { TfiControlBackward } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import { MdArchive } from "react-icons/md";
import { RiSpam2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { CgMoreVertical } from "react-icons/cg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Mail = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      <div className="flex justify-between items-center py-2">
        <div className="flex text-gray-800 gap-3">
          <div
            onClick={() => navigate("/")}
            className="hover:text-blue-500 hover:bg-gray-200 p-2 rounded-full "
          >
            <TfiControlBackward size={"20px"} />
          </div>
          <div className="hover:text-blue-500 hover:bg-gray-200 p-2 rounded-full ">
            <MdArchive size={"20px"} />
          </div>
          <div className="hover:text-blue-500 hover:bg-gray-200 p-2 rounded-full ">
            <RiSpam2Fill size={"20px"} />
          </div>
          <div className="hover:text-blue-500 hover:bg-gray-200 p-2 rounded-full ">
            <MdDelete size={"20px"} />
          </div>
          <div className="hover:text-blue-500 hover:bg-gray-200 p-2 rounded-full ">
            <CgMoreVertical size={"20px"} />
          </div>
        </div>
        <div className="flex items-center justify-between gap-2">
          <div>
            <span>1 of 265</span>
          </div>
          <div className="hover:text-blue-500 hover:bg-gray-200 p-2 rounded-full ">
            <IoIosArrowBack size={"20px"} />
          </div>
          <div className="hover:text-blue-500 hover:bg-gray-200 p-2 rounded-full ">
            <IoIosArrowForward size={"20px"} />
          </div>
        </div>
      </div>
      <div className="h-[90vh] overflow-y-auto p-3">
        <div className="flex justify-between items-center gap-1 bg-white">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-medium"> Subject</h1>
            <span className="rounded-md text-sm bg-gray-200 px-2">Inbox</span>
          </div>
          <div className="flex-none text-gray-400 my-5 text-sm">
            <p>12 days ago</p>
          </div>
        </div>
        <div className="text-sm text-gray-600">
          <h1>demo123@gmailcom</h1>
          <span>to : me</span>
        </div>
        <div className="my-5">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            laborum, vel natus at expedita tempore?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mail;
