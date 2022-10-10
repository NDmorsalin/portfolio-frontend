import React from 'react';

function Divider({ pb, pt }) {
    return (
        <div className="lg:container container mx-auto ">
            <div className={`flex justify-center items-center gap-4  text-sky-600 ${pb} ${pt} `}>
                <span className="text-2xl font-bold"> &lt; ! --- </span>
                <div className="w-[50%] flex justify-center items-center gap-2 ">
                    <div className="rounded-full flex-1 h-1 md:h-[1.5rme] bg-sky-600" />
                    <div className="rounded-full w-1 md:w-2 h-1 md:h-2 bg-sky-600" />
                    <div className="rounded-full w-1 md:w-2 h-1 md:h-2 bg-sky-600" />
                    <div className="rounded-full w-1 md:w-2 h-1 md:h-2 bg-sky-600" />
                    <div className="rounded-full w-1 md:w-2 h-1 md:h-2 bg-sky-600" />
                    <div className="rounded-full flex-1 h-1 md:h-[1.5rme] bg-sky-600" />
                </div>
                <span className="text-2xl  font-bold"> --- &gt;</span>
            </div>
        </div>
    );
}

export default Divider;
