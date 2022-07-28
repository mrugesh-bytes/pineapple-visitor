import React from 'react';
import Card from './card/Card';
import styles from './Confirm.module.css';
import Dashboard from './dashboard/Dashboard';

const Confirm = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cardWrapper}>
                <Card />
            </div>
            <div className={styles.dashboardWrapper}>
                <Dashboard />
            </div>
        </div>
    );
};

export default Confirm;
