/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useRef, useState } from 'react';
import { FaBars, FaHandshake, FaPlus } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import logoDark from '../../asset/logo-dark.svg';
import logoLight from '../../asset/logo-light.svg';
import useTheme from '../../Hooks/useTheme';
import ButtonLink from '../Button/ButtonLink';
import ThemeButton from '../Button/ThemeButton';

const navLinks = [
    {
        path: '#home',
        text: 'Home',
    },
    {
        path: '#service',
        text: 'Service',
    },
    {
        path: '/contact',
        text: 'Contact',
    },
    {
        path: '#projects',
        text: 'Projects',
    },
];

function Header() {
    const { handleClick, isToggleOn } = useTheme();
    const [toggle, setToggle] = useState(false);
    // const [y, setY] = useState(0);
    // const [color, setColor] = useState('');
    const stakeRef = useRef();

    const handleToggle = () => {
        setToggle((prevToggle) => !prevToggle);
    };

    const listenScrollEvent = () => {
        if (window.scrollY > 100) {
            stakeRef.current.classList.add(
                'fixed',
                'animate-sticky',
                'bg-gray-200',
                'dark:bg-slate-700'
            );
            stakeRef.current.classList.remove('absolute');
        } else {
            stakeRef.current.classList.add('absolute');
            stakeRef.current.classList.remove(
                'fixed',
                'animate-sticky',
                'bg-gray-200',
                'dark:bg-slate-700',
                'bg-transparent'
            );
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
    }, []);
    return (
        <div
            ref={stakeRef}
            // style={{ top: -y }}
            className="bg-transparent dark:bg-slate-700 w-full duration-500  z-50 top-0 absolute ">
            <header className="lg:container mx-auto px-8 flex justify-between items-center">
                <div className="flex justify-between items-center w-full md:w-auto py-2 md:py-0">
                    <NavLink to="/" className="flex  items-center lg:gap-4 gap-2">
                        <div className="w-12">
                            <img
                                className="w-full"
                                src={isToggleOn ? logoDark : logoLight}
                                alt={isToggleOn ? 'logo-Dark' : 'logo-Light'}
                            />
                        </div>

                        <div className="">
                            <h2 className="text-xl font-bold md:text-2xl lg:text-3xl ">
                                Psycho Programmer
                            </h2>
                            <p className="text-xs md:text-sm ">Love Programming as Psycho</p>
                        </div>
                    </NavLink>

                    {!toggle ? (
                        <FaBars onClick={handleToggle} className="md:hidden text-3xl" />
                    ) : (
                        <FaPlus
                            onClick={handleToggle}
                            className="md:hidden rotate-45 duration-500 font-bold text-3xl"
                        />
                    )}
                </div>

                {/* //?desktop nav start */}

                <nav className="hidden md:flex justify-center items-center lg:gap-4 md:gap-2">
                    {navLinks.map(({ path, text }) =>
                        path.includes('#') ? (
                            <a
                                key={text}
                                href={path}
                                className="text-lg font-medium inline-block md:py-5 md:px-1 lg:py-6 lg:px-2 ">
                                {text}
                            </a>
                        ) : (
                            <NavLink
                                key={text}
                                to={path}
                                className="text-lg font-medium inline-block md:py-5 md:px-1 lg:py-6 lg:px-2 ">
                                {text}
                            </NavLink>
                        )
                    )}
                </nav>

                {/* theme button */}
                <div className="hidden md:flex justify-center items-center gap-4 ">
                    {' '}
                    <ButtonLink
                        text="Hire Me"
                        path="/hire"
                        icon={<FaHandshake className="text-amber-300 text-xl" />}
                    />
                    <ThemeButton handleClick={handleClick} isToggleOn={isToggleOn} />
                </div>

                {/* //?desktop nav end */}

                {/* mobile nav start */}

                <div
                    className={`md:hidden absolute top-full duration-500 overflow-hidden ${
                        toggle ? 'right-0' : '-right-full'
                    }  w-3/4 h-[calc(100vh-4.5rem)] bg-gray-400 dark:bg-slate-600`}>
                    <nav className="md:hidden flex flex-col gap-3 ">
                        {navLinks.map(({ path, text }) => (
                            <NavLink
                                key={text}
                                to={path}
                                className="text-lg group font-medium block px-8 py-4 relative after:bg-gray-300 dark:after:bg-slate-700  after:w-0 hover:after:w-full after:duration-500 after:-z-10 z-10 duration-500 after:h-full after:left-0 after:absolute after:top-0">
                                {text}
                                {/* 
                                <div className="absolute w-0 group-hover:w-full group-hover:text-white duration-500 group-hover:bg-slate-800  h-full left-0 top-0 -z-10" /> */}
                            </NavLink>
                        ))}

                        <div className="md:hidden flex justify-center gap-4">
                            <ButtonLink text="Hire Me" path="/hire" icon={<FaHandshake />} />
                            <ThemeButton handleClick={handleClick} isToggleOn={isToggleOn} />
                        </div>
                    </nav>
                </div>

                {/* mobile nav end */}
            </header>
        </div>
    );
}

export default Header;
