/* eslint-disable no-underscore-dangle */
import React from 'react';
import Button from '../Button/ButtonLink';
import Circle from '../Circle';
import Divider from '../Layout/Divider';
import ProjectCard from './ProjectCard';

function Projects({ admin }) {
    return (
        <div
            id="projects"
            className=" dark:bg-slate-700 bg-slate-300 py-8 overflow-hidden relative z-10">
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

                <div className="relative z-30">
                    <h2 className="text-center md:text-left md:text-5xl text-3xl font-bold text-sky-600 pb-6 z-30">
                        Projects
                    </h2>
                    <div className=" flex flex-col items-center sm:flex-row gap-8 justify-center flex-wrap w-full">
                        {admin.myProjects &&
                            admin.myProjects.map((project) => (
                                <ProjectCard key={project._id} project={project} />
                            ))}
                    </div>
                </div>
                <div className="flex justify-center pt-8">
                    <Button path="/adminProjects" text="View all projects" />
                </div>
            </div>
            <Divider pt="pt-8" />
        </div>
    );
}

export default Projects;
