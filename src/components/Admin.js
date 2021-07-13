import React from 'react';

class Admin extends React.Component {
	render() {
		return (
			<div>
				{this.props.user.rights == "Admin" ? 'Admin panel' : 'does not have rights' }
			</div>
		);
	}
}

export default Admin;