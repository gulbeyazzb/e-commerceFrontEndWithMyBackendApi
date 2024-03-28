import React from "react";
import NavBarDark from "../layouts/NavBarDark";
import Navbar from "../layouts/Navbar";
import ProductHeader from "../components/Product/ProductHeader";
import ProductCard from "../components/Product/ProductCard";
import ProductDescription from "../components/Product/ProductDescription";
import ProductBestSeller from "../components/Product/ProductBestSeller";
import Clients from "../components/ProductList/Clients";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const ProductPage = () => {
  return (
    <>
      <ProductHeader />
      <ProductCard />
      <ProductDescription />
      <ProductBestSeller />
      <Clients />
    </>
  );
};
export default ProductPage;
