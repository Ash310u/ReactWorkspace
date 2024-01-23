import { configureStore } from '@reduxjs/toolkit'
import { formReducer, changeName, changeCost } from './slice/formHorcrux'
import { listReducer, changeSearchTerm, addData, removeData } from './slice/listHorcrux'

const store = configureStore({
    reducer: {
        form: formReducer,  
        list: listReducer
    }
})

export { store, changeName, changeCost,  changeSearchTerm, addData, removeData };