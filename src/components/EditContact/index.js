import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { updateContacts } from "../../redux/actions/contactsActions";
import "./edit.scss";

const EditContact = () => {
  const { id } = useParams();
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useNavigate();
  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );
  useEffect(() => {
    setName(currentContact.name);
    setEmail(currentContact.email);
    setPhone(currentContact.phone);
  }, [currentContact]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: currentContact.id,
      email,
      name,
      phone,
    };

    dispatch(updateContacts(data));
    toast.success("Contact updated successfully!!");
    history("/");
  };

  return (
    <div className="edit__container">
      <div className="edit__content">
        <div>
          <button className="back__btn" onClick={() => history("/")}>
            Go back
          </button>
        </div>
        <div className="edit__form">
          {currentContact ? (
            <form onSubmit={handleSubmit}>
              <div className="form__group">
                <input
                  value={name}
                  placeholder={"Name"}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form__group">
                <input
                  value={email}
                  placeholder={"Email"}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form__group">
                <input
                  value={phone}
                  placeholder={"Phone"}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="btn__group">
                <button type="submit" className="update__btn">
                  Update Contact
                </button>
                <button
                  type="button"
                  className="cancel__btn"
                  onClick={() => history("/")}
                >
                  cancel
                </button>
              </div>
            </form>
          ) : (
            <h1 className="text-center">No Contact Found</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditContact;
