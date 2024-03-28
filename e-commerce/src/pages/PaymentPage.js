import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { API } from "../api/api";
import {
  fetchAddressThunkAction,
  setAddressThunkAction,
  setSelectedAddress,
} from "../store/actions/shoppingCartAction";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Payment from "../components/Payment";
import OrderSummary from "../components/OrderSummary";
import axios from "axios";
import ConfirmOrder from "../components/ConfirmOrder";

const PaymentPage = () => {
  const [spinner, setSpinner] = useState(false);
  const [city, setCity] = useState(true);
  const [newAddress, setNewAddress] = useState(false);
  const dispatch = useDispatch();
  const addresses = useSelector((store) => store.shoppingCart.address);
  const selectedAddress = useSelector(
    (store) => store.shoppingCart.selectedAddress[0]
  );
  const history = useHistory();
  const billingAddress = useSelector(
    (store) => store.shoppingCart.billingAddress
  );

  const {
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      name: "",
      surname: "",
      phone: "",
      city: "",
      district: "",
      neighborhood: "",
      address: "",
    },
    mode: "onChange",
  });

  const onFormSubmit = (formData) => {
    setSpinner(true);
    dispatch(setAddressThunkAction(formData));
    setTimeout(() => {
      setNewAddress(false);
      setSpinner(false);
    }, 1000);
  };

  const selectAddressHandle = (e) => {
    dispatch(setSelectedAddress(e.target.id));
    setTimeout(() => {
      history.push("/payment");
    }, 2000);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8888/user/address", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => setSelectedAddress(res.data[0]));
  }, []);

  useEffect(() => {
    dispatch(fetchAddressThunkAction());
  }, [newAddress]);

  return (
    <div className="w-[1150px] mx-auto flex justify-between">
      <div className="w-[105%] me-2 sm:py-10 ">
        <ToastContainer />
        {/* ----------------------ADDRESS OR PAYMENT HEADER SECTION--------------------------------------------------- */}
        <div className="ms-16 flex justify-center gap-1 h-[140px]">
          <NavLink
            to="/order"
            className="border border-b-4 pt-3  shadow-lg p-3 rounded-md text-lg w-1/2 border-gray-400 text-gray-600  bg-gray-300  "
          >
            <h1 className="text-lg font-extrabold text-gray-700">
              Address Info
            </h1>
            <div className="flex flex-col text-xs">
              <div className="flex justify-between items-center">
                <h5 className=" font-bold flex items-center text-black gap-1">
                  <i className="bx bxs-user text-gray-700 h-full text-lg"></i>{" "}
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
          </NavLink>
          <div className="cursor-pointer border border-b-4 border-b-orange-700 border-gray-400 text-gray-600 pt-3 bg-gray-100 shadow-lg p-6 rounded-md w-1/2  ">
            <h1 className="text-lg font-extrabold text-orange-700">Payment</h1>
            <div className="flex flex-col ">
              <h5 className="py-2 text-xs font-bold  text-gray-500">
                You can make your payment safely by{" "}
                <span className="text-black">Debit/Credit Card</span> or{" "}
                <span className="text-black">Shopping Credit.</span>
              </h5>
            </div>
          </div>
        </div>
        <Payment selectAddressHandle={selectAddressHandle} />
      </div>
      <ConfirmOrder />
    </div>
  );
};

export default PaymentPage;
