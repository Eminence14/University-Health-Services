import React from "react";
import logo from "../assets/images/logo2.jpg";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const Login = () => {
	return (
		<div className="flex login">
			<div className="flex left">
				<img src={logo} alt="" />
				<h2 className="alata">
					The
					<br /> University Health Service <br /> Login
				</h2>
			</div>
			<div className="flex right">
				<div className="text">
					<h2>Welcome Back</h2>
					<p>Enter your details below to get started</p>

					<form className="flex">
						<div>
							<label htmlFor="username">Username</label>
							<div className="input">
								<input type="text" id="username" placeholder="Username" />
							</div>
						</div>
						<div>
							<label htmlFor="password">Password</label>
							<div className="input">
								<input type="text" id="password" placeholder="Password" />
								<span className="eye-icon">
									<FaRegEyeSlash />
									{/* <FaEye /> */}
								</span>
							</div>
						</div>
						<div className="forgot-pwd">Forgot your password?</div>
						<button type="submit">Log in</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
