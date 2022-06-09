import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { host } from './Api.config';

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: fetchBaseQuery({ baseUrl: host }),
	endpoints: (builder) => ({
		getUser: builder.query({
			query: (id) => `users/${id}`,
		}),
		getUserByNickname: builder.query({
			query: (nickname) => `users/?nickname=${nickname}`,
		}),
	}),
})

export const { useGetUserQuery, useGetUserByNicknameQuery } = userApi;