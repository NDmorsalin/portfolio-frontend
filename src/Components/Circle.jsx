import React from 'react';

function Circle({ w, h, left, right, top, bottom }) {
    return (
        <div
            className={`${w} ${h} absolute ${left} ${right} ${bottom} ${top} border-spacing-3 border-2 border-orange-900 border-dashed rounded-full after:absolute after:w-[120%] after:h-[120%] after:border-pink-600  after:border-2 after:rounded-full before:absolute before:w-[80%] before:h-[80%] before:border-green-600  before:border-2 before:rounded-full before:z-0 after:z-0
             after:top-1/2 after:left-1/2 before:top-1/2 before:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 before:-translate-y-1/2 before:-translate-x-1/2`}
        />
    );
}

export default Circle;
