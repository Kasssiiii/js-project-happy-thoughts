import React, { useState } from "react";

import "./LoginBar.css";

import { loginUser, registerUser } from "../thoughtsAPI";

export const LoginBar = ({ setUserData, userData }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleLogin = () => {
        // ensure user and password are set
        if (username && password) {
            loginUser(username, password, (code, data) => {
                if (code === 200) {
                    setUserData({ user: data.userName, token: data.accessToken });
                    setErrorMessage("");
                } else {
                    setErrorMessage("Login failed. Please try again.");
                }
                setUsername("");
                setPassword("");
            });
        }
    };

    const handleRegister = () => {
        // ensure user and password are set
        if (username && password) {
            registerUser(username, password, (code, data) => {
                if (code === 200) {
                    setUserData({ user: data.name, token: data.accessToken });
                    setErrorMessage("");
                } else {
                    setErrorMessage("Registration failed. Please try again.");
                }
                setUsername("");
                setPassword("");
            });
        }
    };

    return (
        <div>
            <div className="welcome-message">
                <span className="error-message">{errorMessage}</span>
                {userData ? (
                    <>
                        <span>Welcome, {userData.user}!</span>
                        <button onClick={() => setUserData(null)}>Logout</button>
                    </>
                ) : (
                    <>
                        <label>Username: </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username"
                        />
                        <label>Password: </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                        />
                        <button onClick={handleLogin}>Login</button>
                        <button onClick={handleRegister}>Register</button>
                    </>
                )}
            </div>
        </div>
    );
};
