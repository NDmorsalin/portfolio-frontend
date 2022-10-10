import React, { useEffect, useState } from 'react';

function ProgressBar({ width, percent }) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        setValue(percent);
    }, [percent]);

    return (
        <div>
            <div className="bg-amber-300 rounded-full" style={{ width: `${width}%` }}>
                <div
                    style={{ width: `${value}%` }}
                    className="h-3 rounded-full bg-green-500 duration-1000 delay-500"
                />
            </div>
        </div>
    );
}

export default ProgressBar;
