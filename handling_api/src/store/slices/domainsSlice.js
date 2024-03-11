import { createSlice } from "@reduxjs/toolkit";

const domainsSlice = createSlice({
    name: 'domains(you can put any name)',
    initialState: [],
    reducers: {
        addDomainState(state, action) {
            action.payload.forEach((single) => {
                state.push(single)
            })
        },
    }
})

export const { addDomainState } =  domainsSlice.actions;
export const domainReducer =  domainsSlice.reducer;