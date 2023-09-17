const initialState = {
  users: ["A", "B"],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
        // ["A","B", "C"]
        // cap nhat lai users initialState
      };
    case "UPDATE_USER":
      return {
        // xu ly de cap nhat lai state global
      };
    default:
      return state;
  }
};

export default userReducer;
