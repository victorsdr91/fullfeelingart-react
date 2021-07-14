import http from './Api.config';

const getUser = async (userId) => {
	const response = await http.get('users/' + userId);
	return response.data;
};

const getUserByNickname = async (nickname) => {
	const response = await http.get('users/?nickname=' + nickname);
	return response.data[0];
};

export default {
	getUser,
	getUserByNickname,
};