import { apiSlice } from "../api/apiSlice";

const orderRequestAPI = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getOrderRequests: build.query({
            query: (token) => ({
                url: "/order-request",
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            }),
            providesTags: ["OrderRequest"]
        }),
        updateOrderRequest: build.mutation({
            query: ({ id, status, token }) => ({
                url: `/order-request/${id}`,
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: status
            }),
            invalidatesTags: ["OrderRequest",]
        }),
    })
})

export const { useGetOrderRequestsQuery, useUpdateOrderRequestMutation } = orderRequestAPI