import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import "./addContact.scss";

// the component for adding a new contact, so far it will be disabled, if necessary, I can finish it

const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const contacts = useSelector((state) => state);
  console.log(contacts);

  const dispatch = useDispatch();

  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 0,
      email,
      name,
      phone,
    };

    dispatch(addContact(data));
    history("/");
  };

  return (
    <div>
      <h1>Add Post</h1>
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
              <input type="submit" value="Add Contact" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddContact;
