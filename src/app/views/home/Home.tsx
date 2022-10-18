import React, { useEffect } from 'react';
import Slide1 from './Slide1/Slide1';
import Flickity from 'flickity';
import './Home.scss';

const Home = () => {
	let elem = document.querySelector('.main-carousel');

	const createCarousel = () => {
		let carousel = new Flickity(elem!, {
			cellAlign: 'left',
			contain: true,
			groupCells: true,
			prevNextButtons: false,
			pageDots: true,
			wrapAround: false,
			autoPlay: true,
			adaptiveHeight: true,
			pauseAutoPlayOnHover: true,
			imagesLoaded: true,
			initialIndex: 0,
			draggable: true,
			dragThreshold: 10,
			resize: true,
		});

		carousel.on('change', (index: any) => {
			if (index === 2) {
				$('.flickity-page-dots .dot').css('background', 'white').css('opacity', '1');
				$('.flickity-page-dots .dot.is-selected').css('background', '#4D57A2');
				// this.updateColor('$app-white-color');
			} else {
				$('.flickity-page-dots .dot').css('background', '#333').css('opacity', '.25');
				$('.flickity-page-dots .dot.is-selected')
					.css('background', '#4D57A2')
					.css('opacity', '1');
			}
		});

		setTimeout(() => {
			carousel.on('settle', function () {
				carousel.resize();
			});
		}, 50);
	};

	useEffect(() => {
		createCarousel();
	});

	return (
		<div className='main-carousel'>
			<div className='carousel-cell'>
				<Slide1 />
			</div>
			<div className='carousel-cell'></div>
			<div className='carousel-cell'></div>
		</div>
	);
};

export default Home;
