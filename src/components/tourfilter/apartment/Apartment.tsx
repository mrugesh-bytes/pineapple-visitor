import React from "react";
import Slider from "../../common/slider/Slider";
import styles from "./Apartment.module.css";
import iconArea from "../../../images/icons/icon-area.svg";
import iconBath from "../../../images/icons/icon-bath.svg";
import iconBeds from "../../../images/icons/icon-beds.svg";

const Apartment = () => {
	return (
		<div className={styles.apartmentWrapper}>
			<h2 className={styles.title}>List Of Apartment</h2>
			<div className={styles.appartmentDetails}>
				<div className={styles.slideWrapper}>
					<Slider />
					<div className={styles.sliderDetails}>
						<h4 className={styles.sliderTitle}>park towne Place</h4>
						<div className={styles.facilities}>
							<div className={styles.facility}>
								<img src={iconArea} alt="area" />
								<span>80 Ft</span>
							</div>
							<div className={styles.facility}>
								<img src={iconBeds} alt="beds" />
								<span>2 Beds</span>
							</div>
							<div className={styles.facility}>
								<img src={iconBath} alt="bath" />
								<span>1 Bath</span>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.slideWrapper}>
					<Slider />
					<div className={styles.sliderDetails}>
						<h4 className={styles.sliderTitle}>park towne Place</h4>
						<div className={styles.facilities}>
							<div className={styles.facility}>
								<img src={iconArea} alt="area" />
								<span>80 Ft</span>
							</div>
							<div className={styles.facility}>
								<img src={iconBeds} alt="beds" />
								<span>2 Beds</span>
							</div>
							<div className={styles.facility}>
								<img src={iconBath} alt="bath" />
								<span>1 Bath</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Apartment;
