import Carousel from 'react-slick';
import './Home.scss';
import Slide1 from './Slide1/Slide1';

const Home = () => {
	const options = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		useCSS: true,
		arrows: false,
	};

	return (
		<Carousel {...options} className='main-carousel'>
			<div>
				<Slide1 />
			</div>
			<div>
				<Slide1 />
			</div>
			<div>
				<Slide1 />
			</div>
		</Carousel>
	);
};

export default Home;
