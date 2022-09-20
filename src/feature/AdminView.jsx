/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/no-this-in-sfc */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Typed from 'react-typed';
import { fetchAdmin } from './adminSlice';

function AdminView() {
    const { isLoading, admin, error } = useSelector((state) => state.admin);
    const dispatch = useDispatch();
    // const [typed, setTyped] = useState('');

    useEffect(() => {
        dispatch(fetchAdmin());
    }, [dispatch]);

    console.log({ isLoading, admin, error });
    const designation = admin?.admin?.designation;
    return isLoading && !error ? (
        <h1>Loading...</h1>
    ) : (
        <div className="relative">
            <div className="pt-[5rem] md:pt-[6rem]" />

            <div className="h-[85vh] flex items-center">
                <div className="h-[10rem] w-1/2">
                    <h2 className="text-4xl font-bold">Hello, This is Nd Morsalin </h2>
                    <p>
                        {designation && (
                            <Typed strings={designation} typeSpeed={40} backSpeed={50} loop />
                        )}
                    </p>
                </div>
                <div className="w-1/2 h-1/2 overflow-hidden">
                    <img src={admin?.admin?.thumpPic} alt="" />
                </div>
            </div>
        </div>
    );
}

export default AdminView;
