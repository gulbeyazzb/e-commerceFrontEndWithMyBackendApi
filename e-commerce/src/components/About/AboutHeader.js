import about from "../../Assets/about/technology 1 (1).png";
import { Link } from "react-router-dom";

const AboutHeader = () => {
  return (
    <div className="mobile-col-flex gap-[120px] items-center sm:justify-between py-6 sm:p-0 sm:py-28 py-20">
      <div className="flex flex-col items-center text-center sm:text-start sm:items-start gap-4 w-[356px]">
        <h5 className="text-[#252B42] text-base font-bold">ABOUT COMPANY</h5>
        <h1 className="text-[#252B42] text-[58px] font-bold">ABOUT US</h1>
        <p>We know how large objects will act, but things on a small scale</p>
        <Link
          to="/team"
          className="w-[190px] text-sm font-bold text-white py-[15px] px-10 bg-primary-color"
        >
          Get Quote Now
        </Link>
      </div>
      <div className="relative z-0 m-auto">
        <div className="relative z-0 bg-[#FFE9EA] rounded-[100%] p-32 sm:p-52"></div>
        <div className="absolute top-0 bg-[#FFE9EA] rounded-[100%] p-6"></div>
        <div className="absolute bg-[#977DF4] rounded-[100%] p-2"></div>
        <div className="absolute right-0 top-0 bg-[#977DF4] rounded-[100%] p-2"></div>
        <img src={about} className="absolute top-0 left-6"></img>
      </div>
    </div>
  );
};
export default AboutHeader;
