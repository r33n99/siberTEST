import React from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import AddPost from "./components/AddContact";
import EditContact from "./components/EditContact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { addContacts } from "./redux/api/getContactsAPI";
import "./global.scss";

const App = () => {
  const dispatch = useDispatch();

  // requesting contacts from the server during the first rendering
  React.useEffect(() => {
    dispatch(addContacts());
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add" element={<AddPost />} />
        <Route exact path="/edit/:id" element={<EditContact />} />
      </Routes>
    </div>
  );
};
export default App;
