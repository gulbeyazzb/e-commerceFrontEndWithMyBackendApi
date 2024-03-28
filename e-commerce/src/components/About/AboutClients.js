import React from "react";
import brand1 from "../../Assets/clientsLogo/Vector.png";
import brand2 from "../../Assets/clientsLogo/fa-brands-2.png";
import brand3 from "../../Assets/clientsLogo/fa-brands-3.png";
import brand4 from "../../Assets/clientsLogo/fa-brands-4.png";
import brand5 from "../../Assets/clientsLogo/fa-brands-5.png";
import brand6 from "../../Assets/clientsLogo/fa-brands-6.png";

export default function AboutClients() {
  return (
    <div className="bg-[#FAFAFA] ">
      <div className="py-20 flex flex-col gap-6 text-center items-center">
        <div className="flex flex-col gap-[30px]">
          <h2 className="font-normal text-xl text-[#252B42]">
            Trusted By Over 4000 Big Companies
          </h2>
        </div>
        <div className="mobile-col-flex justify-center items-center py-[50px] sm:gap-[30px] gap-14">
          <img className="sm:w-[80px] sm:h-[33.81px]" src={brand1}></img>
          <img className="sm:w-[83px] sm:h-[59px]" src={brand2}></img>
          <img className="sm:w-[102px] sm:h-[75px]" src={brand3}></img>
          <img className="sm:w-[103px] sm:h-[42px]" src={brand4}></img>
          <img className="sm:w-[104px] sm:h-[62px]" src={brand5}></img>
          <img className="sm:w-[76px] sm:h-[72px] " src={brand6}></img>
        </div>
      </div>
    </div>
  );
}
