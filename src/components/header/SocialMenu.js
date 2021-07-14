import React, {useState} from 'react';
import { Menu, MenuItem, MenuText } from "react-foundation";

import { NavLink } from 'react-router-dom';

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
							<NavLink to="/admin" user={props.user}><i className="social fi-lock"></i></NavLink>
					</MenuItem>
					<MenuText>{props.user.nickname}</MenuText>
				</Menu>
			);	
}

export default SocialMenu;