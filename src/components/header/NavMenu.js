import React, {useState} from 'react';
import { Menu, MenuItem } from "react-foundation";

import { NavLink } from 'react-router-dom';

const NavMenu = (props) => {

 	const menuItemsObj = new Array()
						.concat({ name: 'Inicio', link: '/', active: true})
						.concat({ name: 'Que hago', link: 'what', active: false })
						.concat({ name: 'Quien soy', link: 'who', active: false})
						.concat({ name: 'Psicologia', link: 'psico', active: false});


 	const [menuItems, setMenuItems] = useState(menuItemsObj);


	const menuList = menuItems.map(
		(element, key) => {
			return <MenuItem key={key} >
						<NavLink exact to={element.link}>{element.name}</NavLink>
					</MenuItem>;
		}
	);

	return <Menu>{menuList}</Menu>;
}


export default NavMenu;