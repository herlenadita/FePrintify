import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Login.min.css';

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.removeItem("username");

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
        const response = await axios.post("https://8ac5-157-245-159-47.ngrok-free.app/user", { username, password });
        console.log("regis", response)
        if(!response.data.toLowerCase().includes("error"))
            {
            alert("Registration successful!");
            navigate("/login");
        }else{
            alert(response.data);
        }
    } catch (error) {
        alert("Registration failed!");
    }
  };

  return (
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-xl-6">
                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-primary"><a href="/">Printify</a></h1>
                                        <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                                    </div>
                                    <form className="user" onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <input type="text" className="form-control form-control-user" id="exampleInputUsername"
                                                placeholder="Username" value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                                required/>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="password" className="form-control form-control-user"
                                                    id="exampleInputPassword" placeholder="Password" value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    required/>
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="password" className="form-control form-control-user"
                                                    id="exampleRepeatPassword" placeholder="Repeat Password" value={confirmPassword}
                                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                                    required/>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-success btn-user btn-block">
                                            Register Account
                                        </button>
                                    </form>
                                    <hr/>
                                    <div className="text-center">
                                        <a className="small" href="/login">Already have an account? Login!</a>
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

export default Register;
