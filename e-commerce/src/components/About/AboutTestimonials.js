import React from "react";
import bgtestimonial from "../../Assets/about/testimonial/unsplash_vjMgqUkS8q8.png";
import { Link } from "react-router-dom";

const AboutTestimonials = () => {
  return (
    <div className="bg-[#2A7CC7] h-[637px]">
      <div className="mobile-col-flex sm:justify-between">
        <div className="flex flex-col items-center sm:items-start px-20 sm:px-0 text-center sm:text-start gap-6 sm:w-[500px] py-28 m-auto text-white">
          <h5 className="font-bold text-base">WORK WITH US</h5>
          <h2 className="font-bold text-[40px]">Now Let’s grow Yours</h2>
          <p className="font-normal text-sm ">
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th{" "}
          </p>
          <Link
            to="/contact"
            className="py-[15px] w-[130px]  rounded-md border border-1 border-[#FAFAFA] text-center text-[#FAFAFA]"
          >
            Contact
          </Link>
        </div>
        <div className="invisible sm:visible">
          <img className="w-[590px] h-[637px]" src={bgtestimonial}></img>
        </div>
      </div>
    </div>
  );
};
export default AboutTestimonials;
