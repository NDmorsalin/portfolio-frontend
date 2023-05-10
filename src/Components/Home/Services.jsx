/* eslint-disable dot-notation */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import { Player } from '@lottiefiles/react-lottie-player';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import React from 'react';
import useFaIcons from '../../Hooks/useFaIcons';
import Divider from '../Layout/Divider';

import backend from '../../asset/backend.json';
import frontend from '../../asset/frontend.json';
import uiux from '../../asset/uiux.json';

const services = [
    {
        title: 'UI/UX Design',
        img: uiux,
        do: ['Landing Pages', 'User Flow', 'Wireframing', 'Prototyping', 'Mobile App Design'],
    },
    {
        title: 'Development [ Backend ]',
        img: backend,
        do: [
            'User Authentication.',
            'Data Management.',
            'Cloud Storage.',
            'Databases.',
            'API integration.',
            'REST API and GraphQL API.',
            'Social integration.',
            'Push notification.',
        ],
    },
    {
        title: 'Wev Design [ Frontend ]',
        img: frontend,
        do: ['HTML/CSS', 'JavaScript', 'Animation', 'WordPress', 'React'],
    },
];
function Services({ admin }) {
    const FaIcons = useFaIcons();

    const familiarTech = admin?.familiarTech;
    return (
        <div id="service" className="py-8">
            {/*  overflow-hidden relative z-10  */}
            <div className="lg:container mx-auto px-8 ">
                <div className="">
                    <h2 className="text-center md:text-left md:text-5xl text-3xl font-bold text-sky-600 pb-6">
                        Service
                    </h2>
                    <div className="">
                        <Splide
                            className="p-0 pb-12"
                            options={{
                                classes: {
                                    arrows: 'splide__arrows',
                                    arrow: 'splide__arrow your-class-arrow',
                                    prev: 'splide__arrow--prev hidden',
                                    next: 'splide__arrow--next hidden',
                                },
                                // type: 'loop',
                                autoScroll: {
                                    speed: 1,
                                },
                                rewind: true,
                                gap: '1rem',
                                perMove: 1,
                                focus: 'center',
                                perPage: 3,
                                // autoplay: true,
                                lazyLoad: 'nearby',
                                breakpoints: {
                                    480: {
                                        perPage: 1,
                                        gap: '.7rem',
                                    },
                                    768: {
                                        perPage: 2,
                                        gap: '.7rem',
                                        focus: null,
                                    },
                                },
                            }}
                            aria-label="My Favorite Images">
                            {services &&
                                services.map((service) => (
                                    <SplideSlide key={service.title} className=" items-stretch">
                                        <div className="relative z-0 overflow-hidden">
                                            <div className="dark:bg-slate-700 p-5 rounded  group ">
                                                <div className="relative z-50">
                                                    <Player
                                                        autoplay
                                                        loop
                                                        src={service.img}
                                                        className="bg-slate-400"
                                                        style={{
                                                            height: 'auto',
                                                            width: '5rem',
                                                        }}
                                                    />
                                                    <h2 className="text-2xl py-4 font-bold">
                                                        {service.title}
                                                    </h2>
                                                    <ul className="flex flex-col gap-4">
                                                        {service.do &&
                                                            service.do.map((item) => (
                                                                <li
                                                                    key={item}
                                                                    className="before:content-['>>'] before:pr-5 text-neutral-500 text-sm">
                                                                    {item}
                                                                </li>
                                                            ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </SplideSlide>
                                ))}
                        </Splide>
                    </div>
                </div>
            </div>
            <Divider pb="pb-8" />
        </div>
    );
}

export default Services;
