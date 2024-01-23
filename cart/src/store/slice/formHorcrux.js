import { createSlice } from '@reduxjs/toolkit'

const formHorcrux = createSlice({
    name: 'form',
    initialState: {
        name: '',
        cost: 0,
    },
    reducers: {
        changeName(state, action) {
            state.name = action.payload
        },
        changeCost(state, action) {
            state.cost = action.payload
        }
    }
})


export const { formReducer } = formHorcrux.reducer;
export const { changeName, changeCost } = formHorcrux.actions;