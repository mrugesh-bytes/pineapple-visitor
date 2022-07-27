import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "../login/Login.module.css";
import iconGmail from "../../../images/icons/icon-google.svg";
import iconApple from "../../../images/icons/icon-apple.svg";
import iconFacebook from "../../../images/icons/icon-facebook.svg";
import iconInsta from "../../../images/icons/icon-instagram.svg";
import iconShow from "../../../images/icons/icon-show.svg";
import iconHide from "../../../images/icons/icon-hide.svg";
import { getRegister } from "../../../redux/auth/actions/auth.action";
import { useDispatch } from "react-redux";

const Signup = () => {
	const [showPass, setShowPass] = useState(false);
	const [showConfirmPass, setShowConfirmPass] = useState(false);
	const [error, setError] = useState({
		emailError: false,
		passwordError: false,
	});

	const [signupDetails, setSignupDetails]: any = useState({
		name: "test",
		email: "",
		password: "",
		phone: "9876543210",
	});

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSignupDetails = (event: any) => {
		setSignupDetails({
			...signupDetails,
			[event.target.name]: event.target.value,
		});
	};

	const handleSignup = (e: any) => {
		e.preventDefault();
		if (signupDetails.email.length === 0) {
			setError({ ...error, emailError: true });
			return;
		} else if (signupDetails.password !== signupDetails.confirmPassword) {
			setError({ ...error, passwordError: true });
			return;
		}
		dispatch(getRegister(signupDetails, onSuccess));
	};

	const onSuccess = () => {
		navigate("/login");
	};

	return (
		<div className={style.container}>
			<h2 className={style.authTitle}>Welcome Back!</h2>
			<p className={style.authDesc}>
				Hey 👋 Enter your details to signup
			</p>
			<form onSubmit={handleSignup} className={style.formWrapper}>
				<div className={style.fieldWrapper}>
					<label>Full Name</label>
					<input
						type="text"
						name="name"
						placeholder="Enter your full Name"
						onChange={handleSignupDetails}
					/>
				</div>
				<div className={style.fieldWrapper}>
					<label>Email Id</label>
					<input
						type="email"
						name="email"
						placeholder="Enter your email address"
						onChange={handleSignupDetails}
					/>
				</div>
				<div className={style.fieldWrapper}>
					<label>Password</label>
					<div className={style.passwordWrapper}>
						<input
							type={showPass ? "text" : "password"}
							name="password"
							placeholder="Enter your password"
							onChange={handleSignupDetails}
						/>
						<div
							className={style.iconToggle}
							onClick={() => setShowPass(!showPass)}
						>
							<img
								src={!showPass ? iconShow : iconHide}
								alt="Eye"
							/>
						</div>
					</div>
				</div>
				<div className={style.fieldWrapper}>
					<label>Confirm Password</label>
					<div className={style.passwordWrapper}>
						<input
							type={showConfirmPass ? "text" : "password"}
							name="confirmPassword"
							placeholder="Enter your password"
							onChange={handleSignupDetails}
						/>
						<div
							className={style.iconToggle}
							onClick={() => setShowConfirmPass(!showConfirmPass)}
						>
							<img
								src={!showConfirmPass ? iconShow : iconHide}
								alt="Eye"
							/>
						</div>
					</div>
				</div>
				<div className={style.submitWrapper}>
					<button type="submit">Sign Up</button>
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

export default Signup;
