import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from '@faker-js/faker';

const albumsApi = createApi({
    reducerPath: 'albums',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:3005'
    }),
    endpoints(builder) {
        return {
            addAlbum: builder.mutation({
                query: (user) => {
                    return {
                        url:'/albums',
                        method: 'POST',
                        body: {
                            userId: user.id,
                            title:faker.hacker.ingverb(),
                        }
                    }
                }
            }),
            fetchAlbums: builder.query({
                query: (user) => {
                    return {
                        url: '/albums',
                        params: {
                            userId: user.id
                        },
                        method: 'GET'
                    }
                }
            })
        }
    }
})

export const { useFetchAlbumsQuery, useAddAlbumMutation } = albumsApi;
export { albumsApi };