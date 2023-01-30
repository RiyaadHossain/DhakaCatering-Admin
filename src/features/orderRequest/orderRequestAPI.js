import { apiSlice } from "../api/apiSlice";

const orderRequestAPI = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getOrderRequest: build.query({
            query: ({ id, token }) => ({
                url: `/order-request/${id}`,
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            }),
            providesTags: ["OrderRequest"]
        }),
        getOrderRequests: build.query({
            query: (token) => ({
                url: "/order-request",
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            }),
            providesTags: ["OrderRequests"]
        }),
        updateOrderRequest: build.mutation({
            query: ({ id, status, token }) => ({
                url: `/order-request/${id}`,
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: { status }
            }),
            invalidatesTags: ["OrderRequests", "OrderRequest"]
        }),
    })
})

export const { useGetOrderRequestsQuery, useUpdateOrderRequestMutation, useGetOrderRequestQuery } = orderRequestAPI