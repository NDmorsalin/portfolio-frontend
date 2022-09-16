/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useEffect, useState } from 'react';

const useTheme = () => {
    const [theme, setTheme] = useState(null);
    const [isToggleOn, setIsToggleOn] = useState(true);

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, []);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const handleClick = () => {
        setIsToggleOn((prevState) => !prevState);
        if (isToggleOn) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    return { theme, isToggleOn, handleClick };
};

export default useTheme;
