import React from 'react';
import styles from './Loader.module.css';
import imgLoader from '../../../images/core/loader.gif';

const Loader = () => {
    return (
        <div className={styles.loader}>
            <img src={imgLoader} alt="Loader" />
        </div>
    );
};

export default Loader;
