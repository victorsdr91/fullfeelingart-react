import React from 'react';
import {useSelector} from "react-redux";
import Panel from "./admin/Panel";
import {HashRouter} from "react-router-dom";
import Main from "./admin/Main";
import { Row, Column } from 'react-foundation';
import { Grid } from 'react-foundation';
import { Cell } from 'react-foundation';

const Admin = () => {
	const userFetch = useSelector(state => state.user);
	const user = userFetch || {};

	return (
		<HashRouter>
			<section className="post-header" >
				{user.rights === "Admin" ? (
					<Grid>
						<Cell className="small-12 medium-2 large-1 left admin-menu-wrapper">
								<Panel />
						</Cell>
						<Cell  className="small-12 medium-10 large-11 margin-top-2">
							<Main />
						</Cell>
					</Grid>

				) : "Yo don't have rights" }
			</section>
		</HashRouter>
	);
};

export default Admin;