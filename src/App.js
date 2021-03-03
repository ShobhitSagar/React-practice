import "./App.css";
import React from "react";
import CardList from "./components/CardLIst";
import Protucts from "./components/Products";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			isLoggedIn: false,
		};
	}

	render() {
		return (
			<div className="App">
				<h1>You are currently logged {this.state.isLoggedIn ? "In" : "Out"}</h1>
			</div>
		);
	}
}

export default App;
