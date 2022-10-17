import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
	return (
		<>
			<header>
				<Link to={''} className=''>
					<img alt='' height='24' src='assets/images/logo.png' />
				</Link>
			</header>
		</>
	);
};

export default TopBar;
