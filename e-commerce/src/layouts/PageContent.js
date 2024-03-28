import { Route, Switch } from "react-router-dom";
import ProductListPage from "../pages/ProductListPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import ProductPage from "../pages/ProductPage";
import TeamPage from "../pages/TeamPage";
import PricingPage from "../pages/PricingPage";
import Login from "../components/Login/Login";
import SignUp from "../components/Login/SignUp";
import CartPage from "../pages/CartPage";
import PageHome from "../pages/PageHome";
import OrderPage from "../pages/OrderPage";
import PaymentPage from "../pages/PaymentPage";
import OrderDonePage from "../components/OrderDonePage";
const PageContent = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <PageHome />
      </Route>
      <Route path="/v1/products/:gender?/:category?" exact>
        <ProductListPage />
      </Route>
      <Route path="/product/:productId/:productNameSlug" exact>
        <ProductPage />
      </Route>
      <Route path="/about" exact>
        <AboutPage />
      </Route>
      <Route path="/contact" exact>
        <ContactPage />
      </Route>
      <Route path="/team" exact>
        <TeamPage />
      </Route>
      <Route path="/pricing" exact>
        <PricingPage />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/signup" exact>
        <SignUp />
      </Route>
      <Route path="/cart" exact>
        <CartPage />
      </Route>
      <Route path="/order" exact>
        <OrderPage />
      </Route>
      <Route path="/payment" exact>
        <PaymentPage />
      </Route>
      <Route path="/successfull" exact>
        <OrderDonePage />
      </Route>
    </Switch>
  );
};
export default PageContent;
