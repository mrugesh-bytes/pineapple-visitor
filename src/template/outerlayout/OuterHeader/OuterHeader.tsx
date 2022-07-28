import React from "react";
import styles from "./OuterHeader.module.css";
import logo from "../../../images/core/Pineapple-logo.svg";
import Button from "../../../components/common/button/Button";
import { useLocation, useNavigate } from "react-router-dom";

const OuterHeader = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const path = location.pathname;
    const handleClick = () => {
        navigate(path === "/signup" ? "/login" : "/signup");
    };
    return (
        <div className={styles.fluid}>
            <div className={`${styles.outerContainer} ${styles.flexContainer}`}>
                <div className={styles.logo}>
                    <img src={logo} alt="pineapple logo"></img>
                </div>
                <div className={styles.btnWrapper}>
                    <Button
                        text={path === "/signup" ? "Sign In" : "Sign Up"}
                        onClick={handleClick}
                    />
                </div>
            </div>
        </div>
    );
};

export default OuterHeader;
