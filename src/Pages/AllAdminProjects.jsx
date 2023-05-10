/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAdminProjects } from '../feature/adminProjectSlice';

function AllAdminProjects() {
    const astate = useSelector((state) => ({
        adminProject: state.adminProject,
        admin: state.admin,
    }));
    console.log(astate);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllAdminProjects(2, 4));
    }, [dispatch]);

    return <div>AllAdminProjects</div>;
}

export default AllAdminProjects;
