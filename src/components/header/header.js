import React, { useState } from 'react';
import { TitleBar, TitleBarTitle, TopBar, TopBarLeft, TopBarRight, Menu, MenuText } from "react-foundation";
import NavMenu from './NavMenu';
import SocialMenu from './SocialMenu';
import './style.scss';

const Header = (props) => {

	const [toggle, setToggle] = useState(false);

	function toggleMenu() {
		setToggle(!toggle);
	}

	const toggleClass = toggle ? '' : 'hide-for-small-only';

	return (
		<div className="menu-wrapper">
			<TitleBar className="show-for-small-only">
				<button className="menu-icon" type="button" onClick={() => toggleMenu()}></button>
				<TitleBarTitle>Menu</TitleBarTitle>
			</TitleBar>
			<TopBar className={toggleClass}>
				<TopBarLeft>
				 <Menu>
				 	<MenuText>{props.logo}</MenuText>
				 </Menu>
				</TopBarLeft>
				<TopBarRight>
					<NavMenu />
				</TopBarRight>
				<TopBarRight>
					<SocialMenu/>
				</TopBarRight>
			</TopBar>
		</div>
	);

}

export default Header;