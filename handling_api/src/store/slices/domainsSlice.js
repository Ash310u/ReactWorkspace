import { createSlice } from "@reduxjs/toolkit";

const domainsSlice = createSlice({
    name: 'domains',
    initialState: {
        domains: []
    },
    reducers: {
        stateAddAll(state, action) {
            action.payload.forEach(domain => {
                return state.domains.push(domain)
            })
        },
        stateAddSingle(state, action) {
            return state.domains.push(action.payload)
        },
    }
})

export const { stateAddAll, stateAddSingle } =  domainsSlice.actions;
export const domainReducer =  domainsSlice.reducer;