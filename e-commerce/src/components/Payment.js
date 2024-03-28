import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCreditCardThunkAction,
  fetchCreditCardByIdThunkAction,
  fetchCreditCardThunkAction,
} from "../store/actions/shoppingCartAction";
import maximumIMG from "../Assets/card/maxımum.jpg";
import visaIMG from "../Assets/card/indir.png";
import vakifIMG from "../Assets/card/VakifBank-Logo.png";

const Payment = ({ selectAddressHandle }) => {
  const [creditOpen, setCreditOpen] = useState(false);
  const [newCard, setNewCard] = useState(false);
  const [addCard, setAddCard] = useState(false);
  const [cardOpen, setCardOpen] = useState(true);
  const cards = useSelector((store) => store.shoppingCart.creditCard);
  const [installments, setInstallments] = useState([
    { insType: "Single payment", interest: 0, insNu: 1 },
    { insType: "3 installments", interest: 0.1, insNu: 3 },
    { insType: "6 installments", interest: 0.2, insNu: 6 },
    { insType: "9 installments", interest: 0.4, insNu: 9 },
  ]);

  const dispatch = useDispatch();

  const date = new Date().getFullYear();
  const years = ["Year", date];
  for (let i = 1; i < 41; i++) {
    years.push(date + i);
  }

  const months = ["Month", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      cardNumber: "",
      month: "",
      year: "",
      cvv: "",
      secure: false,
    },
    mode: "onChange",
  });

  const clickHandlePaymentMethod = (e) => {
    if (e.target.id == "credit") {
      setCreditOpen(true);
      setCardOpen(false);
    }
    if (e.target.id == "card") {
      setCreditOpen(false);
      setCardOpen(true);
    }
  };

  const submitHandle = (formData) => {
    setAddCard(false);
    dispatch(addCreditCardThunkAction(formData));
    setNewCard(true);
  };

  useEffect(() => {
    dispatch(fetchCreditCardThunkAction());
  }, [newCard]);

  const selectCardHandle = (e) => {
    const id = e.target.id;
    if (id == 9) {
      setInstallments([
        { insType: "Single payment", interest: 0, insNu: 1 },
        { insType: "3 installments", interest: 0.05, insNu: 3 },
        { insType: "6 installments", interest: 0.3, insNu: 6 },
        { insType: "9 installments", interest: 0.5, insNu: 9 },
      ]);
    } else {
      setInstallments([
        { insType: "Single payment", interest: 0, insNu: 1 },
        { insType: "3 installments", interest: 0.1, insNu: 3 },
        { insType: "6 installments", interest: 0.2, insNu: 6 },
        { insType: "9 installments", interest: 0.4, insNu: 9 },
      ]);
    }
    dispatch(fetchCreditCardByIdThunkAction(id));
  };

  const totalAmount = useSelector((store) => store.shoppingCart.totalAmount);

  return (
    <div className=" ms-16 flex flex-col my-8">
      <label className="border border-b-2 p-4 text-black font-bold text-lg ">
        <input
          className="me-4"
          type="radio"
          name="address"
          id="card"
          onClick={clickHandlePaymentMethod}
          defaultChecked
        />
        Pay By Card
        <p className="text-xs">
          You chose to pay by card. You can make your payment safely using Debit
          or Credit Card.
        </p>
      </label>

      {cardOpen && (
        <div className="shadow-lg border-gray-400 text-gray-600 p-6 flex justify-between gap-4">
          <div className="w-[47%] ">
            <div className="flex justify-between">
              <p className="font-bold text-black text-lg">Card Information</p>
              <button
                className="underline text-xs"
                onClick={() => setAddCard(!addCard)}
              >
                {addCard ? "Pay with my registered card" : "Pay by other card"}
              </button>
            </div>

            {addCard && (
              <div className="py-4">
                <form
                  className="flex flex-col gap-2"
                  onSubmit={handleSubmit(submitHandle)}
                >
                  <label className="flex flex-col ">
                    {" "}
                    Card Number
                    <input
                      type="text"
                      className="p-2 border-none rounded-md bg-gray-100 focus:border-none"
                      {...register("cardNumber")}
                    ></input>
                  </label>
                  <div className="flex justify-between ">
                    <div>
                      <label className="">Expiration Date</label>
                      <div className="flex gap-12">
                        <select
                          className="p-[6px] rounded-md bg-gray-100"
                          {...register("month")}
                        >
                          {months?.map((month, i) => (
                            <option key={i} value={month} className="">
                              {month}
                            </option>
                          ))}
                        </select>
                        <select
                          className="p-[6px] rounded-md bg-gray-100"
                          {...register("year")}
                        >
                          {years?.map((year, i) => (
                            <option key={i} value={year} className="">
                              {year}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <label className="">CVV</label>
                      <div className="w-1/3">
                        {" "}
                        <input
                          type="text"
                          className="bg-gray-100 p-1 rounded-md w-16"
                          {...register("cvv", {
                            required: "CVV is required!",
                            minLength: {
                              value: 3,
                            },
                            maxLength: {
                              value: 3,
                            },
                          })}
                        />
                      </div>
                    </div>
                  </div>

                  <label className="flex gap-1">
                    <input
                      type="checkbox"
                      className="bg-gray-100 rounded-md w-4 accent-orange-700 "
                      {...register("secure")}
                    ></input>
                    I want to pay with 3D Secure
                  </label>
                  <button
                    type="submit"
                    className="w-20 p-2 text-start border-b-4 border-b-orange-700 hover:text-orange-300 text-orange-700 "
                  >
                    Submit
                  </button>
                </form>
              </div>
            )}

            {!addCard && (
              <div className=" flex justify-between flex-wrap">
                {cards?.map((card, i) => (
                  <label
                    className="w-[46%] box-border relative "
                    htmlFor={card.id}
                  >
                    <div className="flex justify-between">
                      <label className="flex gap-1 text-sm">
                        <input
                          type="radio"
                          name="card"
                          value="WORLD Card"
                          id={card.id}
                          onClick={selectCardHandle}
                        />
                        İŞBank Card
                      </label>
                    </div>

                    <div htmlFor={card.id} className=" box-border">
                      <div className="flex flex-col gap-4 text-gray-600  bg-gray-100 shadow-lg rounded-md p-4">
                        <div className="flex justify-between items-center">
                          <img src={maximumIMG} className="w-16" />
                          <img src={visaIMG} className="w-12" />
                        </div>

                        <div className="flex flex-col justify-end text-end">
                          <p className="text-xs ">{card.cardNumber}</p>
                          <span className=" text-xs  ">
                            {card.month} / {card.year}
                          </span>
                        </div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            )}
          </div>

          <div className="border border-l-2 border-l-gray-200 h-96 "></div>

          <div className="w-[47%] ">
            <div className="flex flex-col mb-3">
              <p className="font-bold text-black text-lg">Payment Options</p>
              <span className="text-xs ">
                Choose the installment option suitable for your card
              </span>
            </div>

            <div className=" flex justify-between">
              <div className="flex flex-col w-1/2">
                <h1 className=" bg-gray-50 text-black text-xs border border-gray-300 rounded-tl-md  p-4">
                  Number of installments
                </h1>

                {installments?.map((ins, i) => (
                  <label
                    key={i}
                    className="border border-gray-300 p-4 gap-1 flex  text-xs"
                  >
                    <input
                      type="radio"
                      name="installment"
                      value={ins.insType}
                      id={i}
                    />
                    {ins.insType}
                  </label>
                ))}
              </div>

              <div className="w-1/2">
                <h1 className="bg-gray-50 text-black text-xs border border-gray-300 p-4">
                  Monthly payment
                </h1>
                {installments?.map((ins, i) => (
                  <div
                    key={i}
                    className="border border-gray-300 p-4 gap-1 flex rounded-br-md text-xs"
                  >
                    {totalAmount == 0
                      ? 0
                      : (
                          (totalAmount + totalAmount * ins.interest) /
                          ins.insNu
                        ).toFixed(2)}
                    TL
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <label className=" border border-b-2 p-4 text-black font-bold text-lg ">
        <input
          className="me-4"
          type="radio"
          name="address"
          id="credit"
          onClick={clickHandlePaymentMethod}
        />
        Pay By Shopping Credit
      </label>
    </div>
  );
};

export default Payment;
