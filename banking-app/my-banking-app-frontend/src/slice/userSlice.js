import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

const userState = {
    updateState: false,
    loading: false,
    userList: [],
    error: "",
    response: ""
};

export const loginSignIn = createAsyncThunk(
    "login/signIn",
    async () => {
        const response = await axios.get("http://localhost:3000/login")
        return response.data;
    }
);

const userSlice = createSlice({
    name: "",
    initialState: userState,
    reducers: {
        changeStateTrue: (state) => {
            state.updateState = true;
        }
    }
})

