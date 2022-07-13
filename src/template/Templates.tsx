import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import OuterLayout from "./outerlayout/OuterLayout";
import { Outlet } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";

const Templates = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}></Route>

				<Route path="/" element={<OuterLayout />}>
					<Route path="login" element={<LoginPage />} />
					<Route path="signup" element={<SignupPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Templates;
