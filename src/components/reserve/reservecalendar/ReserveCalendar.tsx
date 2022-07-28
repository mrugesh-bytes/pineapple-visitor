import React, { useState } from 'react';
import Calendar from '../../common/calendar/Calendar';
import styles from './ReserveCalendar.module.css';
import { useNavigate } from 'react-router-dom';

const ReserveCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const navigate = useNavigate();
    const handleConfirm = () => {
        navigate('/confirm', { state: { selectedDate } });
    };
    return (
        <div className={styles.calendarWrapper}>
            <Calendar setSelectedDate={setSelectedDate} />
            <div className={styles.btnWrapper}>
                <button onClick={handleConfirm}>Confirm</button>
            </div>
        </div>
    );
};

export default ReserveCalendar;
