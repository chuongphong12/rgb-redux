/* eslint-disable jsx-a11y/anchor-is-valid */
import { Avatar, IconButton, Menu } from '@mui/material';
import { memo, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import hamburgerIcon from '../../../../assets/images/icons/menu-hamburger-icon.svg';
import notificationIcon from '../../../../assets/images/icons/notification-icon.svg';
import logo from '../../../../assets/images/logo.png';
import AuthContext from '../../../utils/context/AuthProvider';
import { ModeAuthenticateEnum } from '../../enums/app.enum';
import AuthenModal from '../../modals/AuthenModal';
import MainNav from '../MainNav/MainNav';
import RightSideBar from '../RightSidebar/RightSideBar';
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
	const { user } = useContext(AuthContext);
	const [isMobile, setIsMobile] = useState(false);
	const navigate = useNavigate();

	// const SIDEBAR_NAME = ESidebarName;
	// const ROUTER_LINK_HOME = RouterLinkNav.Home;

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
	};

	const TemplateSignIn = () => {
		const [hamburgerAnchorEl, setHamburgerAnchorEl] = useState<null | HTMLElement>(null);
		const [notificationAnchorEl, setNotificationAnchorEl] = useState<null | HTMLElement>(null);
		// const [activeNoti, setActiveNoti] = useState(false);
		// const [activeHamburger, setActiveHamburger] = useState(false);

		const openHamburgerDropdown = Boolean(hamburgerAnchorEl);
		const openNotificationDropdown = Boolean(notificationAnchorEl);
		const handleClickListItem = (event: React.MouseEvent<HTMLElement>, target: number) => {
			if (target === 1) {
				setHamburgerAnchorEl(event.currentTarget);
			} else {
				setNotificationAnchorEl(event.currentTarget);
			}
		};

		const handleCloseDropdown = (target: number) => {
			if (target === 1) {
				setHamburgerAnchorEl(null);
			} else {
				setNotificationAnchorEl(null);
			}
		};

		const [open, setOpen] = useState(false);
		const [mode, setMode] = useState<number>(ModeAuthenticateEnum.Login);
		const handleOpen = () => setOpen(true);
		const handleClose = () => setOpen(false);

		const onOpenModalLogin = () => {
			handleOpen();
			setMode(ModeAuthenticateEnum.Login);
		};

		if (Object.keys(user).length > 0) {
			return (
				<>
					<ul className='ul-nav-right-menu d-none d-md-inline-flex'>
						<li className='li-nav-right-menu'>
							<IconButton
								onClick={(event) => handleClickListItem(event, 2)}
								className='dropdown-hide-arrow'
								size='small'
								aria-controls={openNotificationDropdown ? 'notification-menu' : undefined}
								aria-haspopup='true'
								aria-expanded={openNotificationDropdown ? 'true' : undefined}
							>
								<img src={notificationIcon} alt={'icon'} />
								<span className='notification-unread'>10</span>
							</IconButton>
							<Menu
								anchorEl={notificationAnchorEl}
								id='notification-menu'
								open={openNotificationDropdown}
								onClose={() => handleCloseDropdown(2)}
								onClick={() => handleCloseDropdown(2)}
								className='dropdown-notification-menu'
								PaperProps={{
									elevation: 0,
									sx: {
										overflow: 'visible',
										filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
										boxShadow:
											'rgba(17, 17, 26, 0.1) 0 4px 16px, rgba(17, 17, 26, 0.1) 0 8px 24px,rgba(17, 17, 26, 0.1) 0 16px 56px',
										borderRadius: '8px',
										mt: 1.5,
										'& .MuiAvatar-root': {
											width: 32,
											height: 32,
											ml: -0.5,
											mr: 1,
										},
										'&:before': {
											content: '""',
											display: 'block',
											position: 'absolute',
											top: 0,
											right: 14,
											width: 10,
											height: 10,
											bgcolor: 'background.paper',
											transform: 'translateY(-50%) rotate(45deg)',
											zIndex: 0,
										},
									},
								}}
								transformOrigin={{ horizontal: 'right', vertical: 'top' }}
								anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
							>
								<NotificationMenu />
							</Menu>
						</li>
						<li className='position-relative li-nav-right-menu'>
							<IconButton
								onClick={(event) => handleClickListItem(event, 1)}
								size='small'
								sx={{ ml: 2 }}
								aria-controls={openHamburgerDropdown ? 'hamburger-menu' : undefined}
								aria-haspopup='true'
								aria-expanded={openHamburgerDropdown ? 'true' : undefined}
								className='dropdown-hide-arrow'
							>
								<Avatar alt='H2ND' sx={{ width: 32, height: 32 }}>
									H
								</Avatar>
							</IconButton>
							<Menu
								anchorEl={hamburgerAnchorEl}
								id='hamburger-menu'
								open={openHamburgerDropdown}
								onClose={() => handleCloseDropdown(1)}
								onClick={() => handleCloseDropdown(1)}
								className='dropdown-menu-hamburger'
								PaperProps={{
									elevation: 0,
									sx: {
										overflow: 'visible',
										filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
										boxShadow:
											'rgba(17, 17, 26, 0.1) 0 4px 16px, rgba(17, 17, 26, 0.1) 0 8px 24px,rgba(17, 17, 26, 0.1) 0 16px 56px',
										borderRadius: '8px',
										mt: 1.5,
										'& .MuiAvatar-root': {
											width: 32,
											height: 32,
											ml: -0.5,
											mr: 1,
										},
										'&:before': {
											content: '""',
											display: 'block',
											position: 'absolute',
											top: 0,
											right: 14,
											width: 10,
											height: 10,
											bgcolor: 'background.paper',
											transform: 'translateY(-50%) rotate(45deg)',
											zIndex: 0,
										},
									},
								}}
								transformOrigin={{ horizontal: 'right', vertical: 'top' }}
								anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
							>
								<HamburgerMenu />
							</Menu>
						</li>
					</ul>

					<ul className='ul-nav-right-menu inline-flex md:hidden'>
						<li className='li-nav-right-menu'>
							<a className='right-bar-toggle'>
								<img src={notificationIcon} alt={''} />
								<span className='notification-unread'>8</span>
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
						<button onClick={onOpenModalLogin} className='btn btn-dark-blue sign'>
							Sign in
						</button>
						<AuthenModal open={open} onClose={handleClose} mode={mode} onSetOpen={setOpen} />
					</div>
				</>
			);
		}
	};

	const HamburgerMenu = () => {
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
				<HamburgerMenu />
			</RightSideBar>

			<RightSideBar>
				<NotificationMenu />
			</RightSideBar>
		</>
	);
};

export default memo(TopBar);
