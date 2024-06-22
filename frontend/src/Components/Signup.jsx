import React from "react";
import { BsSignIntersection } from "react-icons/bs";
import { FaLevelDownAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex items-center justify-center w-screen ">
      <form action="" className="flex flex-col gap-2 bg-transparent p-3">
        <h1 className="flex items-center justify-center gap-3 font-bold text-md">Sign Up here <FaLevelDownAlt /> </h1>
        <input type="text" placeholder="Name" className="border border-gray-400 rounded-md px-3  py-3"/>
        <input type="email" placeholder="Email" className="border border-gray-400 rounded-md px-3  py-3"/>
        <input type="password" placeholder="Password" className="border border-gray-400 rounded-md px-3  py-3"/>
        <button type="submit" className="flex items-center justify-center gap-2 bg-gray-800 text-white hover:text-green-400 p-2">Sign Up
        < BsSignIntersection size={'18px'}/>
        </button>
        <p >Already Have an account? <Link to={"/login"} className="text-md hover:text-blue-400 hover:cursor-pointer">Login</Link></p>
     </form>
    </div>
      );
};

export default Signup;
