import React, { useContext, useEffect, useState } from "react";
import style from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import iconGmail from "../../../images/icons/icon-google.svg";
import iconApple from "../../../images/icons/icon-apple.svg";
import iconFacebook from "../../../images/icons/icon-facebook.svg";
import iconInsta from "../../../images/icons/icon-instagram.svg";
import iconShow from "../../../images/icons/icon-show.svg";
import iconHide from "../../../images/icons/icon-hide.svg";
import { useDispatch, useSelector } from "react-redux";
import { getAuth } from "../../../redux/auth/actions/auth.action";
import { AppContext } from "../../context/AppContect";

const Login = () => {
	const appContext = useContext(AppContext)
	const [showPass, setShowPass] = useState(false);
	const [loginDetails, setLoginDetails]: any = useState({
		email: "",
		password: "",
	});
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const error = useSelector(
		(state: any) => state?.authReducer?.error
	);

	const loading = useSelector((state: any) => state?.authReducer?.loading);
	const handleLoginDetails = (event: any) => {
		setLoginDetails({
			...loginDetails,
			[event.target.name]: event.target.value,
		});
	};

	const handleSignIn = (e: any) => {
		e.preventDefault();
		dispatch(getAuth(loginDetails, onSuccess));
	};
	const onSuccess = (data: any) => {
		appContext.accessToken = data.token;
        appContext.visitor = data.visitor;
		navigate("/units");
	};

	return (
		<div className={style.container}>
			<h2 className={style.authTitle}>Welcome Back!</h2>
			<p className={style.authDesc}>
				Hey 👋 Enter your login credentials to sign in
			</p>
			<form className={style.formWrapper}>
				<div className={style.fieldWrapper}>
					<label>Email Id</label>
					<input
						type="email"
						name="email"
						placeholder="Enter your email address"
						onChange={handleLoginDetails}
					/>
				</div>
				<div className={style.fieldWrapper}>
					<label>Password</label>
					<div className={style.passwordWrapper}>
						<input
							type={showPass ? "text" : "password"}
							name="password"
							placeholder="Enter your password"
							onChange={handleLoginDetails}
						/>
						<div
							onClick={() => setShowPass(!showPass)}
							className={style.iconToggle}
						>
							<img
								src={!showPass ? iconShow : iconHide}
								alt="Eye"
							/>
						</div>
					</div>
				</div>
				<Link className={style.forgetPassword} to="/forgot-password">
					Trouble to get sign in?
				</Link>
				<div className={style.submitWrapper}>
					<button onClick={handleSignIn} type="submit">
						Sign In
					</button>
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

export default Login;
