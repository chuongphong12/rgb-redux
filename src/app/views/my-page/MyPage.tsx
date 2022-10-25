import { useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ESidebarName } from '../../core/components/topbar/TopBar';
import './MyPage.scss';

interface SideBar {
	link: ESidebarName;
	name: string;
	icon: string;
}

const MyPage = () => {
	let __ESIDEBAR: SideBar[] = [
		{ link: ESidebarName.MyAccount, name: 'My Account', icon: 'rgbi-user' },
		{ link: ESidebarName.PhotoGallery, name: 'Photo Gallery', icon: 'rgbi-gallery' },
		{
			link: ESidebarName.ComparisonHistory,
			name: 'Comparison History',
			icon: 'rgbi-compare-history',
		},
		{
			link: ESidebarName.ColorNumberManage,
			name: 'Color Number Manage',
			icon: 'rgbi-color-number',
		},
		{
			link: ESidebarName.HardwareManaging,
			name: 'Hardware Managing',
			icon: 'rgbi-hardware',
		},
		{ link: ESidebarName.Payment, name: 'Payment', icon: 'rgbi-payment' },
	];
	let expand: boolean = true;
	let isTablet: boolean = false;

	const toggle = (val: boolean) => {
		expand = val;
	};

	const onRouterLink = (sidebarName: ESidebarName): string => {
		return '/my-page/' + sidebarName;
	};

	const resizable = () => {
		if (window.innerWidth >= 768 && window.innerWidth <= 1200) {
			expand = false;
			isTablet = true;
		} else if (window.innerWidth > 1200) {
			expand = true;
			isTablet = false;
		}
	};

	useEffect(() => {
		resizable();
	});

	return (
		<>
			<div className='my-page'>
				<div className='sidebar sidebar-expanded'>
					<div className='card'>
						<div className='user expand'>
							{isTablet && (
								<i
									onClick={() => toggle(false)}
									className='close-sidebar-icon rgbi rgbi-left-arrow'
								></i>
							)}
							<div className='animate__animated animate__fadeIn dp'>
								<p className='user__name'>Hudson Brekker</p>
								<div className='user__type'>
									<p className='email'>bm.hcmc.hudson@gmail.com</p>
									<div className='type'>Trial</div>
								</div>
							</div>
						</div>

						<ul className='nav_list'>
							{__ESIDEBAR.map((menu, index) => {
								return (
									<li className='nav_list__item' key={index}>
										<NavLink
											className={({ isActive }) => (isActive ? 'is-active' : undefined)}
											to={onRouterLink(menu.link)}
											onClick={() => toggle(true)}
										>
											{expand ? (
												<>
													<span className='animate__animated animate__fadeIn'>
														<i className={'rgbi ' + menu.icon}></i> {menu.name}
													</span>
													<i className='rgbi rgbi-pull-right rgbi-right-arrow'></i>
												</>
											) : (
												<i className={'rgbi animate__animated animate__fadeIn ' + menu.icon}></i>
											)}
										</NavLink>
									</li>
								);
							})}
							<hr className='mt-3 mb-3' />
							<li className='nav_list__item'>
									<span className='animate__animated animate__fadeIn dp'>
										<i className='rgbi rgbi-logout'></i> Sign Out
									</span>
							</li>
							<li className='nav_list__item'>
									<span className='animate__animated animate__fadeIn dp'>
										<i className='rgbi rgbi-delete'></i> Delete My Account
									</span>
							</li>
						</ul>
					</div>
				</div>
				<div className='content'>
					<div className={'container' + (expand ? 'move_right' : undefined)}>
						<Outlet />
					</div>
				</div>
			</div>
		</>
	);
};

export default MyPage;
