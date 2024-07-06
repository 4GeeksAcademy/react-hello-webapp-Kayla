import React, { useState, useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import ContactList from "../components/ContactList";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [newContact, setNewContact] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    actions.getContacts();
  }, []);

  const handleAddContact = () => {
    actions.addContact(
      newContact.name,
      newContact.phone,
      newContact.email,
      newContact.address
    );
    setNewContact({ name: "", phone: "", email: "", address: "" });
  };

  const handleInputChange = (e) => {
    console.log (e.target.name)
    console.log (e.target.value)
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <h1>Contact List</h1>
      <div className="contact-form text-center">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newContact.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={newContact.phone}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={newContact.email}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={newContact.address}
            onChange={handleInputChange}
          />
          <button onClick={handleAddContact}>Add Contact</button>
        </div>

      </div>
   
    </div>
  );
};
