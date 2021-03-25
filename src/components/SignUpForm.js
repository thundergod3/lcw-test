import { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

import axios from "axios";

const SignUpForm = () => {
	const history = useHistory();

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		const authObject = {
			"PRIVATE-KEY": "20f701e3-4435-4e1d-ad9a-c99c5e90724d",
		};

		try {
			await axios.post(
				"https://api.chatengine.io/users/",
				{ username, secret: password },
				{ headers: authObject }
			);

			localStorage.setItem("username", username);
			localStorage.setItem("password", password);

			window.location.reload();
		} catch (error) {
			setError("Oops, incorrect credentials");
		}
	};

	if (localStorage.getItem("username")) {
		history.push("/");
	}

	return (
		<div className="wrapper">
			<div className="form">
				<h1 className="title">Chat Application</h1>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						className="input"
						placeholder="Username"
						required
					/>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="input"
						placeholder="Password"
						required
					/>
					<p className="link-navigate">
						Have an account? Click <Link to="/login">here</Link> to login
					</p>
					<div style={{ display: "flex", justifyContent: "center" }}>
						<button type="submit" className="button">
							<span>Join Chatting</span>
						</button>
					</div>
					<h2 className="error">{error}</h2>
				</form>
			</div>
		</div>
	);
};

export default SignUpForm;
