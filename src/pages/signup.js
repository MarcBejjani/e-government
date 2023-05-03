import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/signup.css";

const SignUp = () => {

  const navigate = useNavigate();


  const [formData, setFormData] = useState({
      ID: "",
      firstName: "",
      lastName: "",
      address: "",
      password: "",
      dOB: "",
      gender: "",
      hasVoted: "",
      voterID: ""
  }) 

  function handleChange(event) {
      const {name, value, type, checked} = event.target
      setFormData(prevFormData => ({
          ...prevFormData,
          [name]: type === "checkbox" ? checked : value
      }))
  }

  function handleSubmit (event) {
    event.preventDefault();
    fetch('http://localhost:8000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
     },
      body: JSON.stringify({
        govId: formData.ID,
        firstName: formData.firstName,
        lastName: formData.lastName,
        address: formData.address,
        password: formData.password,
        dOB: null,
        gender: null,
        hasVoted: 0,
        voterID: null
    })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));

    navigate('/welcome')
  }

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(formData));
  }, [formData.ID]);

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

        <label htmlFor="fname">
          <b>First Name</b>
        </label>
        <input type="text" onChange={handleChange} value={formData.firstName} placeholder="First Name" name="firstName" required />

        <label htmlFor="lname">
          <b>Last Name</b>
        </label>
        <input type="text" onChange={handleChange} value={formData.lastName} placeholder="Last Name" name="lastName" required />

        <label htmlFor="address">
          <b>Address</b>
        </label>
        <input type="text" onChange={handleChange} value={formData.address} placeholder="Address" name="address" required />

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
