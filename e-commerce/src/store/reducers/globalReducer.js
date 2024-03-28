import { SET_ROLES } from "../actions/globalAction";
import { SET_CATEGORY } from "../actions/globalAction";
import { CHANGE_THEME } from "../actions/globalAction";
import { CHANGE_LANGUAGE } from "../actions/globalAction";

const global = {
  roles: [],
  categories: [],
  theme: "light",
  language: "tr",
};

export const globalReducer = (state = global, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ROLES:
      return { ...state, roles: payload };

    case SET_CATEGORY:
      return { ...state, categories: payload };

    case CHANGE_THEME:
      return { ...state, theme: payload };

    case CHANGE_LANGUAGE:
      return { ...state, language: payload };

    default:
      return state;
  }
};
