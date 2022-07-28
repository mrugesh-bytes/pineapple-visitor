import React from 'react';
import Ameneties from './ameneties/Ameneties';
import Apartment from './apartment/Apartment';
import styles from './TourFilter.module.css';

const TourFilter = () => {
    return (
        <div className={styles.container}>
            <div className={styles.amenetiesContainer}>
                <Ameneties />
            </div>
            <div className={styles.apartmentContainer}>
                <Apartment />
            </div>
        </div>
    );
};

export default TourFilter;
