import React from "react";
import { TeamData } from "../../mocks/AboutData/TeamData";

export const AboutTeam = () => {
  const newData = TeamData.slice(0, 3);
  return (
    <div>
      <div className="flex flex-col gap-28 text-[#252B42] text-center items-center py-28">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-[40px]">Meet Our Team</h1>
          <h6 className="font-normal text-sm sm:w-[469px] p-6 sm:p-0 m-auto">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </h6>
        </div>
        <div className="mobile-col-flex gap-6  ">
          {newData.map((data) => (
            <div className="w-[316px] m-auto font-bold">
              <img className="w-[316px] h-[231px]" src={data.img}></img>
              <div className="flex flex-col gap-[10px] p-[30px]">
                <h5 className="text-base">{data.header}</h5>
                <h6 className="text-sm">{data.role}</h6>
                <div className="flex gap-5 justify-center ">
                  <a href={data.facebook}>
                    {" "}
                    <i className="bx bxl-facebook-circle text-2xl text-[#335BF5] sm:text-primary-color"></i>
                  </a>
                  <a href={data.instagram}>
                    {" "}
                    <i className="bx bxl-instagram text-2xl text-[#E51F5A] sm:text-primary-color"></i>
                  </a>
                  <a href={data.twitter}>
                    {" "}
                    <i className="bx bxl-twitter text-2xl text-primary-color "></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
