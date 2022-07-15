import React from "react";
import styles from "./Header.module.css";
import logo from "../../../images/core/Pineapple-logo.svg";
import Button from "../../../components/common/button/Button";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className={styles.fluid}>
			<div className={`${styles.outerContainer} ${styles.flexContainer}`}>
				<div className={styles.logo}>
					<Link to="/">
						<img src={logo} alt="pineapple logo"></img>
					</Link>
				</div>
				<div className={styles.headerMenu}>
					<ul>
						<li>
							<Link to="/">Units</Link>
						</li>
						<li>
							<Link to="/">Build My Tour</Link>
						</li>
						<li>
							<Link to="/">Map</Link>
						</li>
						<li>
							<Link to="/">Amenities</Link>
						</li>
						<li>
							<Link to="/">Leasing Center</Link>
						</li>
						<li>
							<Link to="/">Support</Link>
						</li>
					</ul>
					<div className={styles.btnWrapper}>
						<Button />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
