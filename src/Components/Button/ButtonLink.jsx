import React from 'react';
import { NavLink } from 'react-router-dom';

function Button({ text, icon, path }) {
    const pathAar = path?.split(':');

    const isHttps = pathAar?.includes('https');
    const isHttp = pathAar?.includes('http');
    return isHttps || isHttp ? (
        <a
            href={`${path}`}
            title="Documentation link"
            target="_aboutblank"
            className="py-[.4rem] duration-500 px-4 rounded-full border text-sm border-slate-800 dark:border-slate-300 bg-slate-300 hover:bg-slate-400 dark:bg-slate-800  dark:hover:bg-slate-700 w-fit flex gap-x-2 justify-center items-center">
            {text} {icon}
        </a>
    ) : (
        <NavLink
            to={`${path}`}
            className="py-[.4rem] duration-500 px-4 rounded-full border text-sm border-slate-800 dark:border-slate-300 bg-slate-300 hover:bg-slate-400 dark:bg-slate-800  dark:hover:bg-slate-700 w-fit flex gap-x-2 justify-center items-center">
            {text} {icon}
        </NavLink>
    );
}

export default Button;
