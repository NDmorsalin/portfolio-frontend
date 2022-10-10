/* eslint-disable no-underscore-dangle */
import { Player } from '@lottiefiles/react-lottie-player';
import ProgressBar from '@ramonak/react-progress-bar';
import React from 'react';
import SkillImg from '../../asset/skills.json';
import Circle from '../Circle';
import Divider from '../Layout/Divider';

function Skills({ admin }) {
    const skills = admin?.skills;

    return (
        <div className="dark:bg-slate-700 bg-slate-300 py-8 overflow-hidden relative z-10">
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

                <div className="z-30">
                    <h2 className="text-center md:text-left md:text-5xl text-3xl font-bold text-sky-600 pb-6 z-30">
                        Skills
                    </h2>
                    <div className="flex flex-col-reverse md:flex-row">
                        <div className="w-full md:w-7/12 md:pr-4 ">
                            {skills &&
                                skills.map((skill) => (
                                    <div className="my-4" key={skill._id}>
                                        <h1 className="text-2xl">{skill.skill}</h1>
                                        <ProgressBar
                                            animateOnRender
                                            completed={skill.progress}
                                            baseBgColor="#0f0cc7"
                                            bgColor="#0bcae9"
                                        />
                                    </div>
                                ))}
                        </div>
                        <div className="w-full md:w-5/12 pl-4">
                            <div className="w-3/5 md:w-full mx-auto">
                                <Player
                                    autoplay
                                    loop
                                    src={SkillImg}
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

export default Skills;
