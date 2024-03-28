import { ADD_ORDER_CARD, SET_CART_LIST } from "../actions/shoppingCartAction";
import { SET_PAYMENT } from "../actions/shoppingCartAction";
import { SET_ADDRESS } from "../actions/shoppingCartAction";
import { UPDATE_QUANTITY } from "../actions/shoppingCartAction";
import { SET_TOTALPRICE } from "../actions/shoppingCartAction";
import { SET_TOTALQUANTITY } from "../actions/shoppingCartAction";
import { UPDATE_TOTAL_AMOUNT } from "../actions/shoppingCartAction";
import { DELETE_PRODUCT_FROM_CART } from "../actions/shoppingCartAction";
import { SELECTED_ADDRESS } from "../actions/shoppingCartAction";
import { UPDATE_ADDRESS } from "../actions/shoppingCartAction";
import { ADD_CREDIT_CARD } from "../actions/shoppingCartAction";
import { SET_BILLING_ADDRESS } from "../actions/shoppingCartAction";
import { RESET_CARTLIST } from "../actions/shoppingCartAction";
import { SET_ORDER } from "../actions/shoppingCartAction";

const shoppingCart = {
  cartList: [],
  payment: {},
  address: [],
  selectedAddress: {},
  totalAmount: 0,
  totalQuantity: 0,
  updateAddress: {},
  creditCard: [],
  billingAddress: {},
  orderCard: {},
  order: [],
};

export const shoppingCartReducer = (state = shoppingCart, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CART_LIST:
      return {
        ...state,
        cartList: [...state.cartList, payload],
      };

    case RESET_CARTLIST:
      return {
        ...state,
        cartList: [],
      };

    case DELETE_PRODUCT_FROM_CART:
      return {
        ...state,
        cartList: state.cartList.filter((cartItem) => cartItem.id !== payload),
      };

    case UPDATE_QUANTITY:
      return {
        ...state,
        cartList: state.cartList.map((p) =>
          p.id == payload.id
            ? {
                ...p,
                sellCount:
                  payload.updateType == "increment"
                    ? p.sellCount + 1
                    : p.sellCount - 1,
              }
            : p
        ),
      };

    case UPDATE_TOTAL_AMOUNT:
      return {
        ...state,
        cartList: state.cartList.map((p) =>
          p.id == payload.id
            ? {
                ...p,
                checked: payload.checkedState,
              }
            : p
        ),
      };

    case SET_TOTALPRICE:
      return {
        ...state,
        totalAmount: state.cartList.reduce((cartTotal, cartItem) => {
          const { price, sellCount } = cartItem;
          const itemTotal = price * sellCount;
          cartTotal += itemTotal;
          if (cartItem.checked == false) cartTotal -= itemTotal;
          return cartTotal >= 0 ? cartTotal : 0;
        }, 0),
      };

    case SET_TOTALQUANTITY:
      return {
        ...state,
        totalQuantity: state.cartList.reduce((quantity, cartItem) => {
          const { sellCount } = cartItem;

          quantity += sellCount;
          return quantity;
        }, 0),
      };

    case SET_PAYMENT:
      return { ...state, payment: payload };

    case SET_ADDRESS:
      return { ...state, address: payload };

    case SET_ORDER:
      return { ...state, order: [...state.order, payload] };

    case SET_BILLING_ADDRESS:
      return { ...state, billingAddress: payload };

    case ADD_ORDER_CARD:
      return { ...state, orderCard: payload };

    case ADD_CREDIT_CARD:
      return { ...state, creditCard: payload };

    case SELECTED_ADDRESS:
      return {
        ...state,
        selectedAddress: state.address.filter((a) => a.id === Number(payload)),
      };

    case UPDATE_ADDRESS:
      return {
        ...state,
        updateAddress: state.address.filter((a) => a.id === Number(payload)),
      };

    default:
      return state;
  }
};
