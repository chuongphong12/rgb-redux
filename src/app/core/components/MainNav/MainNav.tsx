import React from 'react';
import { NavLink } from 'react-router-dom';
import { RouterLinkNav } from '../../constants/router-link.constant';

const MainNav = () => {
	return (
		<>
			<nav className='nav-menu d-none d-md-flex d-block d-md-none'>
				<NavLink to={RouterLinkNav.COLOR_COMPARISON}>Color</NavLink>
				<NavLink to={RouterLinkNav.Product}>Hardware</NavLink>
				<NavLink to={RouterLinkNav.HELP}>Help</NavLink>
			</nav>
		</>
	);
};

export default MainNav;
