import React from "react";

const Signup = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <form action="" className="flex flex-col gap-2">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
      </form>
    </div>
  );
};

export default Signup;
