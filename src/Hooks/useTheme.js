/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useEffect, useState } from 'react';

const useTheme = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme'));
    const [isToggleOn, setIsToggleOn] = useState(theme === 'light');

    useEffect(() => {
        if (localStorage.getItem('theme') && 'light' && theme === 'light') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }, [theme]);

    useEffect(() => {
        if (theme === 'light') {
            localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark');
        } else {
            localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');
        }
    }, [theme]);

    const handleClick = () => {
        setIsToggleOn((prevState) => !prevState);
        if (isToggleOn) {
            localStorage.setItem('theme', 'dark');
            setTheme('dark');
        } else {
            localStorage.setItem('theme', 'light');
            setTheme('light');
        }
    };

    return { theme, isToggleOn, handleClick };
};

export default useTheme;
