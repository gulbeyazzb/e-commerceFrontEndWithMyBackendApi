import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";

const ProductListShopCards = () => {
  const { search } = useLocation();
  const categories = useSelector((store) => store.global.categories);
  const mostRating = categories.sort((a, b) => {
    return b.rating - a.rating;
  });

  return (
    <div className="bg-[#FAFAFA]">
      <div className=" flex justify-center">
        <div className="mobile-col-flex flex-wrap justify-center sm:gap-[10px] gap-[18px] sm:pb-12 items-center text-white text-center ">
          {mostRating.slice(0, 6).map((category) => (
            <NavLink
              to={`/v1/products/${
                category.code.includes("k:")
                  ? `kadin/${category.code.slice(2, category.code.length)}`
                  : `erkek/${category.code.slice(2, category.code.length)}`
              }${search}`}
              key={category.id}
            >
              <div className="relative hover:brightness-50">
                <img
                  className="relative z-0 sm:h-[15rem] w-full sm:w-auto px-2 sm:p-0"
                  src={category.img}
                ></img>
                <div className=" absolute top-[45%] left-[30%] ">
                  <h2 className="sm:text-lg font-bold text-5xl">
                    {category.title}
                  </h2>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListShopCards;
