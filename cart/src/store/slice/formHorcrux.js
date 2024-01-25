import { createSlice } from '@reduxjs/toolkit'
import { addData } from './listHorcrux'

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
    },
    extraReducers(builder) {
    builder.addCase( addData, (state, action) => {
            state.name = ''
            state.cost = 0
        })
    }
})


export const formReducer = formHorcrux.reducer;
export const { changeName, changeCost } = formHorcrux.actions;