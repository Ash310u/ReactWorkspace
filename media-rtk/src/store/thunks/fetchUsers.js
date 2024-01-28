import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const response = await axios.get('http://127.0.0.1:3005/users');
    
    // for dev purpose
    await pause(1000)

    return response.data
})

// for dev purpose
const pause = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}

export { fetchUsers };