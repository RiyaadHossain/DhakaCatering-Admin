import { apiSlice } from "../api/apiSlice";

const packageAPI = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        leaderboradData: build.query({
            query: (token) => ({
                url: '/admin-data/leaderboard',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            }),
        }),
        getPackages: build.query({
            query: () => "/package",
            providesTags: ["Package"]
        }),
        getPackage: build.query({
            query: (id) => `/package/${id}`,
            providesTags: ["PackageSingle"]
        }),
        postPackage: build.mutation({
            query: ({ packageData, token }) => ({
                url: '/package',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: packageData
            }),
            invalidatesTags: ["Package"]
        }),
        updatePackage: build.mutation({
            query: ({ id, packageData, token }) => ({
                url: `/package/${id}`,
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: packageData
            }),
            invalidatesTags: ["Package", "PackageSingle"]
        }),
        deletePackage: build.mutation({
            query: ({ id, token }) => ({
                url: `/package/${id}`,
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }),
            invalidatesTags: ["Package"]
        })
    })
})

export const { useGetPackagesQuery, useGetPackageQuery, usePostPackageMutation, useUpdatePackageMutation, useDeletePackageMutation, useLeaderboradDataQuery } = packageAPI