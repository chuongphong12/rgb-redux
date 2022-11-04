/* eslint-disable jsx-a11y/anchor-is-valid */
import { Box, Grid, Typography } from '@mui/material';
import './GuideLine.scss';

interface StepCard {
	id: string;
	className: string;
	title: string;
	text: string;
}

const GuideLine = (props: any) => {
	let steps: StepCard[] = [
		{
			id: 'step-1',
			className: 'mode-selection',
			title: 'Mode Selection & Brand',
			text: 'Choose mode selection and brand for comparison.',
		},
		{
			id: 'step-2',
			className: 'compare-color',
			title: 'Submitted Color & Standard Color',
			text: 'Choose image for both target and standard color.',
		},
		{
			id: 'step-3',
			className: 'payment',
			title: 'Payment',
			text: 'Pay per each color comparison to get result.',
		},
		{
			id: 'step-4',
			className: 'get-result',
			title: 'Get result',
			text: 'Now finally we’re ready to get you precise result.',
		},
	];

	return (
		<Box className='color-comparison'>
			<Typography variant='h4' className='cl-dark-blue md:mb-4 mb-3 font-bold'>
				Color Comparison
			</Typography>
			<Box className='color-cp-all-step mb-md-4 mb-3'>
				<Box className='right'>
					<span className='step-name'>
						<i className='bx bx-check'></i> 1 Step
					</span>
				</Box>
				<Box className='right'>
					<span className='step-name'>
						<i className='bx bx-check'></i> 2 Step
					</span>
				</Box>
				<Box className='right'>
					<span className='step-name'>
						<i className='bx bx-check'></i> 3 Step
					</span>
				</Box>
				<Box className='left'>
					<span className='step-name'>
						<i className='bx bx-check'></i> 4 Step
					</span>
				</Box>
			</Box>
			<Box className='color-cp-content bg-white card card-content'>
				<Box className='guideline color-comparison-layout'>
					<h4 className='color-comparison-title cl-basic-black'>How It works?</h4>
					<p className='color-comparison-msg'>
						Our AI system provides simple & easy way to figure out how similar both colors.
					</p>
					<Grid container className='guideline-content'>
						{steps.map((item, index) => {
							return (
								<Grid item lg={3} md={6} xs={12} className='steps' key={index}>
									<div className={item.className + ' icon'}></div>
									<p className='step-title'>{item.title}</p>
									<p className='step-text'>{item.text}</p>
								</Grid>
							);
						})}
					</Grid>
					<Box className='btn-start text-center'>
						<button className='btn btn-dark-blue' id='btn'>
							Let’s Start!
						</button>
					</Box>
					<Typography variant='body1' className='guidance-phrase'>
						<span className='text-warn'>Wait!</span>&nbsp;You do not have any hardware? It’s
						fine!&nbsp;
						<span className='guidance-msg'>
							Please visit this <a className='text-link'>link</a> and you could proceed to purchase!
						</span>
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default GuideLine;
