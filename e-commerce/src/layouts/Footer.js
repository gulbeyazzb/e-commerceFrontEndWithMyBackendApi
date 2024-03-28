import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#252B42] py-10 font-[Montserrat]">
      <div className="mobile-col-flex sm:justify-between px-20 pb-20 gap-12 sm:gap-0 sm:px-36 m-auto sm:pb-5">
        <div className="flex flex-col gap-6">
          <h3 className="font-bold text-2xl text-white sm:mb-2">
            Consulting Agency For Your Business
          </h3>
          <p className="font-normal text-sm text-white">
            the quick fox jumps over the lazy dog
          </p>
        </div>
        <div>
          <Link
            to="/contact"
            className="bg-[#23A6F0] text-white py-4 px-10 rounded-md"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <div className="mobile-col-flex sm:justify-between px-20 sm:px-36 m-auto">
        <div className="flex flex-col gap-4 text-base font-bold text-white py-10">
          <Link className="text-base mb-3" to="/company-info">
            Company Info
          </Link>
          <Link to="/about">About Us</Link>
          <Link to="/carrier">Carrier</Link>
          <Link to="/we-are-hiring">We are hiring</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <div className="flex flex-col gap-4 text-base font-bold text-white py-10">
          <Link className="text-base mb-3" to="/company-info">
            Legal
          </Link>
          <Link to="/about">About Us</Link>
          <Link to="/carrier">Carrier</Link>
          <Link to="/we-are-hiring">We are hiring</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <div className="flex flex-col gap-4 text-base font-bold text-white py-10">
          <Link className="text-base mb-3" to="/company-info">
            Features
          </Link>
          <Link to="/about">About Us</Link>
          <Link to="/carrier">Carrier</Link>
          <Link to="/we-are-hiring">We are hiring</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <div className="flex flex-col gap-4 text-sm font-bold text-white py-10">
          <Link className="text-base mb-3" to="/company-info">
            Resources
          </Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/carrier">Carrier</Link>
          <Link to="/we-are-hiring">We are hiring</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <div className="flex flex-col gap-4 text-base font-bold text-white py-10">
          <Link className="text-base mb-3" to="/company-info">
            Get In Touch
          </Link>
          <a href="tel:5455555555" className="flex gap-1 items-center">
            <i className="bx bxs-phone-call "></i>+90 (555) 555 55 55
          </a>
          <Link to="/location" className="flex gap-1 items-center">
            <i className="bx bx-current-location "></i>
            Amsterdam,Netherlands
          </Link>
          <a
            href="mailto:glbzbayram@gmail.com"
            className="flex gap-1 items-center"
          >
            <i className="bx bx-envelope "></i>glbzbayram@gmail.com
          </a>
        </div>
      </div>
      <div className="mobile-col-flex gap-6 sm:items-center sm:justify-between px-20 sm:px-36 m-auto pt-5">
        <p className="font-bold text-sm text-white">
          Made With Love By Finland All Right Reserved{" "}
        </p>
        <div className="flex gap-6 justify-between items-center w-[100px]">
          <a href="">
            <i className="bx bxl-facebook-circle text-[#335BF5] text-3xl"></i>
          </a>
          <a href="">
            <i className="bx bxl-instagram text-[#E51F5A] text-3xl"></i>
          </a>
          <a href="">
            <i className="bx bxl-twitter text-[#23A6F0] text-3xl"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
