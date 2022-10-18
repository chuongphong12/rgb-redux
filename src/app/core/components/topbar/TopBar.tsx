import React, { useEffect, useState } from 'react';
import { RouterLinkNav } from '../../constants/router-link.constant';
import './TopBar.scss';
import RightSideBar from '../right-sidebar/rightSideBar';

export enum ESidebarName {
	Hamburger = 'hamburger',
	Notification = 'notification',
	MyAccount = 'my-account',
	PhotoGallery = 'photo-gallery',
	ComparisonHistory = 'comparison-history',
	ColorNumberManage = 'color-number-manage',
	HardwareManaging = 'hardware-managing',
	Payment = 'payment-history',
	PaymentMethod = 'payment-method'
}

export interface TopBarProps {
	toggleSidebar: (sidebarName: ESidebarName) => void;
	closeSidebar: (sidebarName: ESidebarName) => void;
}

const TopBar = ({ toggleSidebar, closeSidebar }: TopBarProps) => {
	const [isMobile, setIsMobile] = useState(false);

	const SIDEBAR_NAME = ESidebarName;
	const ROUTER_LINK_HOME = RouterLinkNav.Home;

	const user: boolean = true;

	useEffect(() => {
		setIsMobile(() => window.innerWidth < 768);
	});

	const onClickItemSideBar = (sidebarName: ESidebarName) => {
		// this.router.navigate(['/', 'my-page', sidebarName]);
		closeSidebar(sidebarName);
	};

	const onClickCloseNotification = (sidebarName: ESidebarName) => {
		closeSidebar(sidebarName);
	};

	const logout = (sidebarName: ESidebarName): void => {
		onClickItemSideBar(sidebarName);
		// this.authService.logout();
		// location.reload();
	};

	const TemplateSignIn = () => {
		if (user) {
			return <>
				<ul className='ul-nav-right-menu d-none d-md-inline-flex'>
					<li className='li-nav-right-menu'>
						<a className='dropdown-hide-arrow' href='javascript:;' id='dropdownNotification'>
							<img src='assets/images/icons/notification-icon.svg' />
							<span className='notification-unread'>10</span>
						</a>

						<div aria-labelledby='dropdownNotification'>
							<div className='dropdown-menu-arrow-up'></div>
							<div className='dropdown-notification-menu'>

							</div>
						</div>
					</li>

					<li>
						<a className='user-icon dropdown-hide-arrow' href='javascript:;' id='dropdownUser'>

						</a>

						<div aria-labelledby='dropdownHamburger'>
							<div className='dropdown-menu-hamburger'>

							</div>
						</div>
						;
					</li>
				</ul>

				<ul className='ul-nav-right-menu d-inline-flex d-md-none'>
					<li className='li-nav-right-menu'>
						<a className='right-bar-toggle'>
							<img src='assets/images/icons/notification-icon.svg' />
							<span className='notification-unread'>10</span>
						</a>;
					</li>

					<li className='position-relative li-nav-right-menu'>
						<a className='right-bar-toggle'>
							<img src='assets/images/icons/menu-hamburger-icon.svg' />
						</a>;
					</li>
				</ul>
			</>;
		} else {
			return <>
				<div>
					<button
						className='btn btn-dark-blue sign'>Sign in
					</button>
				</div>
			</>;
		}
	};

	return (
		<>
			<header>
				<div className='navbar-header'>
					<img alt='' height='24' src='assets/images/logo.png' />
					<TemplateSignIn />
				</div>
			</header>

			<RightSideBar>
				{isMobile ? <>
						<div className='user'>
							<p className='user__name'>Hudson</p>
							<div className='user__type'>
								<p className='email'>bm.hcmc.hudson@gmail.com</p>
								<div className='type'>
									Trial
								</div>
							</div>
						</div>
						<nav className='dropdown-menu-nav'>
							<a>
								<span> <i className='rgbi rgbi-user'></i> My Account </span>
								<i className='rgbi rgbi-pull-right rgbi-right-arrow'></i>
							</a>
							<a>
								<span> <i className='rgbi rgbi-gallery'></i> Photo Gallery </span>
								<i className='rgbi rgbi-pull-right rgbi-right-arrow'></i>
							</a>
							<a>
								<span> <i className='rgbi rgbi-compare-history'></i> Color Comparison </span>
								<i className='rgbi rgbi-pull-right rgbi-right-arrow'></i>
							</a>
							<a>
								<span> <i className='rgbi rgbi-color-number'></i> Color Number Management </span>
								<i className='rgbi rgbi-pull-right rgbi-right-arrow'></i>
							</a>
							<a>
								<span> <i className='rgbi rgbi-hardware'></i> Hardware Managing </span>
								<i className='rgbi rgbi-pull-right rgbi-right-arrow'></i>
							</a>
							<a>
								<span> <i className='rgbi rgbi-payment-history'></i> Payment History </span>
								<i className='rgbi rgbi-pull-right rgbi-right-arrow'></i>
							</a>
							<a>
								<span> <i className='rgbi rgbi-payment-method'></i> Payment Method </span>
								<i className='rgbi rgbi-pull-right rgbi-right-arrow'></i>
							</a>
							<hr className='mt-3' style={{ marginBottom: '2rem' }} />
							<a>
								<span> <i className='rgbi rgbi-logout'></i> Sign Out </span>
							</a>
							<a>
								<span> <i className='rgbi rgbi-delete'></i> Delete My Account </span>
							</a>
						</nav>
					</> :
					<nav className='dropdown-menu-nav'>
						<a onClick={() => onClickItemSideBar(ESidebarName.MyAccount)}>
							<span> <i className='rgbi rgbi-user'></i> My Account </span>
						</a>
						<a onClick={() => onClickItemSideBar(ESidebarName.PhotoGallery)}>
							<span> <i className='rgbi rgbi-gallery'></i> Photo Gallery </span>
						</a>
						<a onClick={() => onClickItemSideBar(ESidebarName.ComparisonHistory)}>
							<span> <i className='rgbi rgbi-compare-history'></i> Color Comparison </span>
						</a>
						<a onClick={() => onClickItemSideBar(ESidebarName.ColorNumberManage)}>
							<span> <i className='rgbi rgbi-color-number'></i> Color Number Management </span>
						</a>
						<a onClick={() => onClickItemSideBar(ESidebarName.HardwareManaging)}>
							<span> <i className='rgbi rgbi-hardware'></i> Hardware Managing </span>
						</a>
						<a onClick={() => onClickItemSideBar(ESidebarName.Payment)}>
							<span> <i className='rgbi rgbi-payment-history'></i> Payment History </span>
						</a>
						<a onClick={() => onClickItemSideBar(ESidebarName.PaymentMethod)}>
							<span> <i className='rgbi rgbi-payment-method'></i> Payment Method </span>
						</a>
						<hr />
						<a onClick={() => logout(ESidebarName.Hamburger)} className='mt-1'>
							<span> <i className='rgbi rgbi-logout'></i> Sign Out </span>
						</a>
					</nav>}
			</RightSideBar>

			<RightSideBar>
				<div className='dropdown-notification-title justify-content-md-center'>
					<span onClick={() => onClickCloseNotification(ESidebarName.Notification)}
								className='remove-icon d-inline-block d-md-none'></span>
					<h5>Notification</h5>
					<span></span>
				</div>
				<ul className='dropdown-notification-items'>
					<li>asdasdasasd</li>
				</ul>
			</RightSideBar>
		</>
	)
		;
};

export default TopBar;
