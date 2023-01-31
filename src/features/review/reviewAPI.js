import { apiSlice } from "../api/apiSlice";

const reviewAPI = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getReviews: build.query({
            query: (foodId) => `/review/?foodId=${foodId}`,
            providesTags: ["Reviews"]
        }),
        removeReview: build.mutation({
            query: ({ id, token }) => ({
                url: `/review/${id}`,
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            }),
            invalidatesTags: ["Reviews"]
        })
    })
})

export const { useGetReviewsQuery, useRemoveReviewMutation } = reviewAPI