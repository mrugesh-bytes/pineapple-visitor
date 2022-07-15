import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getLocation } from "../../../redux/unit/actions/unit.action";
import styles from "./UnitCard.module.css";

const UnitCard = () => {
	const [locationId, setLocationId] = useState("");
	const [location, setLocation] = useState(null);
	const [locations, setLocations] = useState([]);
	const [error, setError]: any = useState(null);
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getLocation());
	}, []);

	return (
		<div className={styles.cardWrapper}>
			<form className={styles.unitForm}>
				<div className={styles.formField}>
					<label className={styles.cardTitle}>
						Select Apartment:
					</label>
					<select
						className={styles.unitSelect}
						defaultValue=""
						onChange={(ev) => setLocationId(ev.target.value)}
					>
						<option>Select Location</option>
						{locations.length > 0 &&
							locations?.map((location): any =>
								console.log(location)
							)}
					</select>
				</div>
				<div className={styles.formField}>
					<label className={styles.cardTitle}>Select Units</label>
					<select className={styles.unitSelect}>
						<option>Select Location</option>
						<option>New York</option>
						<option>California</option>
					</select>
				</div>
				<div className={styles.formField}>
					<button
						className={`${styles.btn} ${styles.btnDisable} ${styles.btnSuccess}`}
					>
						Reserve
					</button>
				</div>
			</form>
		</div>
	);
};

export default UnitCard;
