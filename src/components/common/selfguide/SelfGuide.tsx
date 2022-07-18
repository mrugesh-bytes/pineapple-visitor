import React from "react";
import styles from "./SelfGuide.module.css";

const SelfGuide = () => {
	return (
		<div className={styles.selfGuideWrapper}>
			<h2 className={styles.title}>Self-guided tour</h2>
			<p>Would You Like To Add Amenities To Your Tour?</p>
			<div className={styles.buttonWrapper}>
				<button className={`${styles.btn} ${styles.btnNo}`}>No</button>
				<button className={`${styles.btn} ${styles.btnYes}`}>
					Yes
				</button>
			</div>
		</div>
	);
};

export default SelfGuide;
