import React from "react";
import styles from "./OuterFooter.module.css";
import iconMail from "../../../images/icons/icon-mail.svg";
import iconPhone from "../../../images/icons/icon-phone.svg";

const OuterFooter = () => {
	return (
		<div className={styles.fluid}>
			<div className={`${styles.outerContainer} ${styles.flexContainer}`}>
				<div className={`${styles.link} ${styles.flexContainer}`}>
					<a href="mailto:support@pineapplemultifamily.com">
						<img src={iconMail} alt="Icon Mail" />
						support@pineapplemultifamily.com
					</a>
				</div>
				<div className={`${styles.link} ${styles.flexContainer}`}>
					Copyright @Pineapple {new Date().getFullYear()}
				</div>
				<div className={`${styles.link} ${styles.flexContainer}`}>
					<img src={iconPhone} alt="Icon Phone" />
					<a href="tel:+18887511211">888-751-1211</a>
				</div>
			</div>
		</div>
	);
};

export default OuterFooter;
