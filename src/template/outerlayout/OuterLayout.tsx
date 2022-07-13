import React from "react";
import { Outlet } from "react-router-dom";
import OuterFooter from "./OuterFooter/OuterFooter";
import OuterHeader from "./OuterHeader/OuterHeader";
import styles from "./OuterLayout.module.css";

const OuterLayout = () => {
	return (
		<div className={`${styles.outerContainer} ${styles.outerbg}`}>
			<OuterHeader />
			<Outlet />
			<OuterFooter />
		</div>
	);
};

export default OuterLayout;
