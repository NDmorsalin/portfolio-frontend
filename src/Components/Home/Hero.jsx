import React from 'react';
import AdminView from '../../feature/AdminView';
import Circle from '../Circle';
import Divider from '../Layout/Divider';

function Hero({ admin }) {
    return (
        <div className="overflow-hidden relative z-10">
            <div className="lg:container mx-auto px-8 group ">
                <Circle
                    w="md:w-[30rem] w-[20rem]"
                    h="md:h-[30rem] h-[20rem]"
                    left="md:group-hover:-left-[15rem] group-hover:-left-[10rem] -left-full"
                    top="md:group-hover:-top-[15rem] group-hover:-top-[10rem] -top-full"
                />
                <Circle
                    w="md:w-[30rem] w-[20rem]"
                    h="md:h-[30rem] h-[20rem]"
                    right="group-hover:-right-[10rem] md:group-hover:-right-[15rem] -right-full"
                    bottom="group-hover:-bottom-[10rem] md:group-hover:-bottom-[15rem] -bottom-full"
                />

                <AdminView admin={admin} />
                <Divider pb="pb-8" />
            </div>
        </div>
    );
}

export default Hero;
