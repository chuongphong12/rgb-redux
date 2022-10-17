import React from 'react';
import { Link } from 'react-router-dom';
import './Slide1.scss';
import landing1 from '../../../../assets/images/landing/home1.jpeg';

const Slide1 = () => {
	return (
		<div className='carousel-slide slide-1'>
			<div className='left-col'>
				<div className='content'>
					<p>COMPARE YOUR COLOR</p>
					<p>
						Compare your fabric's colors with our algorithm program.
						<br />
						<br />
						You don't need to wait comment from colorist during one or two weeks and don't
						need to argue with them about their personal opinion, our program will gives
						you an objective figures and results.
					</p>
					<Link to={'/color-comparison/guideline'}>
						<button className='btn btn-dark-blue'>Get started</button>
					</Link>
				</div>
			</div>
			<div className='right-col'>
				<div className='image-container'>
					<img alt='fabric-images' src={landing1} />
				</div>
			</div>
		</div>
	);
};

export default Slide1;
