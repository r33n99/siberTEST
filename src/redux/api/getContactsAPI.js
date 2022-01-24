import axios from "axios";
import { getContacts } from "../actions/contactsActions";

export const addContacts = () => {
  return (dispatch) => {
    try{
      axios
      .get("https://demo.sibers.com/users")
      .then((response) => response)
      .then((data) => dispatch(getContacts(data.data)));
    } catch(error){
      alert(error)
    }
  };
};
