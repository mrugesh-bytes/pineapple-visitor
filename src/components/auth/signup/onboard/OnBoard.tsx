import React from 'react';
import styles from './OnBoard.module.css';

const OnBoard = () => {
    return (
        <div className={styles.onBoardContainer}>
            <div className={styles.header}>
                <h3 className={styles.title}>Welcome Back!</h3>
                <p className={styles.description}>Hey 👋 Enter your details to sign up</p>
            </div>
            <div className={styles.onBoardBody}>
                <ul className={styles.listItems}>
                    <li className={styles.item}>
                        <span className={styles.num}>1</span>
                        <p className={styles.itemDesc}>
                            <span className={styles.title}>Verify Your Documents</span>
                            <span className={styles.description}>Add your Documents for Authentication</span>
                        </p>
                    </li>
                    <li className={styles.item}>
                        <span className={styles.num}>2</span>
                        <p className={styles.itemDesc}>
                            <span className={styles.title}>Edit your Personal Details</span>
                            <span className={styles.description}>Add Your Personal Details</span>
                        </p>
                    </li>
                    <li className={styles.item}>
                        <span className={styles.num}>3</span>
                        <p className={styles.itemDesc}>
                            <span className={styles.title}>Secure Your Account</span>
                            <span className={styles.description}>Create Credential to setup account</span>
                        </p>
                    </li>
                </ul>
            </div>
            <div className={styles.onBoardFooter}>
                <button className={`${styles.btnDisable} ${styles.btnSubmit}`}>Sign Up</button>
            </div>
        </div>
    );
};

export default OnBoard;
