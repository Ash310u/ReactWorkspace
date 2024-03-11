import { configureStore } from "@reduxjs/toolkit";
import { addDomainState, domainReducer } from "./slices/domainsSlice";
import { domainsApi } from "./apis/domainsApi";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
    reducer: {
        domainState:domainReducer,
        [domainsApi.reducerPath]: domainsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
                .concat(domainsApi.middleware)
    },
})

setupListeners(store.dispatch);

export { store };
export { addDomainState };
export { useAddDomainMutation, useFetchDomainQuery } from './apis/domainsApi'
