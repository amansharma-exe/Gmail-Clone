import React from "react";
import { BiSolidLogInCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center w-screen">
      <form action="" className="flex flex-col gap-2 bg-transparent p-3">
        <h1 className="flex items-center justify-center gap-3 font-bold text-md">Login here </h1>
        <input type="email" placeholder="Email" className="border border-gray-400 rounded-md px-3  py-3"/>
        <input type="password" placeholder="Password" className="border border-gray-400 rounded-md px-3  py-3"/>
        <button type="submit" className="flex items-center justify-center gap-2 bg-gray-800 text-white hover:text-green-400 p-2">Login
        < BiSolidLogInCircle size={'18px'}/>
        </button>
        <p >Don't Have an account? <Link to={"/signup"} className="text-md hover:text-blue-400 hover:cursor-pointer">Sign Up</Link></p>
      </form>
    </div>
  );
};

export default Login;
