import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { usersReducer } from "./slices/usersSlice";
import { albumsApi } from "./apis/albumsApi";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        [albumsApi.reducerPath]: albumsApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(albumsApi.middleware);
    }
})

setupListeners(store.dispatch);

// A shorthand to export everything from the specified module.
export * from './thunks/fetchUsers'
export * from './thunks/addUser'
export * from './thunks/removeUser'
export { useFetchAlbumsQuery } from './apis/albumsApi'