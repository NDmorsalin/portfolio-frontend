/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAdmin = createAsyncThunk('admin/fetchAdmin', async () => {
    const response = await axios.get('localhost:4000/api/v1/admin');
    console.log(response);
    return response;
});

export const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        isLoading: false,
        admin: {},
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAdmin.pending, (state) => {
            state.isLoading = true;
            state.user = {};
            state.error = null;
        });
        builder.addCase(fetchAdmin.fulfilled, (state, actions) => {
            console.log(actions.payload);
            state.isLoading = true;
            state.user = actions.payload;
            state.error = null;
        });
        builder.addCase(fetchAdmin.rejected, (state, actions) => {
            state.isLoading = false;
            state.user = {};
            state.error = actions.payload;
        });
    },
});

export default adminSlice.reducer;
