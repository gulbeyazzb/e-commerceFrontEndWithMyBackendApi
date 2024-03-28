import React from "react";
import demo from "../../Assets/about/demo.mp4";

export const AboutVideo = () => {
  return (
    <div className=" relative z-0 w-full sm:w-auto p-1 sm:p-6">
      <video className="relative z-0 sm:h-full sm:w-full rounded-lg" controls>
        <source src={demo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <i className="absolute bx bx-play text-8xl text-white"></i>
    </div>
  );
};
