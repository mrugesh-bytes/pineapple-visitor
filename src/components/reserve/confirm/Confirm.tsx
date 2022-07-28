import React from "react";
import UnitCard from "../../common/unitcard/UnitCard";
import styles from "./Confirm.module.css";
import Dashboard from "./dashboard/Dashboard";

const Confirm = () => {
	return (
		<div className={styles.container}>
			<div className={styles.cardWrapper}>
				<UnitCard />
			</div>
			<div className={styles.dashboardWrapper}>
				<Dashboard />
			</div>
		</div>
	);
};

export default Confirm;
