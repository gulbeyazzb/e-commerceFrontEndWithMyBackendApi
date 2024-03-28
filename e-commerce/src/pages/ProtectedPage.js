import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const ProtectedPage = ({ PageComponent, fromURL }) => {
  const history = useHistory();

  const checkUserLoggedIn = () => {
    if (localStorage.getItem("token")) {
      return <PageComponent />;
    } else {
      toast.warn("Bu sayfaya devam edebilmek için login olmalısın!.");
      setTimeout(() => {
        history.push({
          pathname: "/login",
          state: { referrer: fromURL },
        });
      }, 3000);

      return (
        <div className=" text-deep-orange-900 text-2xl font-bold text-center py-28">
          Bu sayfaya devam edebilmek için login olmalısın!. Yönlendiriliyorsun..
        </div>
      );
    }
  };

  return checkUserLoggedIn();
};

export default ProtectedPage;
