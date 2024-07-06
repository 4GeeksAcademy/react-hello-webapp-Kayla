const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
		  },
		  actions: {
			getContacts: async () => {
			  const response = await fetch(
				"https://playground.4geeks.com/contact/agendas/Kaylabree"
			  );
			  const data = await response.json();
			  setStore({ contacts: data });
			},
			addContact: async (name, phone, email, address) => {
			  const store = getStore();
			  const response = await fetch(
				"https://playground.4geeks.com/contact/agendas/Kaylabree/contacts",
				{
				  method: "POST",
				  headers: { "Content-Type": "application/json" },
				  body: JSON.stringify(contactData), 
				  
				  //({
					//full_name: name,
					//phone: phone,
					//email: email,
					//address: address,
					//agenda_slug: "Kaylabree",
				 // }),
				}
			  );
			  const data = await response.json();
			  setStore({ contacts: [...store.contacts, data] });
			},
			deleteContact: async (id) => {
			  const store = getStore();
			  await fetch(
				"https://playground.4geeks.com/contact/agendas/Kaylabree/contacts/" + id,
				{
				  method: "DELETE",
				  headers: { "Content-Type": "application/json" },
				}
			  );
			  setStore({
				contacts: store.contacts.filter((contact) => contact.id !== id),
			  });
			},
			editContact: async (id, name, phone, email, address) => {
			  const store = getStore();
			  const response = await fetch(
				"https://playground.4geeks.com/contact/agendas/Kaylabree/contacts/" + id,
				{
				  method: "PUT",
				  headers: { "Content-Type": "application/json" },
				  body: JSON.stringify({
					full_name: name,
					phone: phone,
					email: email,
					address: address,
					agenda_slug: "Kaylabree",
				  }),
				}
			  );
			  const data = await response.json();
			  setStore({ contacts: store.contacts.map(contact => contact.id === id ? data : contact) });
			},
		  },
		};
	  };
	  
	  export default getState;
	  
	