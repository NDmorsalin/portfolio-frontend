import React from 'react';

function Button({ text, icon }) {
    return (
        <div className="py-[.4rem] duration-500 px-4 rounded-full border text-sm border-slate-800 dark:border-slate-300 bg-slate-300 hover:bg-slate-400 dark:bg-slate-800  dark:hover:bg-slate-700 w-fit flex gap-x-2 justify-center items-center">
            {text} {icon}
        </div>
    );
}

export default Button;
