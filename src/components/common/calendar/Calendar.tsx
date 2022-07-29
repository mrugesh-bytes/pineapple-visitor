import React, { useState } from 'react';
import ReactCalendar from 'react-calendar';

const Calendar = ({ setSelectedDate, minDate, maxDate }: any) => {
    const [value, onChange] = useState(new Date());

    const handleChange = (e: any) => {
        onChange(e);
        setSelectedDate(e);
    };

    return (
        <div>
            <ReactCalendar minDate={minDate} maxDate={maxDate} next2Label={null} prev2Label={null} onChange={handleChange} value={value} allowPartialRange={true} />
        </div>
    );
};

export default Calendar;
