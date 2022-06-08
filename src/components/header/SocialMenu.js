import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import { Menu, MenuItem, MenuText } from "react-foundation";

import { NavLink } from 'react-router-dom';

const SocialMenu = (props) => {
	const menuItemsObj = new Array()
						.concat({ name: 'facebook', link: '#', icon: 'fi-social-facebook'})
						.concat({ name: 'instagram', link: 'https://instagram.com/wenlad1', icon: 'fi-social-instagram' })
						.concat({ name: 'twitter', link: 'https://twitter.com/wendyladino', icon: 'fi-social-twitter'});

	const userFetch = useSelector(state => state.user);
	const user = userFetch || {};
	
	const [menuItems] = useState(menuItemsObj);
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
					{user.id ? (
							<>
								<MenuText alt={user.email}>{user.nickname}</MenuText>
								<MenuItem key="admin">
									<NavLink to="/admin" ><i className="social fi-unlock"></i></NavLink>
								</MenuItem>
							</>
						) : (
								<MenuItem key="login">
									<NavLink to="/login" ><i className="social fi-lock"></i></NavLink>
								</MenuItem>
						)}
				</Menu>
			);	
}

export default SocialMenu;