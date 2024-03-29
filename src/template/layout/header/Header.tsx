import React from 'react';
import styles from './Header.module.css';
import logo from '../../../images/core/Pineapple-logo.svg';
import Button from '../../../components/common/button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/rootReducer';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        dispatch(logout());
        navigate('/login', { replace: true });
    };

    return (
        <div className={styles.fluid}>
            <div className={`${styles.outerContainer} ${styles.flexContainer}`}>
                <div className={styles.logo}>
                    <Link to="/units">
                        <img src={logo} alt="pineapple logo"></img>
                    </Link>
                </div>
                <div className={styles.headerMenu}>
                    <ul>
                        <li>
                            <Link to="/units">Units</Link>
                        </li>
                        {/* <li>
                            <Link to="/tour-filter">Build My Tour</Link>
                        </li>
                        <li>
                            <Link to="/">Map</Link>
                        </li>
                        <li>
                            <Link to="/">Amenities</Link>
                        </li> */}

                        <li>
                            <Link to="/appointments">Appointments</Link>
                        </li>
                        {/* <li>
                            <Link to="/">Leasing Center</Link>
                        </li>
                        <li>
                            <Link to="/">Support</Link>
                        </li> */}
                    </ul>
                    <div className={styles.btnWrapper}>
                        <Button onClick={handleLogout} text={'Logout'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
