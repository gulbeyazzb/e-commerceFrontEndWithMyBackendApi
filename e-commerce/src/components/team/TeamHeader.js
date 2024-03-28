import React from "react";
import { NavLink } from "react-router-dom";

export default function TeamHeader() {
  return (
    <div>
      <div className="py-[50px]">
        <div className="flex flex-col gap-4 items-center text-center">
          <h5 className="font-bold text-base text-[#737373]">WHAT WE DO</h5>
          <h5 className="px-12 sm:px-0 font-bold text-4xl sm:text-6xl text-[#252B42]">
            Innovation tailored for you
          </h5>
          <div className="flex gap-[15px] py-[10px] justify-center">
            <NavLink to="/" className=" text-[#252B42] font-bold" exact>
              Home
            </NavLink>
            <i className="bx bxs-chevron-right text-[#BDBDBD] text-2xl "></i>
            <p className="mr-1 ">Team</p>
          </div>
        </div>
      </div>
    </div>
  );
}
