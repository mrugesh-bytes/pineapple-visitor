import React from "react";
import UnitCard from "./unitcard/UnitCard";
import UnitDashboard from "./unitdashboard/UnitDashboard";
import styles from "./index.module.css";

const index = () => {
	return (
		<div className={styles.container}>
			<div className={styles.unitCardWrapper}>
				<UnitCard />
			</div>
			<div className={styles.unitDashboardWrapper}>
				<UnitDashboard />
			</div>
		</div>
	);
};

export default index;
