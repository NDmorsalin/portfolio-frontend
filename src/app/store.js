/* eslint-disable no-param-reassign */
import { configureStore } from '@reduxjs/toolkit';
import adminProjectReducer from '../feature/adminProjectSlice';
import adminReducer from '../feature/adminSlice';

const store = configureStore({
    reducer: {
        admin: adminReducer,
        adminProject: adminProjectReducer,
    },
});

export default store;
