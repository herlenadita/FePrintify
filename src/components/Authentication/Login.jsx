import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Login.min.css';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        // Simulate session check
        const username = localStorage.getItem("username"); // Retrieve token from localStorage

        if (username) {
            // If no token, update state
            navigate("/createPdf");
            
        }
    }, []); // Empty array means this runs only once

    const handleSubmit = async (e) => {
        e.preventDefault();
        const inputLogin = { username, password };
        try {
            const response = await axios.post("https://8ac5-157-245-159-47.ngrok-free.app/login", inputLogin);
            if(!response.data.toLowerCase().includes("invalid credentials"))
            {
                alert("Login successful!");
                localStorage.setItem("username", inputLogin.username); // Save session for authenticated routes
                navigate("/createPdf"); // Navigate to a protected route after login
            }
            else
            {
                alert(response.data);
            }
        } catch (error) {
            alert("Invalid credentials!");
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">

                <div className="col-xl-6">

                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-primary"><a href="/">Printify</a></h1>
                                            <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                        </div>
                                        <form className="user" onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <input type="text" className="form-control form-control-user"
                                                    id="exampleInputUsername" aria-describedby="usernameHelp"
                                                    placeholder="Enter Username..." value={username}
                                                    onChange={(e) => setUsername(e.target.value)}
                                                    required/>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control form-control-user"
                                                    id="exampleInputPassword" placeholder="Password" value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    required/>
                                            </div>
                                            <button type="submit" className="btn btn-success btn-user btn-block">
                                                Login
                                            </button>
                                        </form>
                                        <hr/>
                                        <div className="text-center">
                                            <a className="small" href="/register">Create an Account!</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};
    /*<div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
        />
        <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
        />
        <button type="submit">Login</button>
        </form>
    </div>*/

export default Login;
