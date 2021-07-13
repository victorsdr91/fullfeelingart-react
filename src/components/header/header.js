import React from 'react';
import { TitleBar, TitleBarTitle, TopBar, TopBarLeft, TopBarRight, Menu, MenuItem, MenuText } from "react-foundation";
import './style.scss';
import portfolio from '../../images/portfolio1.png';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toggle: false,
		};
	}

	toggleMenu() {
		this.setState({toggle : !this.state.toggle});
	}

	render() {
		const toggleClass = this.state.toggle ? '' : 'hide-for-small-only';

		return (
			<div>
				<TitleBar className="show-for-small-only">
					<button className="menu-icon" type="button" onClick={() => this.toggleMenu()}></button>
    				<TitleBarTitle>Menu</TitleBarTitle>
				</TitleBar>
				<TopBar className={toggleClass}>
					<TopBarLeft>
					 <Menu>
					 	<MenuText>{this.props.logo}</MenuText>
					 </Menu>
					</TopBarLeft>
					<TopBarRight>
						<MenuRender />
					</TopBarRight>
				</TopBar>
				<div className="portfolio"></div>
			</div>
		);
	}
}

class MenuRender extends React.Component {
	constructor(props) {
		super(props);
		const menuItems = new Array()
						.concat({ name: 'Inicio', link: '#', active: true})
						.concat({ name: 'Que hago', link: '#what', active: false })
						.concat({ name: 'Quien soy', link: '#aboutme', active: false})
						.concat({ name: 'Facebook', link: '#facebook', active: false});

		this.state = {
			menuItems: menuItems,
		}
	}

	setActive(element) {
		const items = this.state.menuItems.slice();
		items.map((el) => {
			el.active = el.name == element.name;
		});
		this.setState({ menuItems: items});
	}

	render() {
		const menuList = this.state.menuItems.map(
			(element, key) => {
				return <MenuItem key={key} className={element.active ? 'is-active' : ''}>
							<a href={element.link} onClick={() => this.setActive(element)}>{element.name}</a>
						</MenuItem>;
			}
		);
		return <Menu>
					{menuList}
				</Menu>;	
	}
}

export default Header;