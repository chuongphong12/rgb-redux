import Slider from 'react-slick';
import './Home.scss';
import Slide1 from './Slide1/Slide1';

const Home = () => {
	const options = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		useCSS: true,
		arrows: false,
	};

	return (
		<Slider {...options} className='main-carousel'>
			<div className='h-screen'>
				<Slide1 />
			</div>
			<div>
				<Slide1 />
			</div>
			<div>
				<Slide1 />
			</div>
		</Slider>
	);
};

export default Home;
