import banner1 from "../../Assets/h5-baner-3 1baner-3.png";
import banner2 from "../../Assets/h5-baner-1 1.png";
import banner3 from "../../Assets/h5-baner-1 1 (1).png";

const ShopCards = () => {
  return (
    <div className=" bg-[#FAFAFA]">
      <div className="sm:w-[1050px] sm:m-auto mobile-col-flex gap-10 py-20 justify-between items-center">
        <div>
          <div className="relative">
            <img className="relative z-0" src={banner1}></img>
            <div className=" absolute   top-20 left-10 ">
              <h6 className="text-xs font-normal">Your Space</h6>
              <h2 className="text-2xl font-bold w-[94px] h-[64px]">
                Unique Life
              </h2>
              <h6 className="text-xs font-normal">Explore Items</h6>
            </div>
          </div>
        </div>
        <div>
          <div className="relative">
            <img className="relative z-0" src={banner2}></img>
            <div className=" absolute   top-20 left-10 ">
              <h6 className="text-xs font-normal">Ends Today</h6>
              <h2 className="text-2xl font-bold w-[94px] h-[64px]">
                Elements Style
              </h2>
              <h6 className="text-xs font-normal">Explore Items</h6>
            </div>
          </div>
        </div>
        <div>
          <div className="relative">
            <img className="relative z-0" src={banner3}></img>
            <div className=" absolute  top-20 left-10 ">
              <h6 className="text-xs font-normal">Ends Today</h6>
              <h2 className="text-2xl font-bold w-[94px] h-[64px]">
                Elements Style
              </h2>
              <h6 className="text-xs font-normal">Explore Items</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCards;
