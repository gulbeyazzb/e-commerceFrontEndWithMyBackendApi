import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import bgHeader from "../../Assets/header/shop-hero-1-product-slide-1.jpg";

export function CarouselWithContent() {
  return (
    <Carousel className="rounded h-[30rem]">
      <div className="relative h-full w-full">
        <img
          src={bgHeader}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid place-items-center bg-black/75 ">
          <div className="w-3/4 text-center md:w-2/4  flex flex-col gap-5">
            <Typography
              variant="h1"
              color="white"
              className="font-bold sm:text-6xl text-[40px] text-white text-center"
            >
              GROCERIES DELIVERY
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="w-[290px] sm:w-1/2 m-auto font-normal text-center text-white text-xl"
            >
              We know how large objects will act, but things on a small scale
              just do not act that way.
            </Typography>
            <div className="flex justify-center gap-2">
              <Link
                to="/v1/products"
                className="w-40 m-auto rounded py-[1rem] px-10 bg-orange-900 font-bold text-base text-center text-white"
              >
                Start Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={bgHeader}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid place-items-center bg-black/75 ">
          <div className="w-3/4 text-center md:w-2/4  flex flex-col gap-5">
            <Typography
              variant="h1"
              color="white"
              className="font-bold sm:text-6xl text-[40px] text-white text-center"
            >
              GROCERIES DELIVERY
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="w-[290px] sm:w-1/2 m-auto font-normal text-center text-white text-xl"
            >
              We know how large objects will act, but things on a small scale
              just do not act that way.
            </Typography>
            <div className="flex justify-center gap-2">
              <Link
                to="/product-list"
                className="w-40 m-auto rounded py-[1rem] px-10  bg-orange-900 font-bold text-base text-center text-white"
              >
                Start Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
