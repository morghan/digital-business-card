import React from 'react';
import InfoPhoto from './photo.jpg';
import MailIcon from './Icon.svg';

export default function Info() {
	return (
		<div className='InfoSection'>
			<img src={InfoPhoto} alt='' className='InfoPhoto' />
			<h1 className='InfoTitle'>Joel Rivera</h1>
			<h2 className='InfoPosition'>Frontend Developer</h2>
			<p>joelrivera.website</p>
			<button>
				<img src={MailIcon} alt='' />
				<span>Email</span>
			</button>
		</div>
	);
}
