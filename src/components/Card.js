import React from "react";

function Card({ contacts }) {
	console.log(contacts);
	return contacts.map((contact) => (
		<div key={contact.phone}>
			<img
				style={{ width: "200px", height: "150px" }}
				src={`http://placekitten.com/${contact.pic}`}
				alt="first"
			/>
			<h3>{contact.name}</h3>
			<p>{contact.phone}</p>
			<p>{contact.email}</p>
		</div>
	));
}

export default Card;
