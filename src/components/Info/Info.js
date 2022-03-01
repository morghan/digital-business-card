import React from 'react';
import InfoPhoto from './photo.jpg';
import MailIcon from './Icon.svg';

export default function Info() {
	return (
		<div className='InfoSection'>
			<img src={InfoPhoto} alt='' />
			<h1>Joel Rivera</h1>
			<h2>Frontend Developer</h2>
			<p>joelrivera.website</p>
			<button>
				<img src={MailIcon} alt='' />
				<span>Email</span>
			</button>
		</div>
	);
}
