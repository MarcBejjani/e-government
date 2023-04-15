import React, { useState } from "react";
import "./styles/signup.css";

const SignUp = () => {

  const [formData, setFormData] = useState({
      ID: "",
      email: "",
      password: "",
      repeat: "",
      remember: true
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
      if(formData.password === formData.repeat){
        console.log("Matching")
      }else{
        console.log('no')
        return
      }
  }

  return (
    <form onSubmit={handleSubmit} style={{ border: "1px solid #ccc" }}>
      <div className="container">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
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

        <label htmlFor="psw-repeat">
          <b>Repeat Password</b>
        </label>
        <input
          type="password"
          onChange={handleChange}
          value={formData.repeat}
          placeholder="Repeat Password"
          name="repeat"
          required
        />

        <label htmlFor="remember">
          <input
          id="remember"
          onChange={handleChange}
            type="checkbox"
            checked={formData.remember}
            name="remember"
            value={formData.checked}
            style={{ marginBottom: "15px" }}
          />{" "}
          Remember me
        </label>

        <p>
          By creating an account you agree to our{" "}
          <a href="#" style={{ color: "dodgerblue" }}>
            Terms & Privacy
          </a>
          .
        </p>

        <div className="clearfix">
          <button type="button" className="cancelbtn">
            Cancel
          </button>
          <button type="submit" className="signupbtn">
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
