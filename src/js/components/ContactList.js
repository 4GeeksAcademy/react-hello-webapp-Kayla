import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import ContactCard from './ContactCard';

const ContactList = () => {
  const { store, actions } = useContext(Context);

  const handleDelete = (id) => {
    actions.deleteContact(id);
  };

  return (
    <div>
      {store.contacts.map(contact => (
        <ContactCard key={contact.id} contact={contact} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default ContactList;
