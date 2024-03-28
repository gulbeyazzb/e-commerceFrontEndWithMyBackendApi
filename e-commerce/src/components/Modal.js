import { Spinner } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { setAddressThunkAction } from "../store/actions/shoppingCartAction";
import { useDispatch } from "react-redux";
import { API } from "../api/api";

const Modal = ({
  spinner,
  editOpen,
  SetEditOpen,
  edittedAddress,
  codes,
  clickHandleCity,
  districtHandle,
  districtsOfCity,
  cityDistrictNeighborhoodObj,
  neighborhood,
}) => {
  const dispatch = useDispatch();

  const [addressData, setAddressData] = useState({
    title: "",
    name: "",
    surname: "",
    phone: "",
    city: "",
    district: "",
    neighborhood: "",
    address: "",
  });

  const inputChangeHandler = (event) => {
    const { value, name } = event.target; // name = "password" | "email" | "name"
    setAddressData({
      ...addressData,
      [name]: value,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const addressId = event.target.id;
    const postData = {
      title: event.target[0].value,
      name: event.target[1].value,
      surname: event.target[2].value,
      phone: event.target[3].value,
      city: event.target[4].value,
      district: event.target[5].value,
      neighborhood: event.target[6].value,
      address: event.target[7].value,
    };

    dispatch(setAddressThunkAction(postData));
    setTimeout(() => {
      SetEditOpen(false);
    }, 1000);
  };

  useEffect(() => {
    setAddressData(edittedAddress);
  }, [edittedAddress]);

  return (
    <div className="w-[2000px] ">
      {editOpen ? (
        <>
          <div className="bg-opacity-50 bg-black w-full flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 ">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => SetEditOpen(false)}
                  >
                    <span className="text-red-600 opacity-7 h-6 w-6 text-2xl block rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="w-full relative p-2 flex-auto">
                  <form
                    id={addressData?.id}
                    onSubmit={onFormSubmit}
                    className="flex flex-col "
                  >
                    <div className="flex flex-col sm:w-4/4 w-full">
                      <div className=" flex flex-col ">
                        <label className="font-bold text-xl" htmlFor="title">
                          Address Title
                        </label>
                        <input
                          onChange={inputChangeHandler}
                          htmlFor="title"
                          value={addressData?.title}
                          name="title"
                          className="p-4 rounded-md border border-[#DADADA] text-black"
                        />
                      </div>
                    </div>

                    <div className="flex justify-between gap-1">
                      <div className=" flex flex-col sm:w-2/3 w-full">
                        <label className="font-bold text-xl p-3">Name</label>
                        <input
                          value={addressData?.name}
                          onChange={inputChangeHandler}
                          name="name"
                          className="p-4 rounded-md border border-[#DADADA] text-black"
                          type="text"
                        />
                      </div>
                      <div className=" flex flex-col sm:w-2/3 w-full">
                        <label className="font-bold text-xl p-3">Surname</label>
                        <input
                          onChange={inputChangeHandler}
                          name="surname"
                          value={addressData?.surname}
                          className="p-4 rounded-md border border-[#DADADA] text-black"
                          type="text"
                        />
                      </div>
                    </div>

                    <div className="flex justify-between gap-1">
                      <div className=" flex flex-col sm:w-2/3 w-full ">
                        <label className="font-bold text-xl p-3">Phone</label>
                        <input
                          onChange={inputChangeHandler}
                          name="phone"
                          value={addressData?.phone}
                          className={`p-4 rounded-md border border-[#DADADA] text-black`}
                          type="text"
                        />
                      </div>
                      <div className="sm:w-2/3 w-full flex flex-col">
                        <label className="font-bold text-xl p-3">City</label>
                        <select
                          name="city"
                          className="p-4 rounded-md border border-[#DADADA] text-black"
                          onChange={clickHandleCity}
                          defaultValue={addressData?.city}
                        >
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
                      </div>
                    </div>

                    <div className="flex justify-between gap-1">
                      <div className="sm:w-2/3 w-full flex flex-col ">
                        <label className="font-bold text-xl p-3">
                          District
                        </label>
                        <select
                          name="district"
                          className="p-4 rounded-md border border-[#DADADA] text-black"
                          onChange={districtHandle}
                        >
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
                      </div>
                      <div className="sm:w-2/3 w-full flex flex-col ">
                        <label className="font-bold text-xl p-3">
                          Neighborhood
                        </label>
                        <select
                          name="neighborhood"
                          placeholder="Neighborhood"
                          className="w-[340px] p-5 rounded-md border border-[#DADADA] text-black"
                        >
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
                      </div>
                    </div>

                    <div className="sm:w-4/4 w-full flex flex-col ">
                      <label className="font-bold text-xl p-3">Address</label>
                      <input
                        onChange={inputChangeHandler}
                        name="address"
                        value={addressData?.address}
                        type="text"
                        className="p-4 rounded-md border border-[#DADADA] text-black"
                      />
                    </div>
                    <button
                      className="flex justify-center hover:border-orange-700 hover:border hover:text-black bg-orange-700 text-white px-6 py-3 rounded-md text-xl  mt-6 hover:bg-white cursor-pointer text-center"
                      type="submit"
                      disabled={spinner}
                    >
                      {spinner ? <Spinner className="text-center" /> : "Submit"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Modal;
