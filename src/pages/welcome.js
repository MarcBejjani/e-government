import React from 'react';
import image from './media/egov.jpeg'
import './styles/welcome.css'

const Welcome = (props) => {
return (
	<div>
        <h1 id="title">Welcome {props.name.firstName}!</h1>
        <br></br>
        <p id="text">
            This is the e-government platform where you can access an array of different features.<br></br>
            To get started, click on any of the links in the taskbar above.
        </p>
        <img id="stock-image" src={image} alt='stock' />
	</div>
);
};

export default Welcome;
