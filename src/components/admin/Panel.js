import React, {useState} from 'react';
import { Menu, MenuItem } from "react-foundation";
import { NavLink } from 'react-router-dom';

const Panel = () => {

    const panelItems = [
        {
            name: 'About Me',
            icon: 'page',
            link: 'edit-about-me',
            active: false,
        },
        {
            name: 'Articles',
            icon: 'page-multiple',
            link: 'show-articles',
            active: false,
        },
        {
            name: 'Settings',
            icon: 'widget',
            link: 'settings',
            active: false,
        },
        {
            name: 'Contact',
            icon: 'torsos-all-female',
            link: 'edit-contact',
            active: false,
        }];

    const [menuItems, setMenuItems] = useState(panelItems);

	function setActive(element) {
		const items = menuItems.slice();
		items.map((el) => {
			el.active = el.name == element.name;
		});
		setMenuItems(items);
	}

    return (
        <Menu isVertical={true}>
        { menuItems.map((item, key) => (
            <MenuItem className={item.active ? 'is-active' : ''} key={key} >
                    <NavLink to={`${item.link}`} onClick={() => setActive(item)}>
                        <div className="text-center">
                                <i className={"card-icon fi-"+ item.icon}></i>
                                <p><strong>{item.name}</strong></p>
                        </div>
                    </NavLink>
            </MenuItem>
        ))}
    </Menu>       
    );
};

export default Panel;