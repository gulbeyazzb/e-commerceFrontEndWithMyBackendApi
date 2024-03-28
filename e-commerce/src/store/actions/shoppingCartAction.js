import { toast } from "react-toastify";
import { API } from "../../api/api";
import axios from "axios";

export const SET_CART_LIST = "SET_CART_LIST";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";
export const SET_TOTALPRICE = "SET_TOTALPRICE";
export const SET_TOTALQUANTITY = "SET_TOTALQUANTITY";
export const UPDATE_TOTAL_AMOUNT = "UPDATE_TOTAL_AMOUNT";
export const DELETE_PRODUCT_FROM_CART = "DELETE_PRODUCT_FROM_CART";
export const FETCH_ADDRESS = "FETCH_ADDRESS";
export const SELECTED_ADDRESS = "SELECTED_ADDRESS";
export const UPDATE_ADDRESS = "UPDATE_ADDRESS";
export const ADD_CREDIT_CARD = "ADD_CREDIT_CARD";
export const SET_BILLING_ADDRESS = "SET_BILLING_ADDRESS";
export const ADD_ORDER_CARD = "ADD_ORDER_CARD";
export const RESET_CARTLIST = "RESET_CARTLIST";
export const SET_ORDER = "SET_ORDER";

export const setCartListAction = (cartList) => {
  return { type: SET_CART_LIST, payload: cartList };
};

export const setOrderData = (orderData) => {
  return { type: SET_ORDER, payload: orderData };
};

export const setTotalPriceAction = () => {
  return { type: SET_TOTALPRICE };
};

export const updateTotalPriceAction = (checkedState, id) => {
  return { type: UPDATE_TOTAL_AMOUNT, payload: checkedState, id };
};

export const deleteProductFromCartAction = (id) => {
  return { type: DELETE_PRODUCT_FROM_CART, payload: id };
};

export const setTotalQuantityAction = () => {
  return { type: SET_TOTALQUANTITY };
};

export const updateQuantityAction = (type, id) => {
  return { type: UPDATE_QUANTITY, payload: type, id };
};

export const setPaymentAction = (payment) => {
  return { type: SET_PAYMENT, payload: payment };
};

export const setAddressAction = (address) => {
  return { type: SET_ADDRESS, payload: address };
};

export const fetchAddresAction = (addresses) => {
  return { type: FETCH_ADDRESS, payload: addresses };
};

export const setSelectedAddress = (id) => {
  return { type: SELECTED_ADDRESS, payload: id };
};

export const UpdateAddressAction = (id) => {
  return { type: UPDATE_ADDRESS, payload: id };
};

export const setBillingAddress = (address) => {
  return { type: SET_BILLING_ADDRESS, payload: address };
};

export const setOrderCard = (address) => {
  return { type: ADD_ORDER_CARD, payload: address };
};

export const resetCartListAction = () => {
  return { type: RESET_CARTLIST };
};

export const setAddressThunkAction = (formData) => (dispatch) => {
  axios
    .post("http://localhost:8888/user/address", formData, {
      headers: {
        "Content-type": "application/json",
      },
    })
    .then((res) => {
      toast.success("Adress başarılı bir şekilde kaydedildi!");
    })
    .catch((err) => {
      console.error(err);
      toast.error("Adress kaydedilirken bir hata ile karşılaşıldı!");
    });
};

export const fetchAddressThunkAction = () => (dispatch) => {
  axios
    .get("http://localhost:8888/user/address", {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => dispatch(setAddressAction(res.data)))
    .catch((err) => {
      console.error(err);
      toast.error("Adress çekilemedi bir hata ile karşılaşıldı!");
    });
};

export const updateQuantityThunkAction = (updateType, id) => (dispatch) => {
  dispatch(updateQuantityAction(updateType, id));
};

export const addToCartThunkAction = (addedProduct) => (dispatch) => {
  dispatch(setCartListAction(addedProduct));
};

export const addCreditCardThunkAction = (addedCard) => (dispatch) => {
  axios
    .post("http://localhost:8888/card/", addedCard, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      toast.success("Kart başarılı bir şekilde kaydedildi!");
    })
    .catch((err) => {
      console.error(err);
      toast.error("Kart kaydedilirken bir hata ile karşılaşıldı!");
    });
};

export const fetchCreditCardThunkAction = () => (dispatch) => {
  axios
    .get("http://localhost:8888/card/", {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      console.log(res.data);
      dispatch({ type: ADD_CREDIT_CARD, payload: res.data });
    })
    .catch((err) => {
      console.error(err);
      toast.error("Cart bilgileri çekilemedi!");
    });
};

export const fetchCreditCardByIdThunkAction = (cardId) => (dispatch) => {
  axios
    .get(`http://localhost:8888/card/${cardId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      console.log(res.data);
      dispatch({ type: ADD_ORDER_CARD, payload: res.data });
    })
    .catch((err) => {
      console.error(err);
      toast.error("Cart bilgileri çekilemedi!");
    });
};

export const setOrderedProductsThunkAction = (products) => (dispatch) => {
  axios.post("http://localhost:8888/orderedProducts", products, {
    headers: {
      "Content-type": "application/json",
    },
  });
};
