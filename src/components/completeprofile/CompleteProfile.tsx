import React from 'react';
import styles from './CompleteProfile.module.css';
import uploadAvatar from '../../images/temp/upload-avatar.svg';
import defaultProfilePic from '../../images/temp/default_profile_pic.png';

const CompleteProfile = () => {
    return (
        <div className={styles.profileWrapper}>
            <div className={styles.profileHeader}>
                <h2>Complete your profle</h2>
            </div>
            <form>
                <div className={styles.modalBody}>
                    <div className={styles.staffPhoto}>
                        <img className={styles.staffAvatar} src={defaultProfilePic} alt="Add Staff" />
                        <img className={styles.uploadAvatar} src={uploadAvatar} alt="Upload Avatar"></img>
                        <input type="file" name="upload-avatar" accept="image/*" />
                    </div>
                    <div className={styles.formStaff}>
                        <div className={styles.field}>
                            <label>Name</label>
                            <input type="text" placeholder="Enter your name"></input>
                        </div>
                        <div className={styles.field}>
                            <label>Email Id</label>
                            <input type="email" placeholder="Enter your email id"></input>
                        </div>
                        <div className={styles.field}>
                            <label>Contact No.</label>
                            <div className={styles.fieldWrapper}>
                                <input type="number" />
                                <button onClick={(e: any) => e.preventDefault()} className={styles.fieldBtn}>
                                    Get OTP
                                </button>
                            </div>
                        </div>
                        <div className={styles.field}>
                            <label>Locality</label>
                            <input type="search" placeholder="Enter your locality" />
                        </div>
                    </div>
                    <div className={styles.modalFooter}>
                        <button className={`${styles.sendBtn} ${styles.verified}`}>Update Profile</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CompleteProfile;
