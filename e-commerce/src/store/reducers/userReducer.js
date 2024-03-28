import { SET_USER } from "../actions/userAction";
import { SET_USER_FETCH_STATE } from "../actions/userAction";
import { FETCH_STATES } from "./productReducer";

const user = {
  userInfo: {
    name: "",
    email: "",
    role_id: "",
  },
  fetchState: FETCH_STATES.NotFetched,
};

export function userReducer(state = user, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_USER:
      return {
        ...state,
        userInfo: {
          ...payload,
        },
      };

    case SET_USER_FETCH_STATE:
      return { ...state, fetchState: payload };

    default:
      return state;
  }
}
