export const EDIT_USER = "EDIT_USER";
export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";

export const editUser = (user) => {
  return { type: EDIT_USER, user };
};

export const addUser = (user) => {
  return { type: ADD_USER, user };
};

export const deleteUser = (userId) => {
  return { type: DELETE_USER, userId };
};
