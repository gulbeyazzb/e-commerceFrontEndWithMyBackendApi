import React from "react";
import { NavLink } from "react-router-dom";

export default function PricingHeader() {
  return (
    <div>
      <div className="py-[3.1rem]">
        <div className="flex flex-col gap-4 text-center ">
          <h5 className="font-bold text-base text-[#737373]">PRICING</h5>
          <h5 className="font-bold sm:text-6xl text-4xl text-[#252B42]">
            Simple Pricing
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
