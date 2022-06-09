import React, {useState} from 'react';
import { Menu, MenuItem } from "react-foundation";
import { NavLink } from 'react-router-dom';

const Panel = () => {

    const panelItems = [
        {
            name: 'Home',
            icon: 'page',
            link: 'edit-home',
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

    return (
        <Menu isVertical={true}>
        { menuItems.map((item, key) => (
            <MenuItem key={key} >
                    <NavLink exact to={item.link}>
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