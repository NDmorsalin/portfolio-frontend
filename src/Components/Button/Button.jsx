import React from 'react';
import { NavLink } from 'react-router-dom';

function Button({ text, icon }) {
    return (
        <NavLink
            to="/hire"
            className="py-1 duration-500 px-3 rounded-full border-2 border-slate-800 dark:border-slate-300 bg-slate-300 hover:bg-slate-400 dark:bg-slate-800  dark:hover:bg-slate-700">
            {text} {icon}
        </NavLink>
    );
}

export default Button;
