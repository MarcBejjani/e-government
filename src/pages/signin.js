import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./styles/signup.css";

const SignIn = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
      ID: "",
      email: "",
      password: "",
  }) 

  function handleChange(event) {
      const {name, value, type, checked} = event.target
      setFormData(prevFormData => ({
          ...prevFormData,
          [name]: type === "checkbox" ? checked : value
      }))
  }

  function handleSubmit(event) {
      event.preventDefault()
  }

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(formData.ID));
  }, [formData.ID]);

  return (
    <form onSubmit={handleSubmit} style={{ border: "1px solid #ccc" }}>
      <div className="container">
        <h1>Sign In</h1>
        <p>Please sign in</p>
        <hr></hr>

        <label htmlFor="id">
          <b>ID</b>
        </label>
        <input type="text" onChange={handleChange} value={formData.ID} placeholder="Enter ID" name="ID" required />

        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input type="text" onChange={handleChange}value={formData.email} placeholder="Enter Email" name="email" required />

        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          onChange={handleChange}
          value={formData.password}
          placeholder="Enter Password"
          name="password"
          required
        />

        <div className="clearfix">
          <button type="button" className="cancelbtn">
            Cancel
          </button>
          <button type="submit" className="signupbtn">
            Sign In
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignIn;
