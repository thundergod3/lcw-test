import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import axios from "axios";

const LoginForm = () => {
	const history = useHistory();

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		const authObject = {
			"Project-ID": "3a250271-21d7-4fb8-9d6d-4464803ed8c2",
			"User-Name": username,
			"User-Secret": password,
		};

		try {
			axios.get("https://api.chatengine.io/chats", { headers: authObject });

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
						Don't have account? Click <Link to="/sign-up">here</Link> to create
					</p>
					<div style={{ display: "flex", justifyContent: "center" }}>
						<button type="submit" className="button">
							<span>Start Chatting</span>
						</button>
					</div>
					<h2 className="error">{error}</h2>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
