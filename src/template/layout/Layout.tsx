import React from "react";
import UnitPage from "../../pages/UnitPage";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import styles from "./Layout.module.css";

const Layout = () => {
	return (
		<div className={`${styles.layoutContainer} ${styles.layoutBg}`}>
			<Header />
			<UnitPage />
			<Footer />
		</div>
	);
};

export default Layout;
