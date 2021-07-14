import React from 'react';

const Admin = (props) => {
	return (
		<>
			{props.user.rights == "Admin" ? 'Admin panel' : 'does not have rights' }
		</>
	);
}

export default Admin;