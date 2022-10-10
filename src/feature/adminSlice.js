/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAdmin = createAsyncThunk('admin/fetchAdmin', async () => {
    const response = await axios.get('http://localhost:4000/api/v1/admin');
    return response.data;
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
            state.admin = {};
            state.error = null;
        });
        builder.addCase(fetchAdmin.fulfilled, (state, actions) => {
            state.isLoading = false;
            state.admin = actions.payload;
            state.error = null;
        });
        builder.addCase(fetchAdmin.rejected, (state, actions) => {
            state.isLoading = false;
            state.admin = {};
            state.error = actions.payload;
        });
    },
});

export default adminSlice.reducer;
