import React from "react";

export default function TeamCTA() {
  return (
    <div>
      <div className="flex flex-col gap-24 py-20">
        <div className="flex flex-col gap-8 px-12 sm:px-[480px] text-center items-center">
          <h2 className="font-bold text-[40px] text-[#252B42] ">
            Start your 14 days free trial
          </h2>
          <p className=" m-auto font-normal text-sm text-[#737373]">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent.
          </p>
          <button className="bg-primary-color py-[15px] px-10 font-bold text-sm">
            Try it free now
          </button>
          <div className=" flex p-[10px] gap-[34px]">
            <a href="">
              {" "}
              <i className="bx bxl-facebook-square text-4xl text-[#395185] "></i>
            </a>
            <a href="">
              {" "}
              <i className="bx bxl-instagram text-4xl text-black"></i>
            </a>
            <a href="">
              {" "}
              <i className="bx bxl-linkedin text-4xl text-[#0A66C2]"></i>
            </a>
            <a href="">
              {" "}
              <i className="bx bxl-twitter text-4xl text-[#55ACEE]"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
