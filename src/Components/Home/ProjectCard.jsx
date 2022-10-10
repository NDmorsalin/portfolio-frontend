/* eslint-disable no-underscore-dangle */
import React from 'react';
import { FaCode, FaGithub } from 'react-icons/fa';
import Button from '../Button/ButtonLink';

function ProjectCard({ project }) {
    console.log(project);
    console.log();
    return (
        <div className="bg-slate-800  group-projectCard">
            <div className="perspective-2k relative preserve-3d duration-1000 min-h-[320px]  w-[300px] ">
                <div className="group-projectCard-hover:-rotate-x-85 transform origin-top w-full h-full min-h-[320px] relative z-30 duration-1000 rounded-lg bg-cyan-800 flex justify-center items-center">
                    {/* <Player
                        src={frontend}
                        className=""
                        style={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            left: '0',
                            top: '0',
                            backgroundColor: 'rgb(30 41 59 / var(--tw-text-opacity))',
                        }}
                    /> */}
                    {project.imageOrVideoLink.includes('youtube') ? (
                        <div className=" aspect-video">
                            <iframe
                                src="https://www.youtube.com/embed/xNRJwmlRBNU"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            />
                        </div>
                    ) : (
                        <img src={project.imageOrVideoLink} alt="imageOrVideoLink" />
                    )}
                </div>
                <div className="group-projectCard-hover:scale-100 scale-75 delay-500 duration-1000 absolute top-0 left-0 p-8 bg-slate-800 w-full h-full overflow-hidden ">
                    <h1 className="text-2xl mb-2 text-center font-bold "> {project.name} </h1>
                    <p className="text-slate-400">{project.extraNote}</p>
                </div>
            </div>
            <div className="px-8 py-8 relative overflow-hidden">
                <a
                    href={project.demoLink}
                    className="w-8 h-8 border rounded-full flex items-center justify-center absolute left-7 top-1/2 -translate-y-1/2 ">
                    <FaCode />
                </a>
                <div className="flex items-center justify-center gap-3 absolute -right-24 top-1/2 -translate-y-1/2 group-projectCard-hover:right-1/4 duration-700 delay-150">
                    <a
                        href={project.gitHubLink}
                        className="w-8 h-8 border rounded-full flex items-center justify-center">
                        <FaGithub />
                    </a>
                    <div className="invisible group-projectCard-hover:visible">
                        <Button path={`/adminProject/${project._id}`} text="View details" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
