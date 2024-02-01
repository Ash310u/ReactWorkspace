import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from '@faker-js/faker';

// DEV ONLY
const pause = (duration) => {
    return new Promise(resolve => {
        setTimeout(resolve, duration);
    })
}

const albumsApi = createApi({
    reducerPath: 'albums',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:3005',
                                       // WHAT IS THIS 'fetchFn' FUNCTION ?
        fetchFn: async(...args) => {  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            // REMOVE FOR PRODUCTION // 'RTK Query' uses 'fetch' function that built directly into the browser to make request.                                                           //
            await pause(1000);      //  In some cases we might want to 'override' that 'fetch' function(VERY RARE),                                                                      //
            return fetch(...args); //   So to allow us to override that function and replace it with whatever kind of fetching machanism we want to put in we can define the 'fetchFn'. //
        },                        //    ( right now I'm just using this as a way to introduce that 'little pause' arbitrarily.)                                                        //
    }),                          ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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