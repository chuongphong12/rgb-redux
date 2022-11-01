import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import landing1 from '../../../../assets/images/landing/home1.jpeg';
import './Slide1.scss';

const Slide1 = () => {
	return (
		<Box className='carousel-slide slide-1 flex h-screen'>
			<Box className='left-col pr-[50px] flex flex-1'>
				<Box className='content flex justify-center flex-col'>
					<p className='xl:text-[48px] font-bold'>COMPARE YOUR COLOR</p>
					<p className='xl:text-[18px] text-justify'>
						Compare your fabric's colors with our algorithm program.
						<br />
						<br />
						You don't need to wait comment from colorist during one or two weeks and don't need to
						argue with them about their personal opinion, our program will gives you an objective
						figures and results.
					</p>
					<Link to={'/color-comparison/guideline'}>
						<button className='btn btn-dark-blue xl:w-[165px]'>Get started</button>
					</Link>
				</Box>
			</Box>
			<Box className='right-col flex flex-[1.5]'>
				<Box className='image-container h-[540px] self-center'>
					<img className='h-full' alt='fabric-images' src={landing1} />
				</Box>
			</Box>
		</Box>
	);
};

export default Slide1;
