const initialState = [];

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CONTACTS":
      state = action.payload;
    case "DELETE_CONTACT":
      state = state.filter((contact) =>
        contact.id === action.payload ? null : contact
      );
      return state;
    case "UPDATE_CONTACT":
      state = state.filter((contact) =>
        contact.id === action.payload.id
          ? Object.assign(contact, action.payload)
          : contact
      );
      return state;
    default:
      return state;
  }
};
