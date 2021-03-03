import React from "react";
import Card from "./Card";

function CardList() {
	const contacts = [
		{
			pic: "300/200",
			name: "First",
			phone: 123,
			email: "123@first.com",
		},
		{
			pic: "400/200",
			name: "Second",
			phone: 1234,
			email: "1234@first.com",
		},
		{
			pic: "400/300",
			name: "Third",
			phone: 12345,
			email: "12345@first.com",
		},
		{
			pic: "200/100",
			name: "Forth",
			phone: 123456,
			email: "123456@first.com",
		},
	];

	return <Card contacts={contacts} />;
}

export default CardList;
