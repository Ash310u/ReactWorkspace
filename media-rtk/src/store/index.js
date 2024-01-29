import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";

export const store = configureStore({
    reducer: {
        users: usersReducer
    }
})

// A shorthand to export everything from the specified module.
export * from './thunks/fetchUsers'
export * from './thunks/addUser'