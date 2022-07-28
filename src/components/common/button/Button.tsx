import React from "react";
import styles from "./Button.module.css";
const Button = (props: any) => {
	return <button className={styles.btnPrimary} onClick={props.onClick}>{props.text}</button>;
};

export default Button;
