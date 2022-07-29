import React from 'react';
import styles from './Dashboard.module.css';
import bannerImg from '../../../../images/core/appointment-confirmation.png';
import iconCalender from '../../../../images/icons/icon-calendar.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { clearAppointmentState, createAppointment } from '../../../../redux/appointment/actions/appointment.action';

const Dashboard = () => {
    const location: any = useLocation();
    const selectedDate = location.state.selectedDate;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const unit = useSelector((state: any) => state.unitReducer.unit.data);
    const appointmentData = useSelector((state: any) => state?.appointmentReducer?.appointment?.data);

    const handleConfirm = () => {
        const appointment = {
            start_time: moment(selectedDate).utc().startOf('date').format(),
            end_time: moment(selectedDate).utc().endOf('date').format(),
            locker_number: `${unit.locker_number}`,
            unit: unit.id,
            location: unit.location.id,
            device: unit.device.id,
        };
        dispatch(createAppointment(appointment));
    };

    const handleOkay = () => {
        dispatch(clearAppointmentState());
        navigate('/appointments');
    };

    return (
        <div className={styles.dashboardWrapper}>
            <h2 className={styles.title}>Schedule a visit for B</h2>
            <div className={styles.dashboardBanner}>
                <img src={bannerImg} alt="banner" />
            </div>
            <div className={styles.scheduleInfo}>
                {appointmentData && Object.keys(appointmentData).length > 0 && (
                    <h2 className={styles.confirmTitle}>Appointment Confirmed</h2>
                )}
                <p>All done! You will recieve an SMS message with more information once confirmed.</p>
                <div className={styles.schedule}>
                    <div className={styles.date}>
                        <div className={styles.scheduleIcon}>
                            <img src={iconCalender} alt="Icon Date" />{' '}
                        </div>
                        <span>{moment(selectedDate).format('DD-MM-YYYY')}</span>
                    </div>
                </div>
                <div className={styles.btnWrapper}>
                    {appointmentData && Object.keys(appointmentData).length > 0 ? (
                        <button onClick={handleOkay}>Okay</button>
                    ) : (
                        <button onClick={handleConfirm}>Confirm</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
