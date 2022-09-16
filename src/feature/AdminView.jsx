import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdmin } from './adminSlice';

function AdminView() {
    const { isLoading, admin, error } = useSelector((state) => state.admin);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAdmin());
    }, [dispatch]);

    console.log({ isLoading, admin, error });

    return <div>Admin view.js</div>;
}

export default AdminView;
