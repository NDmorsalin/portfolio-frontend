/* eslint-disable no-param-reassign */
import { configureStore } from '@reduxjs/toolkit';
import adminReducer from '../feature/adminSlice';

const store = configureStore({
    reducer: {
        admin: adminReducer,
    },
});

export default store;
