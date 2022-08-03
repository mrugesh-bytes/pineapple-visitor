import React, { useEffect, useState } from 'react';
import Calendar from '../../common/calendar/Calendar';
import styles from './ReserveCalendar.module.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import moment from 'moment';

const ReserveCalendar = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [minDate, setMinDate] = useState(new Date());
    const [booked, setBooked]: any = useState([]);
    const [maxDate, setMaxDate] = useState(new Date());
    const navigate = useNavigate();
    const unit = useSelector((state: any) => state.unitReducer.unit.data);

    const handleConfirm = () => {
        if (selectedDate) navigate('/confirm', { state: { selectedDate, unitId: unit.id } });
    };

    useEffect(() => {
        if (unit?.dates) {
            const startDate = new Date(unit.dates.split(',')[0]);
            const endDate = new Date(unit.dates.split(',')[1]);
            const currentDate = new Date();
            if (startDate < currentDate && currentDate < endDate) {
                setMinDate(currentDate);
                setMaxDate(endDate);
            } else if (startDate > currentDate) {
                setMinDate(startDate);
                setMaxDate(endDate);
            } else {
                return;
            }
        }
        if (unit?.appointments?.length > 0) {
            const bookedDates: any = [];
            unit.appointments.map((appointment: any) => bookedDates.push(moment(appointment.start_time).format('DD-MM-YYYY')));
            setBooked(bookedDates);
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
