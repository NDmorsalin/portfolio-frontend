import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';
import aboutme from '../../asset/aboutme.json';
import Circle from '../Circle';
import Divider from '../Layout/Divider';

function About() {
    return (
        <div className="dark:bg-slate-700 bg-slate-300 py-8 overflow-hidden relative z-10">
            <div className="lg:container mx-auto px-8 group">
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

                <div className="">
                    <h2 className="text-center md:text-left md:text-5xl text-3xl font-bold text-sky-600 pb-6">
                        Who am I ?
                    </h2>
                    <div className="flex flex-col-reverse md:flex-row">
                        <div className="w-full md:w-7/12 md:pr-4">
                            <p className="leading-loose tracking-wide text-center md:text-left z-30 mt-4">
                                My name is ABU SAID. I&apos;m a web designer and developer based in
                                Dhaka, Bangladesh. I am a professional and passionate programmer in
                                my daily life. A quick learner with a self-learning attitude. I love
                                to learn and explore new technologies and am Passionate about
                                Problem Solving. Love almost all the stacks of Software Engineering.
                                My current stack includes Nodejs, Nestjs, React, NextJs, Redux,
                                Bootstrap, Ant Design, Material UI, MongoDB, Mysql, PostgreSQL,
                                Firebase, Cloudinary, etc.
                            </p>
                        </div>
                        <div className="w-full md:w-5/12 pl-4">
                            <div className="w-3/5 md:w-full mx-auto">
                                <Player
                                    autoplay
                                    loop
                                    src={aboutme}
                                    style={{ height: '15rem', width: '100%' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Divider pt="pt-8" />
        </div>
    );
}

export default About;
