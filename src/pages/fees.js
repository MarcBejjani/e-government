import React from 'react';
import './styles/fees.css'

const Fees = (props) => {
return (
	<div>
		<h1 id="title">
			Here is a list of your outstanding fees {props.name}!
		</h1>
	</div>
);
};

export default Fees;
