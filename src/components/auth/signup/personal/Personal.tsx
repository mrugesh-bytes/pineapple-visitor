import React from 'react';
import styles from './Personal.module.css';
import iconBack from '../../../../images/icons/icon-chevron-right.svg';

const Personal = () => {
    return (
        <div className={styles.detailsWrapper}>
            <div className={styles.header}>
                <span className={styles.back}>
                    <img src={iconBack} alt="back" />
                </span>
                <h3 className={styles.title}>Edit your Personal Details</h3>
            </div>
            <div className={styles.detailsBody}>
                <form>
                    <div className={styles.fieldWrapper}>
                        <label>Full Name</label>
                        <input type="text" name="fullName" />
                    </div>
                    <div className={styles.fieldWrapper}>
                        <label>Email Id</label>
                        <input type="email" name="email" />
                    </div>
                    <div className={styles.fieldWrapper}>
                        <label>Contact No</label>
                        <div className={styles.phoneWrapper}>
                            <input type="tel" name="contact" />
                        </div>
                    </div>
                    <div className={styles.btnWrapper}>
                        <button>Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Personal;
