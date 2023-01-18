import { apiSlice } from "../api/apiSlice";

const authAPI = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        userPersistency: build.query({
            query: (token) => ({
                url: "/auth/initial",
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
        }),
        adminSignIn: build.mutation({
            query: (data) => ({
                url: '/auth/signin',
                method: 'POST',
                body: data
            })
        })
    })
})

export const { useAdminSignInMutation, useUserPersistencyQuery } = authAPI 