import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const componentApi = createApi({
    reducerPath: 'componentApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    tagTypes: ['Components'],
    endpoints: (builder) => ({
        getContent: builder.query({
            query: (id) => `components/${id}`,
        }),
        getContentByName: builder.query({
            query: (name) => `components/?widgetName=${name}`,
        }),
        updateComponent: builder.mutation({
            query: ({ id, ...body }) => ({
                url: `components/${id}`,
                method: 'PUT',
                body: body,
            }),
            transformResponse: (response) => response.data,
            invalidatesTags: (result, error, { id }) => [{ type: 'Components', id }]
        })
    }),
})

export const { useGetContentQuery, useGetContentByNameQuery, useUpdateComponentMutation } = componentApi;