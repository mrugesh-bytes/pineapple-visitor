import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import OuterLayout from "./outerlayout/OuterLayout";
import { Outlet } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import UnitPage from "../pages/UnitPage";
import TourFilterPage from "../pages/TourFilterPage";
import ConfirmPage from "../pages/ConfirmPage";
import SelfGuidePage from "../pages/SelfGuidePage";

const Templates = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="units" element={<UnitPage />} />
					<Route path="tour-filter" element={<TourFilterPage />} />
					<Route path="confirm" element={<ConfirmPage />} />
					<Route path="self-guide" element={<SelfGuidePage />} />
				</Route>

				<Route path="/" element={<OuterLayout />}>
					<Route path="login" element={<LoginPage />} />
					<Route path="signup" element={<SignupPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Templates;
