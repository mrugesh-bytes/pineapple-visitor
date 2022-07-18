import React from "react";
import styles from "./Dashboard.module.css";
import bannerImg from "../../../images/core/appointment-confirmation.png";
import iconTime from "../../../images/icons/icon-time.svg";
import iconCalender from "../../../images/icons/icon-calendar.svg";

const Dashboard = () => {
	return (
		<div className={styles.dashboardWrapper}>
			<h2 className={styles.title}>Schedule a visit for B</h2>
			<div className={styles.dashboardBanner}>
				<img src={bannerImg} alt="banner" />
			</div>
			<div className={styles.scheduleInfo}>
				<p>
					All done! You will recieve an SMS message with more
					information once confirmed.
				</p>
				<div className={styles.schedule}>
					<div className={styles.date}>
						<div className={styles.scheduleIcon}>
							<img src={iconCalender} alt="Icon Date" />{" "}
						</div>
						<span>07-Jun-2022</span>
					</div>
					<div className={styles.time}>
						<div className={styles.scheduleIcon}>
							<img src={iconTime} alt="Icon Calender" />
						</div>
						<span>03:30 PM</span>
					</div>
				</div>
				<div className={styles.btnWrapper}>
					<button>Confirm</button>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
