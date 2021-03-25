import React from "react";
import { ChatEngine } from "react-chat-engine";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";

import "./App.css";

import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";

const App = () => {
	const history = useHistory();

	if (!localStorage.getItem("username")) {
		history.push("/login");
	}

	return (
		<Switch>
			<Route exact path="/">
				<ChatEngine
					height="100vh"
					projectID="3a250271-21d7-4fb8-9d6d-4464803ed8c2"
					userName={localStorage.getItem("username")}
					userSecret={localStorage.getItem("password")}
					renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
				/>
			</Route>
			<Route exact path="/login" component={LoginForm} />
			<Route exact path="/sign-up" component={SignUpForm} />
		</Switch>
	);
};

export default App;
