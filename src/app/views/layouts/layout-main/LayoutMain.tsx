import Footer from '../../../core/components/footer/Footer';
import TopBar,{ ESidebarName } from '../../../core/components/topbar/TopBar';

const LayoutMain = (props: any) => {
	const openSidebar = (sidebarName: ESidebarName): void => {
		Object.values(ESidebarName).forEach((elSidebarName) => {
			if (elSidebarName !== sidebarName) {
				document.body.classList.remove(`right-bar-open-${elSidebarName}`);
			}
		});

		document.body.classList.toggle(`right-bar-open-${sidebarName}`);
	};

	const closeSidebar = (sidebarName: ESidebarName): void => {
		document.body.classList.remove(`right-bar-open-${sidebarName}`);
	};

	return (
		<>
			<div id='layout-wrapper'>
				<div id='page-topbar' className='topbar'>
					<div className='tb-container'>
						<TopBar toggleSidebar={openSidebar} closeSidebar={closeSidebar} />
					</div>
				</div>

				<div className='main-content'>
					<div className='mc-container'>{props.children}</div>
				</div>

				<div className='footer'>
					<div className='ft-container'>
						<Footer />
					</div>
				</div>
			</div>
		</>
	);
};

export default LayoutMain;
