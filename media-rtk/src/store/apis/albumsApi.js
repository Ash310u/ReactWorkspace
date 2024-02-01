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
                // So the third argument right here is gonna be whatever you passed to your 'addAlbum()'[ // provided by the hook 'useAddAlbumMutation'// ].
                invalidatesTags: (result, error, arg) => {
                    return [{ type: 'Album', id: arg.id }]
                },
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
                           // Conceptually for me, Its a 'user record'.
                           // So the third argument right here is gonna be whatever you passed to your hook[ // here the hook is 'useFetchAlbumsQuery'// ] when you called it back inside of your component.
                providesTags: (result, error, arg) => {
                    return [{ type: 'Album', id: arg.id }]
                },
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