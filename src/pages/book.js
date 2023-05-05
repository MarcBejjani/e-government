import React from 'react';
import { useState, useEffect } from 'react';
import './styles/book.css'

const Book = (props) => {

	const [data, setData] = useState([]);

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


	return (
		<div className="table-wrapper">
    		<table className="fl-table">
        		<thead>
        			<tr>
						<th>ID</th>
						<th>Appointment Type</th>
						<th>Address</th>
						<th>City</th>
        			</tr>
        		</thead>
        		<tbody>
					{appointments.map((item, index) => (
						<tr key={index}>
							<td>{item.appointmentID}</td>
							<td>{item.appointmentType}</td>
							<td>{item.address}</td>
							<td>{item.city}</td>
						</tr>
						))}
        
        		</tbody>
    		</table>
		</div>
	  );
};

export default Book;
