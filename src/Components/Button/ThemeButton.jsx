/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

function ThemeButton({ isToggleOn, handleClick }) {
    return (
        <div
            onClick={handleClick}
            className={`bg-gradient-to-br ${
                isToggleOn ? 'from-amber-200 to-cyan-900' : 'from-cyan-900 to-slate-900'
            }   
border-2  h-8 w-16 rounded-3xl ${isToggleOn ? 'border-slate-800' : 'border-slate-300'}`}>
            <div
                className={`relative w-6 h-6 top-1/2 flex items-center justify-center bg-slate-400 -translate-y-1/2 border-2 rounded-full duration-500 ${
                    isToggleOn ? 'left-8' : 'left-[2px]'
                } 
            `}>
                {isToggleOn ? (
                    <BsFillSunFill className="text-orange-500" />
                ) : (
                    <BsFillMoonFill className="text-slate-800" />
                )}
            </div>
        </div>
    );
}

export default ThemeButton;
