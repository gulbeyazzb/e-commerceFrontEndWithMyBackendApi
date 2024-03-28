import { Link } from "react-router-dom";
import { bestSeller } from "../../mocks/homeData/bestSeller";

const BestSeller = () => {
  const bests = bestSeller.slice(0, 4);
  return (
    <div className="bg-[#FAFAFA] py-12">
      <div className="flex flex-col items-center sm:items-start sm:w-[1050px] mx-auto">
        <div>
          <h3
            id="section-title"
            className="font-bold  mb-6 text-[#252B42] text-2xl"
          >
            BESTSELLER PRODUCTS
          </h3>
        </div>
        <hr className="w-[300px] m-auto sm:w-[1050px] " />
        <div className="mobile-col-flex sm:gap-6 gap-12">
          {bests.map((best) => (
            <div className="p-2 text-center">
              <img src={best.src} className="w-[300px]  py-2"></img>
              <h5 className="pb-3 text-center font-bold text-base text-[#252B42]">
                {best.heading}
              </h5>
              <Link
                to="/english-department"
                className="pb-3 font-bold text-sm text-second-text text-center"
              >
                {best.subHeading}
              </Link>
              <div className="pt-3">
                <span className="text-[#BDBDBD] text-base ">{best.price}</span>
                <span className="text-[#23856D] text-base ">
                  {best.pricebold}
                </span>
              </div>{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default BestSeller;
