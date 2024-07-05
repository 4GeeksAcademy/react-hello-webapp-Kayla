import React from 'react';

const ContactCard = ({ contact, onDelete }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{contact.full_name}</h5>
        <p className="card-text">Email: {contact.email}</p>
        <p className="card-text">Phone: {contact.phone}</p>
        <p className="card-text">Address: {contact.address}</p>
        <button className="btn btn-danger" onClick={() => onDelete(contact.id)}>Delete</button>
      </div>
    </div>
  );
};

export default ContactCard;
