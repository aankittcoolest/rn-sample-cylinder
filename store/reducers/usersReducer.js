import users from "../../data/users";
import { ADD_USER, EDIT_USER, DELETE_USER } from "../actions/userAction";
const initialState = users;

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      let length = state.length;
      return [...state.slice(0, length), action.user, ...state.slice(length)];
    }
    case EDIT_USER: {
      return state.map((user, index) => {
        if (user.id !== action.user.id) {
          return user;
        }
        return {
          ...user,
          ...action.user,
        };
      });
    }
    case DELETE_USER: {
      return state.filter((user) => user.id != action.userId);
    }
    default:
      return state;
  }
};
