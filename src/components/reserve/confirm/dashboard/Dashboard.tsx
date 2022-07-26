import React from "react";
import styles from "./Dashboard.module.css";
import bannerImg from "../../../../images/core/appointment-confirmation.png";
import iconCalender from "../../../../images/icons/icon-calendar.svg";
import { useLocation } from "react-router-dom";
import moment from "moment";

const Dashboard = () => {
	const location: any = useLocation();
	const selectedDate = location.state.selectedDate;
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
						<span>{moment(selectedDate).format("DD-MM-YYYY")}</span>
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
