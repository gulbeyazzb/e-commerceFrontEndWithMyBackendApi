import { SET_PRODUCT } from "../actions/productAction";
import { SET_ACTIVEPAGE } from "../actions/productAction";
import { ADD_PAGECOUNT } from "../actions/productAction";
import { DELETE_PAGECOUNT } from "../actions/productAction";
import { CHANGE_FETCH_STATE } from "../actions/productAction";
import { SET_PAGECOUNT } from "../actions/productAction";
import { REMOVE_COUNT } from "../actions/productAction";
import { SET_FILTER } from "../actions/productAction";
import { SET_SEARCH } from "../actions/productAction";
import { SET_TOTALPRODUCTS } from "../actions/productAction";
import { PRODUCT_COUNT } from "../actions/productAction";
import { ADD_PRODUCTS } from "../actions/productAction";

export const FETCH_STATES = {
  NotFetched: "NOT_FETCHED",
  Fetching: "FETCHING",
  Fetched: "FETCHED",
  FetchFailed: "FETCH_FAILED",
};

const product = {
  productList: [],
  totalProductCount: 0,
  pageCount: 0,
  activePage: 0,
  fetchState: FETCH_STATES.NotFetched,
  productCount: 0,
  // filter: "",
  // search: "",
};

export const productReducer = (state = product, action) => {
  switch (action.type) {
    case SET_PRODUCT:
      return { ...state, productList: [...action.payload] };

    case ADD_PRODUCTS:
      return {
        ...state,
        productList: [...state.productList, ...action.payload],
      };

    case SET_TOTALPRODUCTS:
      return { ...state, totalProductCount: action.payload };

    case SET_ACTIVEPAGE:
      return { ...state, activePage: action.payload };

    case SET_PAGECOUNT:
      return { ...state, pageCount: action.payload };

    case PRODUCT_COUNT:
      return { ...state, productCount: action.payload };

    case CHANGE_FETCH_STATE:
      return { ...state, fetchState: action.payload };

    default:
      return state;
  }
};
