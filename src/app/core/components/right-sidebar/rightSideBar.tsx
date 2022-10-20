import PerfectScrollbar from 'perfect-scrollbar';
import { useEffect } from 'react';

const RightSideBar = (props: any) => {
	let ps: PerfectScrollbar;

	useEffect(() => {
		createScrollBar();

		return () => {
			ps.destroy();
		};
	});

	const createScrollBar = () => {
		ps = new PerfectScrollbar('.right-bar');
	};

	return (
		<>
			<div className='right-bar' style={{ height: 100, width: 100 }}>
				{props.children}
			</div>

			<div className='rightbar-overlay'></div>
		</>
	);
};

export default RightSideBar;
