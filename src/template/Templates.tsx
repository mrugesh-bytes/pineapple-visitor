import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import OuterLayout from "./outerlayout/OuterLayout";

const Templates = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}></Route>

				<Route path="/" element={<OuterLayout />}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Templates;
