import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {
  resetCartListAction,
  setOrderData,
  setOrderedProductsThunkAction,
} from "../store/actions/shoppingCartAction";
import { toast } from "react-toastify";

const ConfirmOrder = () => {
  const dispatch = useDispatch();
  const { totalAmount } = useSelector((store) => store.shoppingCart);
  const cartList = useSelector((store) => store.shoppingCart.cartList);
  const billingAddress = useSelector(
    (store) => store.shoppingCart.billingAddress
  );
  const payment = useSelector((store) => store.shoppingCart.orderCard);

  const history = useHistory();
  const confirmOrderClick = () => {
    const orderData = {
      cardNumber: payment.cardNumber,
      cardMonth: payment.month,
      cardYear: payment.year,
      cardCvv: payment.cvv,
      price: totalAmount.toFixed(2),
      addressId: billingAddress.id,
      products: cartList.map((product) => {
        return {
          image: product.image,
          id: product.id,
          sellCount: product.sellCount,
          description: product.description,
        };
      }),
      orderDate: new Date().toDateString(),
      userName: billingAddress.name,
    };
    console.log("orderDatao", orderData);
    axios
      .post("http://localhost:8888/order/", orderData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        toast.success("Order has been confirmed successfully");
        dispatch(setOrderData(res.data));
        dispatch(resetCartListAction());
        setTimeout(() => {
          history.push("/successfull");
        }, 1000);
      });
  };

  useEffect(() => {
    dispatch(setOrderedProductsThunkAction(cartList));
  }, []);

  return (
    <div className="w-96 mx-auto sm:py-10 ">
      <div className="flex flex-col gap-4 text-gray-600 pt-3 bg-white shadow-lg p-6">
        <h5 className="py-3 font-bold text-sm text-black">ORDER SUMMARY :</h5>
        <div className="flex justify-between">
          <span className="text-sm text-center ">Cart Total :</span>
          <span className=" text-sm text-black font-bold ">
            {totalAmount.toFixed(2)} TL
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-center ">Shipping Cost :</span>
          <span className=" text-sm text-black font-bold ">30 TL</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-start w-2/3">
            Free shipping for orders of 150 TL and above
          </span>
          <span className=" text-sm text-orange-700 font-bold ">-30 TL</span>
        </div>
        <hr className=" w-full text-white font-extrabold text-5xl" />
        <div className="flex justify-between">
          <span className="text-sm text-start w-2/3 text-black font-bold ">
            TOTAL :
          </span>
          <span className=" text-sm text-orange-700 font-bold ">
            {totalAmount?.toFixed(2)} TL
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-start w-2/3 text-black font-bold ">
            Address :
          </span>
          <div className="flex flex-col text-xs">
            <div className="flex justify-between items-center">
              <h5 className=" font-bold flex items-center text-black gap-1">
                {billingAddress?.name + " " + billingAddress?.surname}
              </h5>
              <h5 className=" font-bold flex items-center text-black gap-1">
                <i className="bx bxs-phone h-full text-lg"></i>{" "}
                {billingAddress?.phone?.slice(0, 3) +
                  "**********" +
                  billingAddress?.phone?.slice(8, 10)}
              </h5>
            </div>
            <div className="flex flex-col">
              <p className=" ">{billingAddress?.address}</p>
              <span className=" ">
                {billingAddress?.district + "/" + billingAddress?.city}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-start w-2/3 text-black font-bold ">
            Payment Method :
          </span>
          <div className="flex flex-col gap-4 text-gray-600  bg-gray-100 shadow-lg rounded-md p-4">
            <div className="flex flex-col justify-end text-end">
              <p className="text-xs ">{payment.cardNumber}</p>
              <span className=" text-xs  ">
                {payment.month} / {payment.year}
              </span>
            </div>
          </div>
        </div>
        <button
          className="h-full w-full bg-orange-800 text-white p-4 rounded-md"
          onClick={confirmOrderClick}
        >
          CONFIRM ORDER
        </button>
      </div>
    </div>
  );
};
export default ConfirmOrder;
