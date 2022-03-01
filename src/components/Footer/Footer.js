import React from 'react';
import TwitterIcon from './TwitterIcon.svg';
import FacebookIcon from './FacebookIcon.svg';
import InstagramIcon from './InstagramIcon.svg';
import LinkedinIcon from './LinkedinIcon.svg';
import GitHubIcon from './GitHubIcon.svg';

export default function Footer() {
	return (
		<div className='FooterSection'>
			<img src={TwitterIcon} alt='s' />
			<img src={FacebookIcon} alt='s' />
			<img src={InstagramIcon} alt='s' />
			<img src={LinkedinIcon} alt='s' />
			<img src={GitHubIcon} alt='s' />
		</div>
	);
}
