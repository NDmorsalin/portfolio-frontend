/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllAdminProjects = createAsyncThunk(
    'adminProject/getAllAdminProjects',
    async (adminId, resultPerPage) => {
        console.log(resultPerPage);
        const response = await axios.get(
            `http://localhost:4000/api/v1/admin/adminProjects?resultPerPage=${adminId}&adminId=${adminId}`
        );

        return response.data;
    }
);

export const adminProjectSlice = createSlice({
    name: 'adminProject',
    initialState: {
        isLoading: false,
        adminAllProjects: [],
        adminSingleProject: {},
        error: null,
    },
    extraReducers: {
        [getAllAdminProjects.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getAllAdminProjects.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.adminAllProjects = action.payload;
        },
        [getAllAdminProjects.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action;
        },
    },
});

export default adminProjectSlice.reducer;
