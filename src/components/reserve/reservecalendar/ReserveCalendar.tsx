import React, { useEffect, useState } from 'react';
import Calendar from '../../common/calendar/Calendar';
import styles from './ReserveCalendar.module.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import moment from 'moment';

const ReserveCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [minDate, setMinDate] = useState(new Date());
    const [booked, setBooked]: any = useState([]);
    const [maxDate, setMaxDate] = useState(new Date());
    const navigate = useNavigate();
    const unit = useSelector((state: any) => state.unitReducer.unit.data);

    const handleConfirm = () => {
        navigate('/confirm', { state: { selectedDate } });
    };

    useEffect(() => {
        if (unit?.dates) {
            setMinDate(new Date(unit.dates.split(',')[0]));
            setMaxDate(new Date(unit.dates.split(',')[1]));
        }
        if (unit?.appointments.length > 0) {
            unit.appointments.map((appointment: any) => setBooked([...booked, moment(appointment.start_time).format('DD-MM-YYYY')]));
        }
    }, [unit]);

    return (
        <div className={styles.calendarWrapper}>
            <Calendar booked={booked} minDate={minDate} maxDate={maxDate} setSelectedDate={setSelectedDate} />
            <div className={styles.btnWrapper}>
                <button onClick={handleConfirm}>Confirm</button>
            </div>
        </div>
    );
};

export default ReserveCalendar;
