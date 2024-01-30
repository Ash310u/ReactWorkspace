import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const response = await axios.get('http://127.0.0.1:3005/users');

    return response.data
})

export { fetchUsers };