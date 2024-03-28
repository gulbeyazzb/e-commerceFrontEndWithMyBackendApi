import card1 from "../../Assets/card-cover-5.png";
import { bestSeller } from "../../mocks/homeData/bestSeller";
import { IoIosArrowDropleft } from "react-icons/fa";

const ProductCards = () => {
  const bests = bestSeller.slice(0, 3);
  const bests2 = bestSeller.slice(3, 6);

  return (
    <div>
      <div className="mobile-col-flex container m-auto justify-center py-12">
        <div className="pt-12">
          <div className=" gap-6">
            <div className=" p-4">
              <img src={card1} className="flex flex-1"></img>
            </div>
            <div className="hidden p-6 gap-[5px]">
              <h6 className="font-bold text-sm text-text-color">FURNITURE</h6>
              <h6 className="font-bold text-sm text-second-text">5 Items</h6>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mobile-col-flex items-center gap-6 pt-20 sm:pt-12 justify-center">
            <div>
              <div className="flex flex-col gap-[10px]">
                <h3 className="text-2xl font-bold text-text-color">
                  BESTSELLER PRODUCTS
                </h3>
              </div>
            </div>
            <div>
              <div className="mobile-col-flex items-center py-6 gap-6">
                <div className="flex ">
                  <div>
                    <button className="py-[10px] px-5 text-primary-color text-sm font-bold">
                      Men
                    </button>
                  </div>
                  <div>
                    <button className="py-[10px] px-5 text-second-text text-sm font-bold">
                      Women
                    </button>
                  </div>
                  <div>
                    <button className="py-[10px] px-5 text-second-text text-sm font-bold">
                      Accessories
                    </button>
                  </div>
                </div>
                <div className="flex gap-[15px]">
                  <i className="bx bx-chevron-left py-[14px] px-5 border border-muted-color text-muted-color rounded-[34px] sm:text-xl text-lg font-bold"></i>
                  <i className="bx bx-chevron-right py-[14px] px-5 border border-muted-color text-muted-color rounded-[34px] sm:text-xl text-lg font-bold"></i>
                </div>
              </div>
            </div>
          </div>
          <hr className="pb-20" />
          <div>
            <div className="flex flex-col  gap-[15px]">
              <div className="mobile-col-flex gap-[30px] items-center justify-center">
                {bests.map((best) => (
                  <div className="">
                    <div>
                      <img src={best.src}></img>
                      <div className="flex flex-col gap-[10px] pt-[25px] px-[25px] pb-[35px]">
                        <h5 className="font-bold text-base text-text-color">
                          {best.heading}
                        </h5>
                        <a
                          href="#"
                          className="font-bold text-sm text-second-text"
                        >
                          {best.subHeading}
                        </a>
                        <div className="flex gap-[5px] py-[5px] px-[3px] font-bold text-base">
                          <h5 className="text-muted-color">{best.price}</h5>
                          <h5 className="text-secondary-1">{best.pricebold}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="hidden sm:flex gap-[30px] items-center justify-center">
                {bests2.map((best) => (
                  <div className="">
                    <div>
                      <img src={best.src}></img>
                      <div className="flex flex-col gap-[10px] pt-[25px] px-[25px] pb-[35px]">
                        <h5 className="font-bold text-base text-text-color">
                          {best.heading}
                        </h5>
                        <a
                          href="#"
                          className="font-bold text-sm text-second-text"
                        >
                          {best.subHeading}
                        </a>
                        <div className="flex gap-[5px] py-[5px] px-[3px] font-bold text-base">
                          <h5 className="text-muted-color">{best.price}</h5>
                          <h5 className="text-secondary-1">{best.pricebold}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCards;
