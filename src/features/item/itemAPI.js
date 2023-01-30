import { apiSlice } from "../api/apiSlice";

const itemAPI = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getItems: build.query({
            query: () => "/item",
            providesTags: ["Item"]
        }),
        getItem: build.query({
            query: (id) => `/item/${id}`,
            providesTags: ["ItemDetails"]
        }),
        postItem: build.mutation({
            query: ({ itemData, token }) => ({
                url: '/item',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: itemData
            }),
            invalidatesTags: ["Item"]
        }),
        updateItem: build.mutation({
            query: ({ id, itemData, token }) => ({
                url: `/item/${id}`,
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: itemData
            }),
            invalidatesTags: ["Item", "ItemDetails"]
        }),
        deleteItem: build.mutation({
            query: ({ id, token }) => ({
                url: `/item/${id}`,
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }),
            invalidatesTags: ["Item", "ItemDetails"]
        })
    })
})

export const { useGetItemsQuery, useGetItemQuery, usePostItemMutation, useUpdateItemMutation, useDeleteItemMutation } = itemAPI