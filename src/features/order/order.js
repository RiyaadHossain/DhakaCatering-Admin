import { apiSlice } from "../api/apiSlice";

const orderAPI = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getOrders: build.query({
            query: (token) => ({
                url: "/order",
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            }),
        })
    })
})

export const { useGetOrdersQuery } = orderAPI