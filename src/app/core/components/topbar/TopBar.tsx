/* eslint-disable jsx-a11y/anchor-is-valid */
import { Avatar } from '@mui/material';
import { useEffect,useState } from 'react';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import { useNavigate } from 'react-router-dom';
import hamburgerIcon from '../../../../assets/images/icons/menu-hamburger-icon.svg';
import notificationIcon from '../../../../assets/images/icons/notification-icon.svg';
import logo from '../../../../assets/images/logo.png';
import MainNav from '../main-nav/MainNav';
import RightSideBar from '../right-sidebar/rightSideBar';
import './TopBar.scss';

export enum ESidebarName {
	Hamburger = 'hamburger',
	Notification = 'notification',
	MyAccount = 'my-account',
	PhotoGallery = 'photo-gallery',
	ComparisonHistory = 'comparison-history',
	ColorNumberManage = 'color-number-manage',
	HardwareManaging = 'hardware-managing',
	Payment = 'payment-history',
	PaymentMethod = 'payment-method',
}

export interface TopBarProps {
	toggleSidebar: (sidebarName: ESidebarName) => void;
	closeSidebar: (sidebarName: ESidebarName) => void;
}

const TopBar = ({ toggleSidebar, closeSidebar }: TopBarProps) => {
	const [isMobile, setIsMobile] = useState(false);
	const navigate = useNavigate();

	// const SIDEBAR_NAME = ESidebarName;
	// const ROUTER_LINK_HOME = RouterLinkNav.Home;

	const user: boolean = true;

	useEffect(() => {
		setIsMobile(() => window.innerWidth < 768);
	}, []);

	const onClickItemSideBar = (sidebarName: ESidebarName) => {
		navigate('/my-page/' + sidebarName);
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
		const [activeNoti, setActiveNoti] = useState(false);
		const [activeHamburger, setActiveHamburger] = useState(false);

		if (user) {
			return (
				<>
					<ul className='ul-nav-right-menu d-none d-md-inline-flex'>
						<li className='li-nav-right-menu'>
							<a
								onClick={() => setActiveNoti(!activeNoti)}
								className='dropdown-hide-arrow'
								id='dropdownNotification'
							>
								<img src={notificationIcon} alt={'icon'} />
								<span className='notification-unread'>10</span>
							</a>
							<DropdownMenu show={activeNoti} aria-labelledby='dropdownNotification'>
								<div className='dropdown-menu-arrow-up'></div>
								<div className='dropdown-notification-menu'>
									<NotificationMenu />
								</div>
							</DropdownMenu>
						</li>
						<li className='position-relative li-nav-right-menu'>
							<Avatar
								onClick={() => setActiveHamburger(!activeHamburger)}
								className='dropdown-hide-arrow'
								alt='H2ND'
								src='/static/images/avatar/1.jpg'
							/>
							<DropdownMenu aria-labelledby={'dropdownHamburger'} show={activeHamburger}>
								<div className='dropdown-menu-hamburger'>
									<HamburGerMenu />
								</div>
							</DropdownMenu>
						</li>
					</ul>

					<ul className='ul-nav-right-menu d-inline-flex d-md-none'>
						<li className='li-nav-right-menu'>
							<a className='right-bar-toggle'>
								<img src={notificationIcon} alt={''} />
								<span className='notification-unread'>10</span>
							</a>
						</li>

						<li className='position-relative li-nav-right-menu'>
							<a className='right-bar-toggle'>
								<img src={hamburgerIcon} alt={''} />
							</a>
						</li>
					</ul>
				</>
			);
		} else {
			return (
				<>
					<div>
						<button className='btn btn-dark-blue sign'>Sign in</button>
					</div>
				</>
			);
		}
	};

	const HamburGerMenu = () => {
		return (
			<>
				{isMobile ? (
					<>
						<div className='user'>
							<p className='user__name'>Hudson</p>
							<div className='user__type'>
								<p className='email'>bm.hcmc.hudson@gmail.com</p>
								<div className='type'>Trial</div>
							</div>
						</div>
						<nav className='dropdown-menu-nav'>
							<a onClick={() => onClickItemSideBar(ESidebarName.MyAccount)}>
								<span>
									{' '}
									<i className='rgbi rgbi-user'></i> My Account{' '}
								</span>
								<i className='rgbi rgbi-pull-right rgbi-right-arrow'></i>
							</a>
							<a onClick={() => onClickItemSideBar(ESidebarName.PhotoGallery)}>
								<span>
									{' '}
									<i className='rgbi rgbi-gallery'></i> Photo Gallery{' '}
								</span>
								<i className='rgbi rgbi-pull-right rgbi-right-arrow'></i>
							</a>
							<a onClick={() => onClickItemSideBar(ESidebarName.ComparisonHistory)}>
								<span>
									{' '}
									<i className='rgbi rgbi-compare-history'></i> Color Comparison{' '}
								</span>
								<i className='rgbi rgbi-pull-right rgbi-right-arrow'></i>
							</a>
							<a onClick={() => onClickItemSideBar(ESidebarName.ColorNumberManage)}>
								<span>
									{' '}
									<i className='rgbi rgbi-color-number'></i> Color Number Management{' '}
								</span>
								<i className='rgbi rgbi-pull-right rgbi-right-arrow'></i>
							</a>
							<a onClick={() => onClickItemSideBar(ESidebarName.HardwareManaging)}>
								<span>
									{' '}
									<i className='rgbi rgbi-hardware'></i> Hardware Managing{' '}
								</span>
								<i className='rgbi rgbi-pull-right rgbi-right-arrow'></i>
							</a>
							<a onClick={() => onClickItemSideBar(ESidebarName.Payment)}>
								<span>
									{' '}
									<i className='rgbi rgbi-payment-history'></i> Payment History{' '}
								</span>
								<i className='rgbi rgbi-pull-right rgbi-right-arrow'></i>
							</a>
							<a onClick={() => onClickItemSideBar(ESidebarName.PaymentMethod)}>
								<span>
									{' '}
									<i className='rgbi rgbi-payment-method'></i> Payment Method{' '}
								</span>
								<i className='rgbi rgbi-pull-right rgbi-right-arrow'></i>
							</a>
							<hr className='mt-3' style={{ marginBottom: '2rem' }} />
							<a>
								<span>
									{' '}
									<i className='rgbi rgbi-logout'></i> Sign Out{' '}
								</span>
							</a>
							<a>
								<span>
									{' '}
									<i className='rgbi rgbi-delete'></i> Delete My Account{' '}
								</span>
							</a>
						</nav>
					</>
				) : (
					<nav className='dropdown-menu-nav'>
						<a onClick={() => onClickItemSideBar(ESidebarName.MyAccount)}>
							<span>
								{' '}
								<i className='rgbi rgbi-user'></i> My Account{' '}
							</span>
						</a>
						<a onClick={() => onClickItemSideBar(ESidebarName.PhotoGallery)}>
							<span>
								{' '}
								<i className='rgbi rgbi-gallery'></i> Photo Gallery{' '}
							</span>
						</a>
						<a onClick={() => onClickItemSideBar(ESidebarName.ComparisonHistory)}>
							<span>
								{' '}
								<i className='rgbi rgbi-compare-history'></i> Color Comparison{' '}
							</span>
						</a>
						<a onClick={() => onClickItemSideBar(ESidebarName.ColorNumberManage)}>
							<span>
								{' '}
								<i className='rgbi rgbi-color-number'></i> Color Number Management{' '}
							</span>
						</a>
						<a onClick={() => onClickItemSideBar(ESidebarName.HardwareManaging)}>
							<span>
								{' '}
								<i className='rgbi rgbi-hardware'></i> Hardware Managing{' '}
							</span>
						</a>
						<a onClick={() => onClickItemSideBar(ESidebarName.Payment)}>
							<span>
								{' '}
								<i className='rgbi rgbi-payment-history'></i> Payment History{' '}
							</span>
						</a>
						<a onClick={() => onClickItemSideBar(ESidebarName.PaymentMethod)}>
							<span>
								{' '}
								<i className='rgbi rgbi-payment-method'></i> Payment Method{' '}
							</span>
						</a>
						<hr />
						<a onClick={() => logout(ESidebarName.Hamburger)} className='mt-1'>
							<span>
								{' '}
								<i className='rgbi rgbi-logout'></i> Sign Out{' '}
							</span>
						</a>
					</nav>
				)}
			</>
		);
	};

	const NotificationMenu = () => {
		return (
			<>
				<div className='dropdown-notification-title justify-content-md-center'>
					<span
						onClick={() => onClickCloseNotification(ESidebarName.Notification)}
						className='remove-icon d-inline-block d-md-none'
					></span>
					<h5>Notification</h5>
					<span></span>
				</div>
				<ul className='dropdown-notification-items'>
					<li>
						<p className='notification-item-title'>New Noti</p>
						<p className='notification-item-time'>12312313</p>
					</li>
				</ul>
			</>
		);
	};

	return (
		<>
			<header>
				<div className='navbar-header'>
					<img alt='' style={{ height: '24px' }} src={logo} />
					<MainNav />
					<TemplateSignIn />
				</div>
			</header>

			<RightSideBar>
				<HamburGerMenu />
			</RightSideBar>

			<RightSideBar>
				<NotificationMenu />
			</RightSideBar>
		</>
	);
};

export default TopBar;
