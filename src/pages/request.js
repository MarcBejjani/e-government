import React from 'react';
import { useState, useEffect } from 'react';
import './styles/request.css'

const AskRequest = (props) => {
	const [data, setData] = useState([]);

	const fetchData = () => {
		fetch(`http://localhost:8000/api/v1/requests`)
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
		<div className="App">
		  <tbody>
			<tr>
			  <th>Name</th>
			  <th>Brand</th>
			  <th>Image</th>
			  <th>Price</th>
			  <th>Rating</th>
			</tr>
			{data.map((item, index) => (
			  <tr key={index}>
				<td>{item.requestID}</td>
				<td>{item.firstName}</td>
			  </tr>
			))}
		  </tbody>
		</div>
	  );
};

export default AskRequest;
