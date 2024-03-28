import React from "react";
import headerMobile from "../../Assets/contact/header.png";
import headerWeb from "../../Assets/contact/headerWeb.png";

export default function ContactHeader() {
  return (
    <div className="mobile-col-flex  text-center sm:text-start">
      <div className="flex flex-col gap-[35px] text-[#252B42] py-28 sm:pl-[16.5rem] ">
        <h5 className="font-bold text-base">CONTACT US</h5>
        <h1 className="font-bold text-[58px]">Get in touch today!</h1>{" "}
        <h4 className="text-[#737373] px-12 sm:px-0">
          We know how large objects will act, but things on a small scale{" "}
        </h4>{" "}
        <div className="flex flex-col gap-4 font-bold text-2xl">
          <p>Phone :+451 215 215</p>
          <p>Fax : +451 215 215</p>{" "}
        </div>{" "}
        <div className="flex justify-center sm:justify-start gap-[34px] p-[10px] text-3xl text-[#252B42]">
          {" "}
          <a>
            <i className="bx bxl-twitter"></i>{" "}
          </a>{" "}
          <a>
            <i className="bx bxl-facebook-square"></i>{" "}
          </a>{" "}
          <a>
            <i className="bx bxl-instagram"></i>{" "}
          </a>{" "}
          <a>
            <i className="bx bxl-linkedin"></i>{" "}
          </a>{" "}
        </div>
      </div>
      <div>
        <img src={headerMobile} className="flex sm:hidden"></img>
        <img src={headerWeb} className="hidden sm:flex"></img>
      </div>
    </div>
  );
}
