import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import Templates from "./template/Templates";
import "./components/core/axios/Interceptor";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Templates />
			</div>
		</Provider>
	);
}

export default App;
