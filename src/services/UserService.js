import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
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