import React, {useState} from 'react';
import { Menu, MenuItem, MenuText } from "react-foundation";

import { NavLink } from 'react-router-dom';

const NavMenu = (props) => {

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
						<NavLink to={element.link} onClick={() => setActive(element)}>{element.name}</NavLink>
					</MenuItem>;
		}
	);

	return <Menu>{menuList}</Menu>;
}


export default NavMenu;