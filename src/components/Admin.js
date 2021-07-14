import React from 'react';

const Admin = (props) => {
	return (
		<React.Fragment>
			{props.user.rights == "Admin" ? 'Admin panel' : 'does not have rights' }
		</React.Fragment>
	);
}

export default Admin;