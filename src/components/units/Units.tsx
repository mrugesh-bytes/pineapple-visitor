import React, { useState } from "react";
import Popup from "../common/popup/Popup";
import CompleteProfile from "../completeprofile/CompleteProfile";
import UnitCard from "./unitcard/UnitCard";
import UnitDashboard from "./unitdashboard/UnitDashboard";
import styles from "./Units.module.css";

const Units = () => {
	const [open, setOpen]: any = useState(true);
	return (
		<>
			<Popup
				open={open}
				setOpen={setOpen}
				bodyData={<CompleteProfile />}
				shouldCloseOnOverlayClick={false}
			/>
			<div className={styles.container}>
				<div className={styles.unitCardWrapper}>
					<UnitCard />
				</div>
				<div className={styles.unitDashboardWrapper}>
					<UnitDashboard />
				</div>
			</div>
		</>
	);
};

export default Units;
