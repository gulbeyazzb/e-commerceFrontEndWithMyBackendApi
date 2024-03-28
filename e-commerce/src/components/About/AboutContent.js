import React from "react";

const AboutContent = () => {
  return (
    <div className="mobile-col-flex sm:justify-between sm:gap-0 gap-12 items-center text-center sm:text-start py-6">
      <div className="sm:w-[390px] flex flex-col sm:items-start items-center sm:gap-6 gap-12">
        <p className="text-[#E74040] text-sm font-normal">Problems trying</p>
        <p className="text-[#252B42] text-3xl font-bold">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        </p>
      </div>
      <div className="sm:w-[520px] w-[300px] m-auto">
        <p className="text-[#737373] font-normal text-sm">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
      </div>
    </div>
  );
};
export default AboutContent;
