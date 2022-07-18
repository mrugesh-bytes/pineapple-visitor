import React from "react";
import styles from "./Card.module.css";
import bannerImg from "../../../images/temp/unit-banner.svg";
import iconArea from "../../../images/icons/icon-area.svg";
import iconBed from "../../../images/icons/icon-beds.svg";
import iconBath from "../../../images/icons/icon-bath.svg";
import Slider from "../../common/slider/Slider";

const Card = () => {
	return (
		<div className={styles.cardWrapper}>
			<Slider />
			<div className={styles.cardInfo}>
				<div className={styles.cardTitle}>
					<h2>park towne Place</h2>
					<span>$1200</span>
				</div>
				<div className={styles.facilities}>
					<div className={styles.facility}>
						<img src={iconArea} alt="Area Icon" />
						<span>80 Ft</span>
					</div>
					<div className={styles.facility}>
						<img src={iconBed} alt="Area Beds" />
						<span>2 Beds</span>
					</div>
					<div className={styles.facility}>
						<img src={iconBath} alt="Area Bath" />
						<span>1 Bath</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
