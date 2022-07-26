import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocation } from "../../../../redux/location/actions/location.action";
import styles from "./Card.module.css";
import iconArea from "../../../../images/icons/icon-area.svg";
import iconBed from "../../../../images/icons/icon-beds.svg";
import iconBath from "../../../../images/icons/icon-bath.svg";
import Slider from "../../../common/slider/Slider";

const Card = (props: any) => {
	const unit = useSelector((state: any) => state.unitReducer.unit.data);
	return (
		<div className={styles.cardWrapper}>
			<Slider sliderBanner={unit.image_url} />
			<div className={styles.cardInfo}>
				<div className={styles.cardTitle}>
					<h2>{unit.name}</h2>
					<span>${unit.price}</span>
				</div>
				<div className={styles.facilities}>
					<div className={styles.facility}>
						<img src={iconArea} alt="Area Icon" />
						<span>{unit.size} ft</span>
					</div>
					<div className={styles.facility}>
						<img src={iconBed} alt="Area Beds" />
						<span>{unit.rooms} Bed</span>
					</div>
					<div className={styles.facility}>
						<img src={iconBath} alt="Area Bath" />
						<span>{unit.baths} Bath</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
