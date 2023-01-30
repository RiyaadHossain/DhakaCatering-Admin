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
            })
        }),
        getUser: build.query({
            query: ({ token, id }) => ({
                url: `/admin-data/user/${id}`,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
        })
    })
})

export const { useGetUsersQuery, useGetUserQuery } = userAPI 