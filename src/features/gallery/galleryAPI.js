import { apiSlice } from "../api/apiSlice";

const galleryAPI = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getGallery: build.query({
            query: (token) => ({
                url: "/gallery",
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            }),
            providesTags: ["Gallery"]
        }),
        updateGalleryPhoto: build.mutation({
            query: ({ id, token, data }) => ({
                url: `/gallery/${id}`,
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: data
            }),
            invalidatesTags: ["Gallery"]
        }),
        createGalleryPhoto: build.mutation({
            query: ({ token, data }) => ({
                url: "/gallery",
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: data
            }),
            invalidatesTags: ["Gallery"]
        }),
        deleteGalleryPhoto: build.mutation({
            query: ({ token, id }) => ({
                url: `/gallery/${id}`,
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            }),
            invalidatesTags: ["Gallery"]
        }),
    })
})

export const { useGetGalleryQuery, useCreateGalleryPhotoMutation, useUpdateGalleryPhotoMutation, useDeleteGalleryPhotoMutation } = galleryAPI