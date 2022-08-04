import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLocation } from '../../../redux/location/actions/location.action';
import { getUnit } from '../../../redux/unit/actions/unit.action';
import styles from './UnitCard.module.css';

const UnitCard = () => {
    const [locationId, setLocationId] = useState('');
    const [unitId, setUnitId] = useState('');
    const dispatch = useDispatch();
    const [units, setUnits] = useState([]);
    const locations = useSelector((state: any) => state?.locationReducer?.data);

    useEffect(() => {
        dispatch(getLocation());
    }, [dispatch]);

    useEffect(() => {
        if (locationId) {
            const [unitList] = locations.filter((location: any) => location.id === locationId);
            setUnits(unitList.units);
        }
    }, [locationId]);

    const handleDetails = (event: any) => {
        event.preventDefault();
        dispatch(getUnit(unitId));
    };

    return (
        <div className={styles.cardWrapper}>
            <form onSubmit={handleDetails} className={styles.unitForm}>
                <div className={styles.formField}>
                    <label className={styles.cardTitle}>Select Apartment:</label>
                    <select className={styles.unitSelect} defaultValue="" onChange={(ev) => setLocationId(ev.target.value)}>
                        <option value="">Select Location</option>
                        {locations.length > 0 && locations?.map((location: any) => <option value={location.id}>{location.name}</option>)}
                    </select>
                </div>
                <div className={styles.formField}>
                    <label className={styles.cardTitle}>Select Units</label>
                    <select className={styles.unitSelect} onChange={(ev: any) => setUnitId(ev.target.value)}>
                        <option value="">Select Units</option>
                        {locationId && units.length > 0 && units.map((unit: any) => <option value={unit.id}>{unit.name}</option>)}
                    </select>
                </div>
                <div className={styles.formField}>
                    <button className={`${styles.btn} ${styles.btnDisable} ${styles.btnSuccess}`} disabled={!locationId || !unitId}>
                        Reserve
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UnitCard;
