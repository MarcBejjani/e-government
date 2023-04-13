import React from 'react';
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

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' exact element={<Home />} />
		<Route path='/fees' element={<Fees />} />
		<Route path='/book' element={<Book />} />
		<Route path='/request' element={<AskRequest />} />
		<Route path='/locations' element={<Location />} />
		<Route path='/vote' element={<Vote />} />
		<Route path='/sign-up' element={<SignUp />} />
	</Routes>
	</Router>
);
}

export default App;
