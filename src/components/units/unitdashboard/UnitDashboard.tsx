import React from "react";
import styles from "./UnitDashboard.module.css";
import unitBanner from "../../../images/temp/unit-banner.svg";
import iconArea from "../../../images/icons/icon-area.svg";
import iconBath from "../../../images/icons/icon-bath.svg";
import iconBeds from "../../../images/icons/icon-beds.svg";

const UnitDashboard = () => {
	return (
		<div className={styles.dashboardWrapper}>
			<h2 className={styles.title}>Schedule a visit for B</h2>
			<div className={styles.unitDetails}>
				<div className={styles.imageContainer}>
					<img src={unitBanner} alt="Unit Banner"></img>
				</div>
				<div className={styles.unitDetailTitle}>
					<h2>park towne Place</h2>
					<span>$1200</span>
				</div>
				<div className={styles.unitFacilities}>
					<div className={styles.unitFacility}>
						<img src={iconArea} alt="Icon Area" />
						<span>80 Ft</span>
					</div>
					<div className={styles.unitFacility}>
						<img src={iconBeds} alt="Icon Beds" />
						<span>2 Beds</span>
					</div>
					<div className={styles.unitFacility}>
						<img src={iconBath} alt="Icon Bath" />
						<span>1 Bath</span>
					</div>
				</div>
				<div className={styles.btnReserve}>
					<button>Reserve 30 minutes tour</button>
				</div>
			</div>
		</div>
	);
};

export default UnitDashboard;
