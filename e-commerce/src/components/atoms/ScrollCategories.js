import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useQueryParams from "../../hooks/useQueryParams";
import {
  NavLink,
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import { fetchCategoryActionCreator } from "../../store/actions/globalAction";
import { useDispatch, useSelector } from "react-redux";

const Example = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoryActionCreator());
  }, []);

  return (
    <div className="bg-neutral-800 py-0 my-0">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const cards = useSelector((store) => store.global.categories);

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-[70vh] items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  const { search } = useLocation();

  return (
    <NavLink
      className="py-0 my-0 "
      to={`/v1/products/${
        card.code.includes("k:")
          ? `kadın=${card.code.slice(2, card.code.length)}`
          : `erkek=${card.code.slice(2, card.code.length)}`
      }${search}`}
      key={card.id}
    >
      <div
        key={card.id}
        className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
      >
        <div
          style={{
            backgroundImage: `url(${card.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        ></div>
        <div className="absolute inset-0 z-10 grid place-content-center">
          <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
            {card.title}
          </p>
        </div>
      </div>
    </NavLink>
  );
};

export default Example;
