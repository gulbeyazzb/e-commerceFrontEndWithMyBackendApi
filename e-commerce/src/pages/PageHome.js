import BestSeller from "../components/HomeComp/BestSeller";
import Clients from "../components/ProductList/Clients";
import FeaturedPosts from "../components/HomeComp/FeaturedPosts";
import MostPopularProducts from "../components/HomeComp/MostPopularProducts";
import MostPopularProducts2 from "../components/HomeComp/MostPopularProducts2";
import ProductCards from "../components/HomeComp/ProductCards";
import ProductCards2 from "../components/HomeComp/ProductCards2";
import ShopCards from "../components/HomeComp/ShopCards";
import Header from "../layouts/Header";

const PageHome = () => {
  return (
    <>
      <Header />
      <ShopCards />
      <ProductCards />
      <MostPopularProducts />
      <ProductCards2 />
      <MostPopularProducts2 />
      <BestSeller />
      <Clients />
      <FeaturedPosts />
    </>
  );
};
export default PageHome;
