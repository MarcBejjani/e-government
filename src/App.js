import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Fees from './pages/fees';
import Book from './pages/book';
import AskRequest from './pages/request';
import Location from './pages/locations';
import Vote from './pages/vote';
import SignUp from './pages/signup';
import SignIn from './pages/signin';
import Welcome from './pages/welcome'

function App() {
	var [ID, setID] = useState("")
	const [data, setData] = useState([]);
	var udata = {};

	useEffect(() => {
		const items = JSON.parse(localStorage.getItem('name'));
		if (items) {
		 setID(items.ID);
		}
	  }, '');

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

	for(let i=0; i<data.length; i++){
		if(data[i].govID == ID){
			udata = data[i]
		}
	}


return (
	<Router>
	{
		ID.length > 0&&
		<Navbar name={udata} />
	}
	<Routes>
		<Route path='/' exact element={<Home />} />
		<Route path='/welcome' element={<Welcome name={udata} />} />
		<Route path='/fees' element={<Fees name={udata} />} />
		<Route path='/book' element={<Book name={udata} />} />
		<Route path='/request' element={<AskRequest name={udata} />} />
		<Route path='/locations' element={<Location name={udata} />} />
		<Route path='/vote' element={<Vote name={udata} />} />
		<Route path='/sign-up' element={<SignUp />} />
		<Route path='/signin' element={<SignIn />} />
	</Routes>
	</Router>
);
}

export default App;
