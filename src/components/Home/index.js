import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteContact } from "../../redux/actions/contactsActions";
import "./home.scss";
const Home = () => {
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const [searchWord, setSearchWord] = React.useState("");

  // functionality for filtering the contact list and immediately sorting alphabetically
  const filterContacts = contacts
    .filter((el) => el.name.toLowerCase().includes(searchWord.toLowerCase()))
    .sort((a, b) => (a.name > b.name ? 1 : -1));

  const handleSearchContact = (e) => {
    e.preventDefault();
    setSearchWord(e.target.value);
  };
  return (
    <div className="content">
      <div className="content__panel">
        <div className="content__upperpanel">
          <div>
            <input
              placeholder="search..."
              type="text"
              value={searchWord}
              onChange={(e) => handleSearchContact(e)}
            />
          </div>
          {/* <Link to="/add" className="upperpanel__btn">
          Add Contact
        </Link> */}
        </div>
        <div className="content__mainpanel">
          <table className="content__table">
            <thead>
              <tr>
                <th scope="col">№</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {filterContacts.length > 0 ? (
                filterContacts.map((contact, id) => (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    <td>
                      <Link to={`/edit/${contact.id}`}>
                        <button className="table__edit">Edit</button>
                      </Link>
                      <button
                        type="button"
                        onClick={() => dispatch(deleteContact(contact.id))}
                        className="table__delete"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th>No contacts found</th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
