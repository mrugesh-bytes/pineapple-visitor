import React from 'react';
import styles from './Reserve.module.css';
import ReserveCalendar from './reservecalendar/ReserveCalendar';
import ReserveCard from './reservecard/ReserveCard';

const Reserve = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cardWrapper}>
                <ReserveCard />
            </div>
            <div className={styles.calendarWrapper}>
                <ReserveCalendar />
            </div>
        </div>
    );
};

export default Reserve;
