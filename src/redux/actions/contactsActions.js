import { GET_CONTACTS, UPDATE_CONTACT, DELETE_CONTACT } from "./types";

export const getContacts = (payload) => ({
  type: GET_CONTACTS,
  payload,
});

export const updateContacts = (payload) => ({
  type: UPDATE_CONTACT,
  payload,
});

export const deleteContact = (payload) => ({
  type: DELETE_CONTACT,
  payload,
});
