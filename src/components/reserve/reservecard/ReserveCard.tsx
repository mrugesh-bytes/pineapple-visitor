import React, { useEffect } from 'react';
import Slider from '../../common/slider/Slider';
import styles from './ReserveCard.module.css';
import iconArea from '../../../images/icons/icon-area.svg';
import iconBath from '../../../images/icons/icon-bath.svg';
import iconBeds from '../../../images/icons/icon-beds.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getUnit } from '../../../redux/unit/actions/unit.action';

const ReserveCard = () => {
    const location: any = useLocation();
    const dispatch = useDispatch();
    const unit = useSelector((state: any) => state.unitReducer.unit.data);
    useEffect(() => {
        if (Object.keys(unit).length === 0) dispatch(getUnit(location.state.unitId));
    }, []);

    return (
        <div>
            <div className={styles.slideWrapper}>
                <Slider sliderBanner={unit.image_url} />
                <div className={styles.sliderDetails}>
                    <h4 className={styles.sliderTitle}>
                        <span className={styles.unitName}>{unit.name}</span>
                        <span className={styles.unitPrice}>${unit.price}</span>
                    </h4>
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
