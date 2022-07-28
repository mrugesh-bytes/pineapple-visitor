import React from 'react';
import styles from './Appointments.module.css';
import iconDelete from '../../images/icons/icon-delete.svg';

const Appointments = () => {
    return (
        <div className={styles.appointments}>
            <table className={styles.appointmentTable}>
                <tr className={styles.tableHeader}>
                    <th className={styles.appointmentDate}>Date</th>
                    <th>Location</th>
                    <th>Unit Name</th>
                    <th className={styles.appointmentAction}></th>
                </tr>
                <tr>
                    <td>24th july 2022</td>
                    <td>Alaska</td>
                    <td>Park towne Place</td>
                    <td>
                        <img className={styles.iconDelete} src={iconDelete} alt="Delete" />
                    </td>
                </tr>
                <tr>
                    <td>23th july 2022</td>
                    <td>Arizona</td>
                    <td>Seniun Builders</td>
                    <td>
                        <img className={styles.iconDelete} src={iconDelete} alt="Delete" />
                    </td>
                </tr>
                <tr>
                    <td>20th july 2022</td>
                    <td>Arkansas</td>
                    <td>CA Rental Solutions</td>
                    <td>
                        <img className={styles.iconDelete} src={iconDelete} alt="Delete" />
                    </td>
                </tr>
                <tr>
                    <td>18th july 2022</td>
                    <td>California</td>
                    <td>Orchild Developers</td>
                    <td>
                        <img className={styles.iconDelete} src={iconDelete} alt="Delete" />
                    </td>
                </tr>
                <tr>
                    <td>18th july 2022</td>
                    <td>Colorado</td>
                    <td>Two blue Slips</td>
                    <td>
                        <img className={styles.iconDelete} src={iconDelete} alt="Delete" />
                    </td>
                </tr>
                <tr>
                    <td>15th june 2022</td>
                    <td>Colorado</td>
                    <td>Riverloft apartments</td>
                    <td>
                        <img className={styles.iconDelete} src={iconDelete} alt="Delete" />
                    </td>
                </tr>
            </table>
            <div className={styles.appointmentFooter}>
                <ul>
                    <li>Previous</li>
                    <li className={styles.active}>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>Next</li>
                </ul>
            </div>
        </div>
    );
};

export default Appointments;
