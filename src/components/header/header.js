import React from 'react';
import { TitleBar, TitleBarTitle, TopBar, TopBarLeft, TopBarRight, Menu, MenuItem, MenuText } from "react-foundation";
import { Link } from 'react-router-dom';
import './style.scss';

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
					<TopBarRight>
						<SocialMenu user={this.props.user}/>
					</TopBarRight>
				</TopBar>
			</div>
		);
	}
}

class MenuRender extends React.Component {
	constructor(props) {
		super(props);
		const menuItems = new Array()
						.concat({ name: 'Inicio', link: '/', active: true})
						.concat({ name: 'Que hago', link: '#what', active: false })
						.concat({ name: 'Quien soy', link: '#aboutme', active: false});

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
							<Link to={element.link} onClick={() => this.setActive(element)}>{element.name}</Link>
						</MenuItem>;
			}
		);
		return <Menu>
					{menuList}
				</Menu>;	
	}
}


class SocialMenu extends React.Component {
	constructor(props) {
		super(props);
		const menuItems = new Array()
						.concat({ name: 'facebook', link: '#', icon: 'fi-social-facebook'})
						.concat({ name: 'instagram', link: 'https://instagram.com/wenlad1', icon: 'fi-social-instagram' })
						.concat({ name: 'twitter', link: 'https://twitter.com/wendyladino', icon: 'fi-social-twitter'});

		this.state = {
			menuItems: menuItems,
		}
	}

	render() {
		const menuList = this.state.menuItems.map(
			(element, key) => {
				return <MenuItem key={key}>
							<a href={element.link} target='_blank'><i className={'social ' + element.icon}></i></a>
						</MenuItem>;
			}
		);
		return <Menu>
					{menuList}
					<MenuItem key="admin">
							<Link to="/admin" user={this.props.user}><i className="social fi-lock"></i></Link>
					</MenuItem>
					<MenuText>{this.props.user.nickname}</MenuText>
				</Menu>;	
	}
}

export default Header;