import { Link } from "react-router-dom";
import { products } from "../../mocks/productList/products";
import { animateScroll as scroll } from "react-scroll";
import { useSelector } from "react-redux";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const BestSeller = () => {
  const products = useSelector((store) => store.product.productList);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="bg-[#FAFAFA]">
      <div className="flex flex-col items-center sm:items-start gap-6 sm:w-[1050px] mx-auto pt-12">
        <div>
          <h3
            id="section-title"
            className="font-bold sm:text-3xl text-2xl text-[#252B42]"
          >
            BESTSELLER PRODUCTS
          </h3>
        </div>
        <hr className="text-[#ECECEC]" />

        {/* WEB DESİGN */}
        <div className="hidden sm:flex flex-wrap gap-[30px]">
          {products?.map((product) => (
            <Link
              to={`product/${product.id}/${product.name
                .toLowerCase()
                .replaceAll(" ", "-")} `}
              className="flex flex-col text-center gap-[2rem] mb-10 justify-center items-center "
              onClick=""
              key={product.id}
              id={product.id}
            >
              <Card className="flex flex-col w-80 h-[35rem]  " key={product.id}>
                <div className=" hover:brightness-50 rounded-md justify-center items-center w-80 h-[320px] line-clamp-1">
                  <img
                    src={product.image}
                    alt="card-image"
                    className=" rounded-xl h-full w-full object-contain items-center line-clamp-1"
                  />
                </div>

                <CardBody className="line-clamp-2">
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-2 line-clamp-4 font-normal text-base"
                    id={product.name}
                  >
                    {product.name}
                  </Typography>
                  {/* <Typography className="text-start line-clamp-1">
                        {product.description}
                      </Typography> */}
                  <Typography className="flex flex-col  font-bold text-orange-800 line-clamp-1">
                    {" "}
                    {product.price}₺
                    <div>
                      <button>
                        <i className="bx bxs-circle text-primary-color"></i>
                      </button>
                      <button>
                        <i className="bx bxs-circle text-[#23856D]"></i>
                      </button>
                      <button>
                        <i className="bx bxs-circle text-[#E77C40]"></i>
                      </button>
                      <button>
                        <i className="bx bxs-circle text-[#252B42]"></i>
                      </button>
                    </div>
                  </Typography>
                </CardBody>
                <CardFooter className="flex justify-between gap-2 line-clamp-1">
                  <div>
                    {" "}
                    <select className="w-32 p-4 rounded-md border border-[#DADADA] text-black">
                      <option
                        key="worstRated"
                        value="worstRated"
                        className=" text-lg font-bold"
                      >
                        M
                      </option>
                      <option
                        key="bestRated"
                        value="bestRated"
                        className=" text-lg font-bold"
                      >
                        S
                      </option>
                      <option
                        key="priceAsc"
                        value="priceAsc"
                        className=" text-lg font-bold"
                      >
                        L
                      </option>
                      <option
                        key="priceDesc"
                        value="priceDesc"
                        className=" text-lg font-bold"
                      >
                        XL
                      </option>
                    </select>
                  </div>
                  <Button className=" bg-gray-800">Sepete Ekle</Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>

        {/* MOBILE DESİGN */}
        <div className="sm:hidden flex flex-wrap justify-between">
          {products?.map((product) => (
            <Card
              className="flex flex-col w-[200px] px-2 items-between mb-3"
              key={product.id}
            >
              {" "}
              <Link
                to={`/product/${product.id}/${product.name
                  .toLowerCase()
                  .replaceAll(" ", "-")} `}
                key={product.id}
                id={product.id}
              >
                <div className=" hover:brightness-50 rounded-md line-clamp-1">
                  <img
                    src={product.image}
                    alt="card-image"
                    className="w-full object-center h-60 object-cover items-center line-clamp-1"
                  />
                </div>
              </Link>
              <CardBody className="flex flex-col line-clamp-2 gap-1">
                <Typography className="text-start line-clamp-1">
                  {product.description}
                </Typography>
                <Typography className="flex font-bold text-orange-800 line-clamp-1">
                  {" "}
                  <div>
                    <button>
                      <i className="bx bxs-circle text-primary-color"></i>
                    </button>
                    <button>
                      <i className="bx bxs-circle text-[#23856D]"></i>
                    </button>
                    <button>
                      <i className="bx bxs-circle text-[#E77C40]"></i>
                    </button>
                    <button>
                      <i className="bx bxs-circle text-[#252B42]"></i>
                    </button>
                  </div>
                </Typography>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-2 line-clamp-4 font-normal text-base"
                  id={product.rating}
                >
                  <div className="flex gap-2">
                    <i className="bx bxs-star text-yellow-600"></i>
                    <i className="bx bxs-star text-yellow-600"></i>
                    <i className="bx bxs-star text-yellow-600"></i>
                    <i className="bx bxs-star text-yellow-600"></i>
                    <span className="font-bold text-xs text-[#737373]">
                      {" "}
                      ({product?.rating})
                    </span>
                  </div>
                </Typography>
                <span className="font-bold text-orange-800 ">
                  {product.price}₺
                </span>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
export default BestSeller;
