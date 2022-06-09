import React, { useState } from 'react';
import {useGetContentByNameQuery} from "../services/ComponentService";
import {useDispatch, useSelector} from "react-redux";
import {add} from "../store/reducers/ComponentReducer";
import parse from 'html-react-parser';
import { MenuItem } from 'react-foundation';
import { Menu } from 'react-foundation';
import { Icon } from 'react-foundation';
import { Alignments } from 'react-foundation';

const AboutMe = () => {
	const { data, isLoading} = useGetContentByNameQuery('aboutme');
	const dispatch = useDispatch();
	if(data) {
		dispatch(add(data[0]));
	}

	const socialItems = new Array()
						.concat({ name: 'linkedin', link: 'https://es.linkedin.com/in/wendy-ladino-a44356171', icon: 'fi-social-linkedin'})
						.concat({ name: 'facebook', link: 'https://www.facebook.com/wendy.ladino.7', icon: 'fi-social-facebook'})
						.concat({ name: 'instagram', link: 'https://instagram.com/wenlad1', icon: 'fi-social-instagram' })
						.concat({ name: 'twitter', link: 'https://twitter.com/wendyladino', icon: 'fi-social-twitter'});

	const [menuItems] = useState(socialItems);
	const menuList = menuItems.map(
		(element, key) => {
			return <MenuItem key={key}>
						<a href={element.link} target='_blank'><Icon name={'social ' + element.icon}></Icon></a>
					</MenuItem>;
		}
	);
	const widget = useSelector(state => state.components.find(component => component.widgetName =="aboutme"));
	const {enabled, info} = widget ? widget : {enabled: false, info: { title: '', description: ''}};

	return (
			<>
				{isLoading ? (
						<i className='fa fa-spinner fa-spin'></i>
					) :
					(
						enabled ?
						(<>
								<div className="entry">
									<h1>{info.title}</h1>
									<div className="hide-for-small-only">{parse(info.description)}</div>
									<Menu alignment={Alignments.CENTER}>
										{menuList}
									</Menu>
								</div>
							</>
						) :
						(
							<></>
						)
					)}
			</>
		);
}

export default AboutMe;