import { apiSlice } from "../api/apiSlice";

const statDataAPI = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getStatData: build.query({
            query: (token) => ({
                url: "/admin-data/stat-data",
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
        }),
        getSidebarData: build.query({
            query: (token) => ({
                url: "admin-data/sidebar-data",
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }),
            providesTags: ["Item", "ItemDetails", "Package", "PackageSingle", "User", "OrderRequest", "OrderRequests"]
        })
    })
})

export const { useGetStatDataQuery, useGetSidebarDataQuery } = statDataAPI 