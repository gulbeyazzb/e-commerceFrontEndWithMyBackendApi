import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Spinner } from "@material-tailwind/react";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import { Dialog, Card } from "@material-tailwind/react";
import {
  getDistrictsOfEachCity,
  getCityNames,
  getNeighbourhoodsByCityCodeAndDistrict,
  getCityCodes,
} from "turkey-neighbourhoods";
import {
  fetchAddressThunkAction,
  setAddressThunkAction,
  setBillingAddress,
  setSelectedAddress,
} from "../store/actions/shoppingCartAction";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import OrderSummary from "../components/OrderSummary";
import axios from "axios";

const OrderPage = () => {
  const dispatch = useDispatch();
  const [spinner, setSpinner] = useState(false);
  const [newAddress, setNewAddress] = useState(false);
  const addresses = useSelector((store) => store.shoppingCart.address);
  const [edittedAddress, setEdittedAddress] = useState({
    title: "",
    name: "",
    surname: "",
    phone: "",
    city: "",
    district: "",
    neighborhood: "",
    address: "",
  });

  const cities = getCityNames();
  const districts = getDistrictsOfEachCity();
  const codes = getCityCodes();
  const [districtsOfCity, setDistrictsOfCity] = useState([districts["01"]]);
  const [cityCode, setCityCode] = useState("01");
  const [neighborhood, setNeighborhood] = useState(["Akpınar Mah"]);
  const cityDistrictNeighborhoodObj = {};
  cities.forEach((city, i) => {
    cityDistrictNeighborhoodObj[codes[i]] = city;
  });
  const billingAddress = useSelector(
    (store) => store.shoppingCart.billingAddress
  );

  const clickHandleCity = (e) => {
    const value = e.target.value;
    setCityCode(value);
    setDistrictsOfCity(districts[value]);
  };

  const districtHandle = (e) => {
    setNeighborhood(
      getNeighbourhoodsByCityCodeAndDistrict(cityCode, e.target.value)
    );
  };

  const selectAddressHandle = (e) => {
    dispatch(setSelectedAddress(e.target.id));
    axios
      .get(`http://localhost:8888/address/${e.target.id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => dispatch(setBillingAddress(res.data)));
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onFormSubmit = (formData) => {
    const cityName = cityDistrictNeighborhoodObj[formData.city];
    const postData = {
      title: formData.title,
      name: formData.name,
      surname: formData.surname,
      phone: formData.phone,
      address: formData.address,
      city: cityName,
      district: formData.district,
      neighborhood: formData.neighborhood,
    };
    setSpinner(true);
    dispatch(setAddressThunkAction(postData));
    setTimeout(() => {
      setNewAddress(false);
      setSpinner(false);
    }, 1000);
  };

  const editAddress = (address) => {
    setNewAddress(true);
    setEdittedAddress(address);
  };

  useEffect(() => {
    for (const key in edittedAddress) {
      setValue(key, edittedAddress[key], {
        shouldValidate: true,
      });
    }
  }, [edittedAddress]);

  useEffect(() => {
    dispatch(fetchAddressThunkAction());
  }, [newAddress]);

  useEffect(() => {
    getCityNames();
    getDistrictsOfEachCity();
    getCityCodes();
  }, []);

  return (
    <div className="w-[1150px] mx-auto flex justify-between">
      <div className="w-3/4 m-auto me-2 sm:py-10 ">
        <ToastContainer />

        <div className="ms-16 flex justify-center gap-1 h-[140px]">
          {/* ----------------------------------ADDRESS HEADER------------------------------------ */}
          <div className=" border border-b-4 border-b-orange-700 border-gray-400 text-gray-600 pt-3 bg-gray-100 shadow-lg p-3 rounded-md text-xl w-1/2  ">
            <h1 className="text-lg font-extrabold text-orange-700">
              Address Info
            </h1>

            <div className="flex flex-col text-xs">
              <div className="flex justify-between items-center">
                <h5 className=" font-bold flex items-center text-black gap-1">
                  <i className="bx bxs-user text-orange-700 h-full text-lg"></i>{" "}
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

          {/* ----------------------------------PAYMENT HEADER------------------------------------ */}
          <NavLink
            to="/payment"
            className="w-1/2 border border-gray-400 text-gray-600 pt-3 bg-gray-300 shadow-lg p-6 rounded-md text-lg "
          >
            <h1 className="text-lg font-extrabold text-gray-600">Payment</h1>
            <div className="flex flex-col gap-4 ">
              <h5 className="py-2 text-xs font-bold  text-gray-500">
                You can make your payment safely by{" "}
                <span className="text-black">Debit/Credit Card</span> or{" "}
                <span className="text-black">Shopping Credit.</span>
              </h5>
            </div>
          </NavLink>
        </div>

        {/* ----------------------SAVED ADDRESSES------------------------------------------------------------------------------ */}
        <div className="ms-16 my-8 shadow-xl shadow-blue-gray-300 border-light-green-50">
          <h1 className="text-lg font-extrabold p-4">Delivery Address</h1>

          {addresses?.length == 0 && (
            <div className="flex justify-center">
              <button
                className="border border-gray-400 text-gray-600 pt-3 bg-gray-100 shadow-lg p-20 rounded-md text-xl w-[47%] cursor-pointer text-center"
                formNoValidate="formnovalidate"
                disabled={spinner}
                onClick={() => setNewAddress(true)}
              >
                {spinner ? (
                  <Spinner className="text-center" />
                ) : (
                  "Add New Address"
                )}
              </button>
            </div>
          )}

          <div className="flex flex-wrap justify-between items-center relative box-border px-6 pb-10 gap-4">
            {addresses?.length > 0 && (
              <button
                className="border border-gray-400 text-gray-600 bg-gray-100 shadow-lg rounded-md text-xl w-[47%] cursor-pointer text-center h-[110px] box-border"
                formNoValidate="formnovalidate"
                disabled={spinner}
                onClick={() => setNewAddress(true)}
              >
                {spinner ? (
                  <Spinner className="text-center" />
                ) : (
                  "Add New Address"
                )}
              </button>
            )}
            {addresses?.map((address) => (
              <label
                className="w-[47%] box-border relative "
                htmlFor={address?.id}
              >
                <div className="flex justify-between">
                  <label className="flex gap-1 items-center text-base">
                    <input
                      type="radio"
                      name="address"
                      value={address?.title}
                      id={address?.id}
                      onClick={selectAddressHandle}
                    />
                    {address?.title}
                  </label>
                  <button id={address?.id} onClick={() => editAddress(address)}>
                    Edit
                  </button>
                </div>

                <div htmlFor={address?.id} className="h-[110px] box-border">
                  <div className="flex flex-col gap-3 text-gray-600  bg-gray-100 shadow-lg rounded-md p-4">
                    <div className="flex justify-between items-center">
                      <h5 className=" font-bold text-sm flex items-center text-black gap-1">
                        <i className="bx bxs-user text-orange-700 h-full text-sm"></i>{" "}
                        {address?.name + " " + address?.surname}
                      </h5>
                      <h5 className=" font-bold text-sm flex items-center text-black gap-1">
                        <i className="bx bxs-phone h-full text-sm"></i>{" "}
                        {address?.phone.slice(0, 3) +
                          "**********" +
                          address?.phone.slice(8, 10)}
                      </h5>
                    </div>
                    <div className="flex flex-col justify-start">
                      <p className="text-xs ">{address?.address}</p>
                      <span className=" text-xs  ">
                        {address?.district + "/" + address?.city}
                      </span>
                    </div>
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* ----------------------FORM----------------------------------------------------------------------------------- */}
        <Dialog
          size="md"
          className="shadow-none bg-transparent"
          open={newAddress}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
        >
          <Card className="w-full">
            <i
              className="bx bx-x text-red-800 text-3xl cursor-pointer text-center"
              onClick={() => setNewAddress(false)}
            ></i>
            <form
              onSubmit={handleSubmit(onFormSubmit)}
              className="flex flex-col px-2 py-2 "
            >
              <div className="flex flex-col sm:w-4/4 w-full">
                <div className=" flex flex-col ">
                  <label className="font-bold text-xl p-3">Address Title</label>
                  <input
                    autoFocus
                    placeholder="Address Title"
                    className="p-4 rounded-md border border-[#DADADA] text-black"
                    {...register("title")}
                  />
                </div>
              </div>

              <div className="flex justify-between gap-1">
                <div className=" flex flex-col sm:w-2/3 w-full">
                  <label className="font-bold text-xl p-3">Name</label>
                  <input
                    placeholder="Name"
                    className="p-4 rounded-md border border-[#DADADA] text-black"
                    type="text"
                    {...register("name", {
                      required: "Name is required!",
                      minLength: {
                        value: 3,
                        message: "At least 3 char is must be",
                      },
                    })}
                    invalid={!!errors.name?.message}
                  />
                  <span className="text-red-600">{errors.name?.message}</span>
                </div>
                <div className=" flex flex-col sm:w-2/3 w-full">
                  <label className="font-bold text-xl p-3">Surname</label>
                  <input
                    placeholder="Surname"
                    className="p-4 rounded-md border border-[#DADADA] text-black"
                    type="text"
                    {...register("surname", {
                      required: "surname is required!",
                      minLength: {
                        value: 3,
                        message: "At least 3 char is must be",
                      },
                    })}
                    invalid={!!errors.surname?.message}
                  />
                  <span className="text-red-600">
                    {errors.surname?.message}
                  </span>
                </div>
              </div>

              <div className="flex justify-between gap-1">
                <div className=" flex flex-col sm:w-2/3 w-full ">
                  <label className="font-bold text-xl p-3">Phone</label>
                  <input
                    placeholder="555 555 55 55"
                    className={`p-4 rounded-md border border-[#DADADA] text-black`}
                    type="text"
                    {...register("phone", {
                      required: "phone is required.",
                      maxLength: {
                        value: 10,
                        message: "Must be at most 10 characters",
                      },
                    })}
                  />
                  <div className="text-red-600 invalid-feedback">
                    {errors.phone?.message}
                  </div>
                </div>
                <div className="sm:w-2/3 w-full flex flex-col">
                  <label className="font-bold text-xl p-3">City</label>
                  <select
                    className="w-[300px] p-5 rounded-md border border-[#DADADA] text-black"
                    {...register("city")}
                    // onClick={(e) => changeOptionHandle(e)}
                    onChange={clickHandleCity}
                  >
                    <option
                      value="default"
                      disabled
                      className="w-[300px] text-lg font-bold"
                    >
                      Choose a city
                    </option>
                    {codes?.map((code, i) => (
                      <option
                        key={i}
                        value={code}
                        id={code}
                        className="w-[300px] text-lg font-bold"
                      >
                        {cityDistrictNeighborhoodObj[code]}
                      </option>
                    ))}
                  </select>
                  <div className="text-red-600">{errors.city?.message}</div>
                </div>
              </div>

              <div className="flex justify-between gap-1">
                <div className="sm:w-2/3 w-full flex flex-col ">
                  <label className="font-bold text-xl p-3">District</label>
                  <select
                    className="w-[250px] p-5 rounded-md border border-[#DADADA] text-black"
                    {...register("district")}
                    onChange={districtHandle}
                  >
                    <option
                      value="default"
                      disabled
                      className="w-[300px] text-lg font-bold"
                    >
                      Choose a district
                    </option>
                    {districtsOfCity?.map((district, i) => (
                      <option
                        key={i}
                        value={district}
                        className="w-[250px] text-lg font-bold"
                      >
                        {district}
                      </option>
                    ))}
                  </select>
                  <div className="text-red-600">{errors.district?.message}</div>
                </div>
                <div className="sm:w-2/3 w-full flex flex-col ">
                  <label className="font-bold text-xl p-3">Neighborhood</label>
                  <select
                    placeholder="Neighborhood"
                    className="w-[340px] p-5 rounded-md border border-[#DADADA] text-black"
                    {...register("neighborhood")}
                  >
                    <option
                      value="default"
                      className="w-[300px] text-lg font-bold"
                      disabled
                    >
                      Choose a neighborhood
                    </option>
                    {neighborhood?.map((n, i) => (
                      <option
                        key={i}
                        value={n}
                        className="w-[330px] text-lg font-bold"
                      >
                        {n}
                      </option>
                    ))}
                  </select>
                  <div className="text-red-600">
                    {errors.neighborhood?.message}
                  </div>
                </div>
              </div>

              <div className="sm:w-4/4 w-full flex flex-col ">
                <label className="font-bold text-xl p-3">Address</label>
                <input
                  type="text"
                  placeholder="address"
                  className="p-4 rounded-md border border-[#DADADA] text-black"
                  {...register("address", {
                    required: "Address is required!",
                  })}
                  invalid={!!errors.address?.message}
                />
                <div className="text-red-600">{errors.address?.message}</div>
              </div>

              <button
                className="flex justify-center hover:border-orange-700 hover:border hover:text-black bg-orange-700 text-white px-6 py-3 rounded-md text-xl  mt-6 hover:bg-white cursor-pointer text-center"
                type="submit"
                formNoValidate="formnovalidate"
                disabled={spinner}
              >
                {spinner ? <Spinner className="text-center" /> : "Submit"}
              </button>
            </form>
          </Card>
        </Dialog>
      </div>
      <OrderSummary />
    </div>
  );
};

export default OrderPage;
