import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdmin } from '../feature/adminSlice';

function Home() {
    const { isLoading, admin, error } = useSelector((state) => state.admin);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAdmin());
    }, [dispatch]);
    console.log({ isLoading, admin, error });

    return <div>Home</div>;
}

export default Home;
