import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const transactionState = {
    updateState: false,
    loading: false,
    transactionList: [],
    error: "",
    response: ""
};

// This is for getting transaction
export const findTransaction = createAsyncThunk(
    "customers/findTransactions",
    async () => {
        const response = await axios.get("http://localhost:3000/transaction");
        return response.data;
    }
);

// This is for posting or storing a new transaction 
export const transactionStore = createAsyncThunk(
    "customers/storeTranscations",
    async () => {
        console.log(transaction);
        const response = await axios.get("http://localhost:3000/transaction", transaction);
        return response.data;
    }
);

export default transactionSlice;
