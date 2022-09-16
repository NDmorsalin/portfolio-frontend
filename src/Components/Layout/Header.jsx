/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { NavLink } from 'react-router-dom';
import logoDark from '../../asset/logo-dark.svg';
import logoLight from '../../asset/logo-light.svg';
import useTheme from '../../Hooks/useTheme';
import ThemeButton from '../ThemeButton/ThemeButton';

const navLinks = [
    {
        path: '/',
        text: 'Home',
    },
    {
        path: '/service',
        text: 'Service',
    },
    {
        path: '/contact',
        text: 'Contact',
    },
    {
        path: '/projects',
        text: 'All Project',
    },
];

function Header() {
    const { handleClick, isToggleOn } = useTheme();
    return (
        <header className="container mx-auto px-8 py-2 dark:text-slate-300 flex justify-between items-center">
            <NavLink to="/" className="flex items-center gap-4">
                <div className="w-12">
                    <img
                        className="w-full"
                        src={isToggleOn ? logoDark : logoLight}
                        alt={isToggleOn ? 'logo-Dark' : 'logo-Light'}
                    />
                </div>

                <div className="">
                    <h2 className="text-3xl">Psycho asset Programmer</h2>
                    <p>Love Programming as Psycho</p>
                </div>
            </NavLink>

            <nav className="flex justify-center items-center gap-4">
                {navLinks.map(({ path, text }) => (
                    <NavLink
                        to={path}
                        className="text-lg font-medium hover:font-semibold active:text-red-400 ">
                        {text}
                    </NavLink>
                ))}
            </nav>

            {/* theme button */}
            <ThemeButton handleClick={handleClick} isToggleOn={isToggleOn} />
        </header>
    );
}

export default Header;
