import moment from 'moment';
import React, { useState } from 'react';
import ReactCalendar from 'react-calendar';

const Calendar = ({ booked, setSelectedDate, minDate, maxDate }: any) => {
    const [value, onChange] = useState(new Date());

    const handleChange = (e: any) => {
        onChange(e);
        setSelectedDate(e);
    };

    return (
        <div>
            <ReactCalendar
                tileClassName={({ date, view }): any => {
                    if (booked.find((event: any) => event === moment(date).format('DD-MM-YYYY'))) {
                        return 'booked';
                    }
                }}
                tileDisabled={({ date }) => date.getDay() === 0}
                minDate={minDate}
                maxDate={maxDate}
                next2Label={null}
                prev2Label={null}
                onChange={handleChange}
                value={value}
                allowPartialRange={true}
            />
        </div>
    );
};

export default Calendar;
