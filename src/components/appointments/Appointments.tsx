import React, { useEffect } from 'react';
import styles from './Appointments.module.css';
import iconDelete from '../../images/icons/icon-delete.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAppointments } from '../../redux/appointment/actions/appointment.action';
import moment from 'moment';

const Appointments = () => {
    const dispatch = useDispatch();
    const appointments = useSelector((state: any) => state.appointmentReducer.appointments.data);

    useEffect(() => {
        dispatch(getUserAppointments());
    }, [dispatch]);

    return (
        <div className={styles.appointments}>
            <table className={styles.appointmentTable}>
                <tr className={styles.tableHeader}>
                    <th className={styles.appointmentDate}>Date</th>
                    <th>Location</th>
                    <th>Unit Name</th>
                    <th className={styles.appointmentAction}></th>
                </tr>
                {appointments.length > 0 &&
                    appointments.map((appointment: any) => (
                        <tr key={appointment.appointmentId}>
                            <td>{moment(appointment.appointmentDate).format('Do MMMM YYYY')}</td>
                            <td>{appointment.locationName}</td>
                            <td>{appointment.unitName}</td>
                            <td>
                                <img className={styles.iconDelete} src={iconDelete} alt="Delete" />
                            </td>
                        </tr>
                    ))}
            </table>
            {/* <div className={styles.appointmentFooter}>
                <ul>
                    <li>Previous</li>
                    <li className={styles.active}>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>Next</li>
                </ul>
            </div> */}
        </div>
    );
};

export default Appointments;
