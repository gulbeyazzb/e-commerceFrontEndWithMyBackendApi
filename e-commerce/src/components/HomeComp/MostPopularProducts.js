import most from "../../Assets/mostPopular/unsplash_X5BWooeO4Cw.png";
import product from "../../Assets/mostPopular/printed-summer-dress (4) 1.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function MostPopularProducts() {
  return (
    <div className="flex flex-col container m-auto justify-center items-center py-12 sm:px-20 px-0 sm:gap-4 gap-1">
      <div className="mobile-col-flex ">
        <div>
          <img className="" src={most}></img>
        </div>
        <div className="flex flex-col items-center justify-center py-20 gap-[19px] text-center bg-[#FAFAFA]">
          <h5 className="text-[#252B42] font-bold text-2xl">MOST POPULAR</h5>
          <p className="font-normal text-sm text-second-text ">
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>

          <img src={product}></img>
          <Link
            className="font-bold text-sm text-[#252B42]"
            exact
            to="/english-department"
          >
            English Department
          </Link>
          <div className="flex">
            <h5 className="font-bold text-base text-[#BDBDBD]">$16.48</h5>
            <h5 className="font-bold text-base text-[#23856D]">$16.48</h5>
          </div>
        </div>
      </div>
      <div className="mobile-col-flex sm:justify-evenly items-center ">
        <div className="flex gap-4 p-4 sm:p-0">
          <div className="text-[#E74040] font-bold text-[40px] me-2">1.</div>
          <div className="flex flex-col gap-[5px]">
            <p className="font-bold text-sm text-[#252B42]">Easy to use</p>
            <p className="font-normal text-xs text-second-text">
              Things on a very small that you have any direct
            </p>
          </div>
        </div>
        <div className="flex gap-4 p-4 sm:p-0">
          <div className="text-[#E74040] font-bold text-[40px] me-2">2.</div>
          <div className="flex flex-col gap-[5px]">
            <p className="font-bold text-sm text-[#252B42]">Easy to use</p>
            <p className="font-normal text-xs text-second-text">
              Things on a very small that you have any direct
            </p>
          </div>
        </div>
        <div className="flex gap-4 p-4 sm:p-0">
          <div className="text-[#E74040] font-bold text-[40px] me-2">3.</div>
          <div className="flex flex-col gap-[5px]">
            <p className="font-bold text-sm text-[#252B42]">Easy to use</p>
            <p className="font-normal text-xs text-second-text">
              Things on a very small that you have any direct
            </p>
          </div>
        </div>
        <div className="flex gap-4 p-4 sm:p-0">
          <div className="text-[#E74040] font-bold text-[40px] me-2">4.</div>
          <div className="flex flex-col gap-[5px]">
            <p className="font-bold text-sm text-[#252B42]">Easy to use</p>
            <p className="font-normal text-xs text-second-text">
              Things on a very small that you have any direct
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
