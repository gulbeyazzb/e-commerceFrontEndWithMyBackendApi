import NavBar from "./Navbar";
import PageContent from "./PageContent";
import Footer from "../layouts/Footer";

const Main = ({}) => {
  return (
    <div className=" font-['Montserrat',sans-serif]">
      <NavBar />
      <PageContent />
      <Footer />
    </div>
  );
};

export default Main;
