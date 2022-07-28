import React from 'react';
import Slider from '../../common/slider/Slider';
import styles from './ReserveCard.module.css';
import iconArea from '../../../images/icons/icon-area.svg';
import iconBath from '../../../images/icons/icon-bath.svg';
import iconBeds from '../../../images/icons/icon-beds.svg';
import { useSelector } from 'react-redux';

const ReserveCard = () => {
    const unit = useSelector((state: any) => state.unitReducer.unit.data);
    console.log(unit);
    return (
        <div>
            <div className={styles.slideWrapper}>
                <Slider sliderBanner={unit.image_url} />
                <div className={styles.sliderDetails}>
                    <h4 className={styles.sliderTitle}>{unit.name}</h4>
                    <div className={styles.facilities}>
                        <div className={styles.facility}>
                            <img src={iconArea} alt="area" />
                            <span>{unit.size} Ft</span>
                        </div>
                        <div className={styles.facility}>
                            <img src={iconBeds} alt="beds" />
                            <span>{unit.rooms} Beds</span>
                        </div>
                        <div className={styles.facility}>
                            <img src={iconBath} alt="bath" />
                            <span>{unit.baths} Bath</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReserveCard;
