import brand1 from "../../Assets/clientsLogo/Vector.png";
import brand2 from "../../Assets/clientsLogo/fa-brands-2.png";
import brand3 from "../../Assets/clientsLogo/fa-brands-3.png";
import brand4 from "../../Assets/clientsLogo/fa-brands-4.png";
import brand5 from "../../Assets/clientsLogo/fa-brands-5.png";
import brand6 from "../../Assets/clientsLogo/fa-brands-6.png";

const Clients = () => {
  return (
    <div className=" py-12 bg-[#FAFAFA]">
      <div className="flex flex-wrap px-4 sm:px-0 sm:justify-center items-center gap-8 sm:gap-[60px]">
        <img className="sm:w-[80px] sm:h-[33.81px]" src={brand1}></img>
        <img className="sm:w-[83px] sm:h-[59px]" src={brand2}></img>
        <img className="sm:w-[102px] sm:h-[75px]" src={brand3}></img>
        <img className="sm:w-[103px] sm:h-[42px]" src={brand4}></img>
        <img className="sm:w-[104px] sm:h-[62px]" src={brand5}></img>
        <img className="sm:w-[76px] sm:h-[72px] " src={brand6}></img>
      </div>
    </div>
  );
};
export default Clients;
