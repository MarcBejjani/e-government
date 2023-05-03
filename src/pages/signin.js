import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./styles/signup.css";

const SignIn = () => {

  const [data, setData] = useState([]);

	const fetchData = () => {
		fetch(`http://localhost:8000/api/v1/users`)
		.then((response) => response.json())
		.then((actualData) => {
			setData(actualData.data);
		})
		.catch((err) => {
			console.log(err.message);
		});
	};

	useEffect(() => {
		fetchData();

	}, []);

  var entries = data.map(function(val, index){
    return {govID:val.govID, password:val.password, firstName: val.firstName};
})

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
      ID: "",
      password: ""
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
      const numberOfEntries = entries.length
      var x = 0;
      var id;
      var pass;
      for(let i = 0; i<entries.length; i++){
        id = entries[i].govID
        pass = entries[i].password
        if(formData.ID == id && formData.password == pass){
          navigate('/welcome')
        }else{
          x++;
        }
      }
      if(numberOfEntries == x){
        alert('Wrong Combination!')
      }
  }

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(formData));
  }, [formData]);

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
