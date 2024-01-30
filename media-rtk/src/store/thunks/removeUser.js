import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeUser = createAsyncThunk('users/remove', async (user) => {
    await axios.delete(`http://127.0.0.1:3005/users/${user.id}`);

    // The response body may or may not contain data, So basically I'm passing that user arg 
    return user
})

export { removeUser };