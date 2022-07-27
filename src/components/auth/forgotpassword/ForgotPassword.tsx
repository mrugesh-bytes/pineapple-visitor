import React from "react";
import style from "../login/Login.module.css";
import iconGmail from "../../../images/icons/icon-google.svg";
import iconApple from "../../../images/icons/icon-apple.svg";
import iconFacebook from "../../../images/icons/icon-facebook.svg";
import iconInsta from "../../../images/icons/icon-instagram.svg";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
	return (
		<div className={style.container}>
			<h2 className={style.authTitle}>Forgot Password?</h2>
			<p className={style.authDesc}>
				Hey 👋 Enter your email to reset password.
			</p>
			<form className={style.formWrapper}>
				<div className={style.fieldWrapper}>
					<label>Email Id</label>
					<input
						type="email"
						name="email"
						placeholder="Enter your email address"
					/>
				</div>
				<Link className={style.forgetPassword} to="/login">
					Want to sign in?
				</Link>
				<div className={style.submitWrapper}>
					<button type="submit">Submit</button>
				</div>
			</form>
			<div className={style.signinBorder}>
				<span>Or Sign in with</span>
			</div>
			<div className={style.socialContainer}>
				<div className={style.iconWrapper}>
					<img src={iconGmail} alt="Icon Google" />
				</div>
				<div className={style.iconWrapper}>
					<img src={iconApple} alt="Icon Apple" />
				</div>
				<div className={style.iconWrapper}>
					<img src={iconFacebook} alt="Icon Facebook" />
				</div>
				<div className={style.iconWrapper}>
					<img src={iconInsta} alt="Icon Instagram" />
				</div>
			</div>
		</div>
	);
};

export default ForgotPassword;
