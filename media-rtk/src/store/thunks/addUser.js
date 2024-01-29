import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { faker } from '@faker-js/faker'

const addUser = createAsyncThunk('users/add', async () => {
    const response = await axios.post('http://127.0.0.1:3005/users', {
        name: faker.name.fullName(),
    });

    return response.data; 
})

export { addUser };