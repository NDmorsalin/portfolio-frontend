/* eslint-disable no-unused-vars */
import React from 'react';

function Circle({ w, h, left, right, top, bottom, z }) {
    return (
        <div
            className={`${w} ${h}  ${left}  ${right}  ${top} ${bottom} absolute   duration-700 border-spacing-3 border-2 border-slate-600  rounded-full ${
                z || -z - 10
            }
            
          after:absolute after:w-[120%] after:h-[120%] after:border-slate-600  after:border-2 after:-translate-x-1/2  after:rounded-full after:top-1/2 after:left-1/2 after:-translate-y-1/2 after:z-0
           
           before:absolute before:w-[80%] before:h-[80%] before:border-slate-600  before:border-2 before:rounded-full before:z-0
             before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2`}
        />
    );
}

export default Circle;
