import React, { useEffect, useState } from "react";
import { Carousel } from "@material-tailwind/react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { API } from "../../api/api";
import {
  addToCartThunkAction,
  updateQuantityThunkAction,
} from "../../store/actions/shoppingCartAction";
import { Button } from "@material-tailwind/react";
import axios from "axios";

export default function ProductCard() {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const [image, setImage] = useState("");
  const [opacity, setOpacity] = useState(50);

  useEffect(() => {
    axios
      .get(`http://localhost:8888/v1/products/${productId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setProduct(res.data);
        setImage(res.data.image);
      });
  }, [productId]);

  const clickImageHandle = (e) => {
    setImage(e.target.src);
    setOpacity(opacity == 100 ? 50 : 100);
  };

  const cartProducts = useSelector((store) => store.shoppingCart.cartList);
  const dispatch = useDispatch();

  const addToCartClickHandle = (product) => {
    const productIndex = cartProducts.findIndex((p) => p.id === product.id);
    if (productIndex >= 0) {
      dispatch(updateQuantityThunkAction(product.id));
    } else {
      const addQuantity = { ...product, sellCount: 1 };
      dispatch(addToCartThunkAction(addQuantity));
    }
    toast.success("the product has been added to cart");
  };

  return (
    <div className="bg-[#FAFAFA] w-full pt-6">
      <div className="mobile-col-flex p-3 sm:p-0 sm:justify-center gap-4 sm:gap-28">
        <div className="flex flex-col gap-4 sm:w-[506px] sm:h-[546px] rounded">
          <Carousel
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer transition-all content-[''] z-50 ${
                      activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            <img
              src={product?.image}
              className="w-full h-full object-contain"
            />
          </Carousel>
          <div className="flex gap-4 sm:w-[219px] sm:h-[75px]">
            <img
              src={product?.image}
              className={`opacity-${opacity} w-24`}
              onClick={clickImageHandle}
            ></img>
          </div>
        </div>
        <div className="flex flex-col gap-7 ">
          <h4 className="font-normal text-xl text-[#252B42]">
            {product?.name}
          </h4>
          <div className="flex gap-2">
            <i className="bx bxs-star text-yellow-600"></i>
            <i className="bx bxs-star text-yellow-600"></i>
            <i className="bx bxs-star text-yellow-600"></i>
            <i className="bx bxs-star text-yellow-600"></i>
            <h6 className="font-bold text-xs text-[#737373]">
              {product?.rating} time rated
            </h6>
          </div>
          <h5 className="text-2xl font-bold text-[#252B42]">
            {product?.price}₺
          </h5>
          <div className="flex gap-1">
            <p className="text-[#737373] font-bold text-sm">Availability:</p>
            <p className="text-primary-color font-bold text-sm">
              {product?.stock > 0 ? "In Stock" : "No Stock"}
            </p>
          </div>
          <p className="text-[#737373] font-normal text-sm w-[340px] sm:w-[464px]">
            {product?.description}
          </p>
          <hr className="text-[#BDBDBD] border border-1" />
          <div className="flex gap-[10px]">
            <button>
              <i className="bx bxs-circle text-3xl text-primary-color"></i>
            </button>
            <button>
              <i className="bx bxs-circle text-3xl text-[#23856D]"></i>
            </button>
            <button>
              <i className="bx bxs-circle text-3xl text-[#E77C40]"></i>
            </button>
            <button>
              <i className="bx bxs-circle text-3xl text-[#252B42]"></i>
            </button>
          </div>
          <div className="flex gap-[10px]">
            <Button
              onClick={() => addToCartClickHandle(product)}
              id={productId}
              className="h-full bg-orange-800 "
            >
              Add To Cart
            </Button>
            <ToastContainer
              className="hidden sm:flex"
              position="top-center"
              autoClose={1000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
            <i className="bx bx-heart border border-1 rounded-full text-3xl w-10 text-center text-[#252B42]"></i>
            <i className="bx bx-cart border border-1 rounded-full text-3xl w-10 text-center text-[#252B42]"></i>
            <i className="bx bx-bullseye border border-1 rounded-full text-3xl w-10 text-center text-[#252B42]"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
