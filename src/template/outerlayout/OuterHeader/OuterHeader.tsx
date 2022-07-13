import React from "react";
import styles from "./OuterHeader.module.css";
import logo from "../../../images/core/Pineapple-logo.svg";
import Button from "../../../components/common/button/Button";

const OuterHeader = () => {
	return (
		<div className={styles.fluid}>
			<div className={`${styles.outerContainer} ${styles.flexContainer}`}>
				<div className={styles.logo}>
					<img src={logo} alt="pineapple logo"></img>
				</div>
				<div className={styles.btnWrapper}>
					<Button />
				</div>
			</div>
		</div>
	);
};

export default OuterHeader;
