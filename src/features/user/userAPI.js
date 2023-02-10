import { apiSlice } from "../api/apiSlice";

const userAPI = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getUsers: build.query({
            query: (token) => ({
                url: "/admin-data/users",
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }),
            providesTags: ["Users"]
        }),
        getUser: build.query({
            query: ({ token, id }) => ({
                url: `/admin-data/user/${id}`,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }),
            providesTags: ["User"]
        }),
        updateUser: build.mutation({
            query: ({ token, id, data }) => ({
                url: `/admin-data/user/${id}`,
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: data
            }),
            invalidatesTags: ["Users", "User"]
        }),
    })
})

export const { useGetUsersQuery, useGetUserQuery, useUpdateUserMutation } = userAPI 