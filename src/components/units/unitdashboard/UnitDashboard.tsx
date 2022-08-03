import React from 'react';
import styles from './UnitDashboard.module.css';
import noDetails from '../../../images/no-units-data.png';
import iconArea from '../../../images/icons/icon-area.svg';
import iconBath from '../../../images/icons/icon-bath.svg';
import iconBeds from '../../../images/icons/icon-beds.svg';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const UnitDashboard = (props: any) => {
    const navigate = useNavigate();
    const unit = useSelector((state: any) => state.unitReducer.unit.data);

    const handleReserve = () => {
        navigate('/reserve', { state: { unitId: unit.id } });
    };

    return (
        <div className={styles.dashboardWrapper}>
            {Object.keys(unit).length > 0 && (
                <>
                    {' '}
                    <h2 className={styles.title}>Schedule a visit</h2>
                    <div className={styles.unitDetails}>
                        <div className={styles.imageContainer}>
                            <img src={unit.image_url.split(',')[0]} alt="Unit Banner"></img>
                        </div>
                        <div className={styles.unitDetailTitle}>
                            <h2>{unit.name}</h2>
                            <span>${unit.price}</span>
                        </div>
                        <div className={styles.unitFacilities}>
                            <div className={styles.unitFacility}>
                                <img src={iconArea} alt="Icon Area" />
                                <span>{unit.size} ft</span>
                            </div>
                            <div className={styles.unitFacility}>
                                <img src={iconBeds} alt="Icon Beds" />
                                <span>{unit.rooms} Bed</span>
                            </div>
                            <div className={styles.unitFacility}>
                                <img src={iconBath} alt="Icon Bath" />
                                <span>{unit.baths} Bath</span>
                            </div>
                        </div>
                        <div className={styles.btnReserve}>
                            <button onClick={handleReserve}>Reserve tour</button>
                        </div>
                    </div>
                </>
            )}
            {Object.keys(unit).length === 0 && <img src={noDetails} alt="No Details" />}
        </div>
    );
};

export default UnitDashboard;
