import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { ToastContainer } from "react-toastify";

const OrderDonePage = () => {
  const order = useSelector((store) => store.shoppingCart.order);
  const address = useSelector((store) => store.shoppingCart.billingAddress);

  return (
    <div>
      <ToastContainer />
      <div className="w-96 mx-auto sm:py-10 ">
        {order?.map((o) => (
          <div className="flex flex-col gap-4 text-gray-600 pt-3 bg-white shadow-lg p-6">
            <h5 className="py-3 font-bold text-sm text-black">ORDER </h5>
            {o?.products?.map((p) => (
              <div className="flex gap-10">
                <img src={p.image} className="w-20"></img>
                <p>{p.description}</p>
              </div>
            ))}
            <div className="flex justify-between">
              <span className="text-sm text-center ">Total :</span>
              <span className=" text-sm text-black font-bold ">
                {o?.price} TL
              </span>
            </div>
            <hr className=" w-full text-white font-extrabold text-5xl" />
            <div className="flex gap-10">
              <span className="text-sm text-start text-black font-bold ">
                Alıcı :
              </span>
              <span className=" text-sm text-orange-700 font-bold ">
                {address?.name + " " + address?.surname}
              </span>
            </div>
            <div className="flex gap-10">
              <span className="text-sm text-start text-black font-bold ">
                Address :
              </span>
              <span className=" text-sm text-orange-700 font-bold ">
                {address?.address +
                  " " +
                  address?.district +
                  "/" +
                  address?.city}
              </span>
            </div>
            <button className="h-full w-full bg-orange-800 text-white p-4 rounded-md">
              CANCEL THE ORDER
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default OrderDonePage;
