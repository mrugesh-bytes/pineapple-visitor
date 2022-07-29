import React from 'react';
import Slider from '../slider/Slider';
import styles from './UnitCard.module.css';
import iconArea from '../../../images/icons/icon-area.svg';
import iconBed from '../../../images/icons/icon-beds.svg';
import iconBath from '../../../images/icons/icon-bath.svg';
import { useSelector } from 'react-redux';

const UnitCard = () => {
    const unit = useSelector((state: any) => state.unitReducer.unit.data);
    return (
        <>
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
        </>
    );
};

export default UnitCard;
