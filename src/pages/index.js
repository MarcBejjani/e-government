import React from 'react';
import './styles/index.css'

const Home = () => {
return (
	<div>
		<div className="intro">
			<p>Welcome to the e-government platform!</p>
			<br></br>
			<p>Please login or sign up to access the application.</p>
		</div>
		<table className='table'>
			<tr>
				<td className='td'><a href="sign-up">Sign up</a></td>
				<td className='td'><a href="signin">Sign in</a></td>
			</tr>
		</table>
	</div>
);
};

export default Home;
