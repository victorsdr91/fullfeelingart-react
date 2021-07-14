import React, { useState } from 'react';
import { TitleBar, TitleBarTitle, TopBar, TopBarLeft, TopBarRight, Menu, MenuItem, MenuText } from "react-foundation";
import { Link } from 'react-router-dom';
import './style.scss';

const Header = (props) => {

	const [toggle, setToggle] = useState(false);

	function toggleMenu() {
		setToggle(!toggle);
	}

	const toggleClass = toggle ? '' : 'hide-for-small-only';

	return (
		<div>
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
					<MenuRender />
				</TopBarRight>
				<TopBarRight>
					<SocialMenu user={props.user}/>
				</TopBarRight>
			</TopBar>
		</div>
	);

}

 const MenuRender = (props) => {

 	const menuItemsObj = new Array()
						.concat({ name: 'Inicio', link: '/', active: true})
						.concat({ name: 'Que hago', link: '#what', active: false })
						.concat({ name: 'Quien soy', link: '#aboutme', active: false});


 	const [menuItems, setMenuItems] = useState(menuItemsObj);

	function setActive(element) {
		const items = menuItems.slice();
		items.map((el) => {
			el.active = el.name == element.name;
		});
		setMenuItems(items);
	}

	const menuList = menuItems.map(
		(element, key) => {
			return <MenuItem key={key} className={element.active ? 'is-active' : ''}>
						<Link to={element.link} onClick={() => setActive(element)}>{element.name}</Link>
					</MenuItem>;
		}
	);

	return <Menu>{menuList}</Menu>;
}


const SocialMenu = (props) => {
	const menuItemsObj = new Array()
						.concat({ name: 'facebook', link: '#', icon: 'fi-social-facebook'})
						.concat({ name: 'instagram', link: 'https://instagram.com/wenlad1', icon: 'fi-social-instagram' })
						.concat({ name: 'twitter', link: 'https://twitter.com/wendyladino', icon: 'fi-social-twitter'});
	
	const [menuItems, setMenuItems] = useState(menuItemsObj);
	const menuList = menuItems.map(
		(element, key) => {
			return <MenuItem key={key}>
						<a href={element.link} target='_blank'><i className={'social ' + element.icon}></i></a>
					</MenuItem>;
		}
	);

	return (
				<Menu>
					{menuList}
					<MenuItem key="admin">
							<Link to="/admin" user={props.user}><i className="social fi-lock"></i></Link>
					</MenuItem>
					<MenuText>{props.user.nickname}</MenuText>
				</Menu>
			);	
}

export default Header;