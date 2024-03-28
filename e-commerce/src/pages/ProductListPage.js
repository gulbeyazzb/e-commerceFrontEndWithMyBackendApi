import Clients from "../components/ProductList/Clients";
import { FilterComponent } from "../components/ProductList/FilterComponent";
import ProductListShopCards from "../components/ProductList/ProductListShopCards";
import Products from "../components/ProductList/Products";
import ProductHeader from "../components/ProductList/ProductHeader";
import ScrollCategories from "../components/atoms/ScrollCategories";

const ProductListPage = () => {
  return (
    <>
      <ProductHeader />
      <ProductListShopCards />
      {/* <ScrollCategories /> */}
      <FilterComponent />
      <Clients />
    </>
  );
};
export default ProductListPage;
