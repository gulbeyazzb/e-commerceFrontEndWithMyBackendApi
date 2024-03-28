import React from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function ProductHeader() {
  const history = useHistory();

  return (
    <div className="bg-[#FAFAFA] ">
      <div className="flex flex-row justify-between px-4 sm:justify-center sm:items-center">
        <div>
          <button
            className="flex justify-center sm:justify-start gap-[5px] sm:w-[1050px] m-auto text-black font-bold text-lg items-center pt-6"
            onClick={() => history.goBack()}
          >
            {" "}
            <i className="bx bxs-chevron-left text-[#BDBDBD] text-2xl"></i>
            Back
          </button>
        </div>
        <div className="flex justify-center sm:justify-start gap-[15px]  text-[#737373] font-bold text-sm items-center py-6 ">
          <NavLink to="/" className=" text-[#252B42]" exact>
            Home
          </NavLink>
          <i className="bx bxs-chevron-right text-[#BDBDBD] text-2xl"></i>
          <NavLink to="/v1/products" className="mr-1">
            Shop
          </NavLink>
        </div>
      </div>
    </div>
  );
}
