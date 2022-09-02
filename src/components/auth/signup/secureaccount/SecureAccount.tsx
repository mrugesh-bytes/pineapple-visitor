import React from 'react';
import styles from './SecureAccount.module.css';
import iconBack from '../../../../images/icons/icon-chevron-right.svg';
import iconHide from '../../../../images/icons/icon-hide.svg';
import iconShow from '../../../../images/icons/icon-show.svg';

const SecureAccount = () => {
    return (
        <div className={styles.accountWrapper}>
            <div className={styles.header}>
                <span className={styles.back}>
                    <img src={iconBack} alt="back" />
                </span>
                <h3 className={styles.title}>Secure Account</h3>
            </div>
            <div className={styles.accountBody}>
                <form>
                    <div className={styles.fieldWrapper}>
                        <label>Password</label>
                        <div className={styles.passwordWrapper}>
                            <input type="password" name="password" placeholder="Add 8 digit strong password" />
                            <div className={styles.passwordToggle}>
                                {/* <img src={iconHide} alt="hide" /> */}
                                <img src={iconShow} alt="show" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.fieldWrapper}>
                        <label>Confirm Password</label>
                        <div className={styles.passwordWrapper}>
                            <input type="password" name="password" placeholder="Renter Your password " />
                            <div className={styles.passwordToggle}>
                                {/* <img src={iconHide} alt="hide" /> */}
                                <img src={iconShow} alt="show" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.btnWrapper}>
                        <button className={`${styles.disable} ${styles.success}`}>Set Credentials</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SecureAccount;
