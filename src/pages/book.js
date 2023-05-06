import React from 'react';
import { useState, useEffect } from 'react';
import './styles/book.css'

const Book = (props) => {

	const [data, setData] = useState([]);

	const [formData, setFormData] = useState({
		locationID: "",
		appointment_time: "",
		appointmentType: ""
	}) 

	const fetchData = () => {
		fetch(`http://localhost:8000/api/v1/appointments`)
		.then((response) => response.json())
		.then((actualData) => {
			console.log(actualData);
			setData(actualData.data);
			console.log(data);
		})
		.catch((err) => {
			console.log(err.message);
		});
	};

	useEffect(() => {
		fetchData();
	}, []);

	var appointments = []
	for(let i=0; i<data.length; i++){
		if(data[i].govID == props.name.govID){
			appointments.push(data[i])
		}
	}

	function handleChange(event) {
		console.log(formData)
		const {name, value, type, checked} = event.target
		setFormData(prevFormData => ({
			...prevFormData,
			[name]: type === "checkbox" ? checked : value
		}))
	}

	function handleSubmit (event) {
		event.preventDefault();
		fetch('http://localhost:8000/api/v1/appointments', {
		  method: 'POST',
		  headers: {
			'Content-type': 'application/json; charset=UTF-8',
		 },
		  body: JSON.stringify({
			appointment_time: formData.appointment_time,
			locationID: parseInt(formData.locationID),
			govID: props.name.govID,
			appointmentType: formData.appointmentType
		})
		})
		.then(res => res.json())
		.then(data => console.log(data))
		.catch(err => console.log(err));

	  }

	return (
		<form onSubmit={handleSubmit} style={{ border: "1px solid #ccc" }}>
		<div className="table-wrapper">
    		<table className="fl-table">
        		<thead>
        			<tr>
						<th>ID</th>
						<th>Appointment Type</th>
						<th>Appointment Time</th>
						<th>Address</th>
						<th>City</th>
        			</tr>
        		</thead>
        		<tbody>
					{
						appointments.map((item, index) => (
						<tr key={index}>
							<td>{item.appointmentID}</td>
							<td>{item.appointmentType}</td>
							<td>{'Day: ' + item.appointment_time.split('T')[0] + '   Time: ' + item.appointment_time.split('T')[1].substring(0, item.appointment_time.split('T')[1].length-1)}</td>
							<td>{item.address}</td>
							<td>{item.city}</td>
						</tr>
						))}
        
        		</tbody>
    		</table>
		</div>

		<label for="location">Choose a location:</label>
			<select id="location" name="locationID" onChange={handleChange} value={formData.locationID}>
				<option value="1">Blat</option>
				<option value="2">Achrafieh</option>
				<option value="3">Tyre</option>
			</select>

		<br></br><br></br>
        <label htmlFor="appointmentType">
          <b>Choose Appointment Type</b>
        </label>
        <input type="text" onChange={handleChange} value={formData.appointmentType} placeholder="Appointment Type" name="appointmentType" required />

		<label for="appointment_time">Choose a date and time:</label>
		<input type="datetime-local" id="appointment_time" onChange={handleChange} name="appointment_time" value={formData.appointment_time} required></input>

		<div className="clearfix">
          <button type="button" className="cancelbtn">
            Cancel
          </button>
          <button type="submit" className="signupbtn">
            Book
          </button>
        </div>
		</form>
	  );
};

export default Book;
