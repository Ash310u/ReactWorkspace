import { createSlice, nanoid } from '@reduxjs/toolkit'

const listHorcruxSlice = createSlice({
    name: 'list',
    initialState: {
        searchTerm: '',
        data: [],
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload
        },
        addData(state, action) {
            // Assumption:
            // action.payload === {name:''. cost:0}
            state.data.push({
                id: nanoid(),
                name: action.payload.name,
                cost: action.payload.cost
            })
        },
        removeData(state, action) {
            // Assumption:
            // action.payload === the 'id' of the data we want to remove
            const filteredData = state.data.filter((obj) => {
                return obj.id !== action.payload
            })
            state.data = filteredData;
        }
    }
})

export const listReducer = listHorcruxSlice.reducer;
export const { changeSearchTerm, addData, removeData } = listHorcruxSlice.actions;