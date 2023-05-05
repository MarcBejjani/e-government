import React from 'react';
import { useState, useEffect } from 'react';
import './styles/locations.css'

const Location = (props) => {

	const [data, setData] = useState([]);

	const fetchData = () => {
		fetch(`http://localhost:8000/api/v1/locations`)
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


	return (
		<div className="table-wrapper">
    		<table className="fl-table">
        		<thead>
        			<tr>
						<th>ID</th>
						<th>Address</th>
						<th>City</th>
						<th>Hours</th>
						<th>Services Offered</th>
        			</tr>
        		</thead>
        		<tbody>
					{data.map((item, index) => (
						<tr key={index}>
							<td>{item.locationID}</td>
							<td>{item.address}</td>
							<td>{item.city}</td>
							<td>{item.hours}</td>
							<td>{item.servicesOffered}</td>
						</tr>
						))}
        
        		</tbody>
    		</table>
		</div>
	  );
};

export default Location;
