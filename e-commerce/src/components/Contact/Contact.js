import React from "react";

export default function Contact() {
  return (
    <div>
      <div className="flex flex-col gap-20 py-16 text-center items-center">
        <div className="header">
          <div className="flex flex-col gap-[10px] font-bold">
            <h6 className="text-sm">VISIT OUR OFFICE</h6>
            <h2 className="px-9 text-[40px]">
              We help small businesses with big ideas
            </h2>
          </div>
        </div>
        <div className="mobile-col-flex cards">
          <div className="h-[343px] ">
            <div className="flex flex-col gap-[15px] py-[50px] px-10 text-[#252B42]">
              <i className="bx bx-phone text-primary-color text-7xl"></i>
              <div className="text-sm font-bold ">
                <p>georgia.young@example.com</p>
                <p>georgia.young@ple.com</p>
              </div>
              <h5 className="font-bold text-base ">Get Support</h5>
              <button className="text-primary-color border border-1 border-primary-color rounded-[37px] py-[15px] px-[36px] font-bold text-sm">
                Submit Request
              </button>
            </div>
          </div>
          <div className="h-[403px] ">
            <div className="flex flex-col gap-[15px] py-[50px] px-10 bg-[#252B42] text-white">
              <i className="bx bx-current-location text-primary-color text-7xl"></i>
              <div className="text-sm font-bold ">
                <p>georgia.young@example.com</p>
                <p>georgia.young@ple.com</p>
              </div>
              <h5 className="font-bold text-base ">Get Support</h5>
              <button className="text-primary-color border border-1 border-primary-color rounded-[37px] py-[15px] px-[36px] font-bold text-sm">
                Submit Request
              </button>
            </div>
          </div>
          <div className="h-[343px] ">
            <div className="flex flex-col gap-[15px] py-[50px] px-10 text-[#252B42]">
              <i className="bx bxs-envelope text-primary-color text-7xl"></i>
              <div className="text-sm font-bold ">
                <p>georgia.young@example.com</p>
                <p>georgia.young@ple.com</p>
              </div>
              <h5 className="font-bold text-base ">Get Support</h5>
              <button className="text-primary-color border border-1 border-primary-color rounded-[37px] py-[15px] px-[36px] font-bold text-sm">
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
