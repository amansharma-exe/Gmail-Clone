import React from "react";
import { FaRegSquare } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Email = () => {
  const navigate = useNavigate();

  const openMail = () => {
    navigate("/mail/1234");
  };

  return (
    <div
      onClick={openMail}
      className="flex items-center justify-between border-b border-gray-200 text-sm hover:cursor-pointer hover:text-gray-500 p-1 ml-2 hover:shadow-md"
    >
      <div className="flex gap-3 items-center">
        <div className="text-gray-400 hover:text-gray-700">
          <FaRegSquare size={"20px"} />
        </div>
        <div className="text-gray-400 hover:text-yellow-500">
          <CiStar size={"20px"} />
        </div>
        <div className="font-semibold text-gray-400 hover:font-extrabold">
          XYZ
        </div>
      </div>
      <div className="flex-1 ml-4 overflow-hidden font-normal">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
          excepturi alias quis, ex hic iusto tempore vel suscipit quod
          dignissimos sapiente neque aperiam ea eligendi soluta omnis magnam
          exercitationem voluptatem.
        </p>
      </div>
      <div className="flex-none text-gray text-sm">
        <p>10 days ago</p>
      </div>
    </div>
  );
};

export default Email;
