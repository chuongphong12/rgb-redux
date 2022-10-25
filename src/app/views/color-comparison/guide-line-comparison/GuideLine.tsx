/* eslint-disable jsx-a11y/anchor-is-valid */
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
		<div className='color-comparison'>
			<h2 className='cl-dark-blue mb-md-4 mb-3 d-none d-md-block'>Color Comparison</h2>
			<div className='color-cp-all-step mb-md-4 mb-3'>
				<div className='right'>
					<span className='step-name'>
						<i className='bx bx-check'></i> 1 Step
					</span>
				</div>
				<div className='right'>
					<span className='step-name'>
						<i className='bx bx-check'></i> 2 Step
					</span>
				</div>
				<div className='right'>
					<span className='step-name'>
						<i className='bx bx-check'></i> 3 Step
					</span>
				</div>
				<div className='left'>
					<span className='step-name'>
						<i className='bx bx-check'></i> 4 Step
					</span>
				</div>
			</div>
			<div className='color-cp-content bg-white card card-content'>
				<div className='guideline color-comparison-layout'>
					<h4 className='color-comparison-title cl-basic-black'>How It works?</h4>
					<p className='color-comparison-msg'>
						Our AI system provides simple & easy way to figure out how similar both colors.
					</p>
					<div className='guideline-content row'>
						{steps.map((item, index) => {
							return (
								<div className='col-12 col-md-6 col-xl-3 steps' key={index}>
									<div className={item.className + ' icon'}></div>
									<p className='step-title'>{item.title}</p>
									<p className='step-text'>{item.text}</p>
								</div>
							);
						})}
					</div>
					<div className='btn-start text-center'>
						<button className='btn btn-dark-blue' id='btn' type='button'>
							Let’s Start!
						</button>
					</div>
					<p className='guidance-phrase'>
						<span className='text-warn'>Wait!</span>&nbsp;You do not have any hardware? It’s
						fine!&nbsp;
						<span className='guidance-msg'>
							Please visit this
							<a className='text-link'>link</a>
							and you could proceed to purchase!
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default GuideLine;
