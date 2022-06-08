import React from 'react';
import {useGetContentByNameQuery} from "../services/ComponentService";
import {useDispatch, useSelector} from "react-redux";
import {update} from "../store/reducers/ComponentReducer";
import parse from 'html-react-parser';

const AboutMe = () => {
	const { data, isLoading} = useGetContentByNameQuery('aboutme');
	const dispatch = useDispatch();
	if(data) {
		dispatch(update(data[0]));
	}

	const widget = useSelector(state => state.component.widgetName == "aboutme" ? state.component : null);
	const {enabled, info} = widget;

	return (
		<div className="column entry">
			{isLoading ? (
					<i className='fa fa-spinner fa-spin'></i>
				) :
				(
					enabled ?
					(<>
						<h3>{info.title}</h3>
						{parse(info.description)}
					</>) :
					()
				)}
		</div>
		);
}

export default AboutMe;