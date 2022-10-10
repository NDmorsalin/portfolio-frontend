/* eslint-disable prettier/prettier */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/no-this-in-sfc */
import React from 'react';
import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaStackOverflow,
    FaTwitter
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Typed from 'react-typed';

function AdminView({admin}) {
    const designation = admin?.designation;
    const socialLink = admin?.socialLink;
    return (
        <div className="">
            <div className="pt-[6.5rem] md:pt-[6rem]" />
            <div className="z-30">
                <div className="flex flex-col-reverse md:flex-row items-center gap-8">
                    <div className="md:flex-1">
                        <div className="flex flex-col gap-8">
                            <div className="z-30">
                                <h2 className="text-center md:text-left md:text-6xl text-4xl font-bold ">
                                    Nd Morsalin
                                </h2>
                                <p className="dark:text-sky-400 text-2xl text-center md:text-left  font-semibold">
                                    {designation && (
                                        <Typed
                                            strings={designation}
                                            typeSpeed={40}
                                            backSpeed={50}
                                            loop
                                        />
                                    )}
                                </p>
                            </div>
                            <p className=" leading-loose tracking-wide text-center md:text-left z-30">
                                Hello!{' '}
                                <strong className="capitalize">
                                    this is Nd {admin?.admin?.name}
                                </strong>
                                , a professional and passionate programmer in my daily life. A quick
                                learner with a self-learning attitude. I love to learn and explore
                                new technologies and am Passionate about Problem Solving.
                            </p>
                            <div className="flex gap-8  flex-col items-center md:flex-row z-30 ">
                                <button
                                    type="button"
                                    className=" w-2/3 md:w-auto duration-500 px-10 py-3  rounded-full border-2 border-slate-800 hover:border-sky-800 hover:bg-slate-800 hover:text-gray-50 dark:border-sky-300 dark:hover:border-slate-300  dark:text-gray-300 dark:hover:bg-sky-800 font-bold text-xl ">
                                    My CV
                                </button>
                                <NavLink
                                    to="/hire"
                                    type="button"
                                    className=" w-2/3 md:w-auto text-gray-300 hover:text-gray-300  text-center duration-500  px-10 py-3  rounded-full  bg-sky-800 hover:border-sky-800 hover:bg-slate-800  dark:text-gray-300 dark:hover:bg-sky-500 font-bold text-xl">
                                    Hire me
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="md:flex-1 flex justify-center pb-8 md:pb-0">
                        <div className="relative">
                            <div className="w-44 h-44 p-4 rounded-full overflow-hidden md:h-auto  md:w-auto md:rounded-none md:border-none relative z-10">
                                <div className="md:hidden absolute left-0 top-0 animate-pulse w-full h-full bg-sky-400 -z-10" />
                                <div className="md:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full  w-[98%] h-[98%]  bg-slate-800 -z-10" />
                                <img className="" src={admin?.thumpPic} alt="" />
                            </div>
                            <div className="absolute w-56 h-56 z-30 left-1/2 -translate-x-1/2 bottom-1/2 translate-y-1/2 md:bottom-10 md:translate-y-0 flex justify-center items-center">

                            <div className="absolute  rounded-full border flex justify-center items-center w-full h-full animate-[spin_8s_linear_infinite] hover:animate-none ">
                                {socialLink &&
                                    socialLink.map((link, index) => {
                                        const left = `${(
                                            42 -
                                            50 *
                                                Math.cos(
                                                    -0.5 * Math.PI -
                                                        2 *
                                                            (1 / socialLink.length) *
                                                            index *
                                                            Math.PI
                                                )
                                        ).toFixed(4)}%`;

                                        const top = `${(
                                            41 +
                                            50 *
                                                Math.sin(
                                                    -0.5 * Math.PI -
                                                        2 *
                                                            (1 / socialLink.length) *
                                                            index *
                                                            Math.PI
                                                )
                                        ).toFixed(4)}%`;

                                        return (
                                            <a
                                                href={link.socialLink}
                                                target='_about-blank'
                                                style={{
                                                    left,
                                                    top,
                                                }}
                                                className="w-10 duration-500 h-10 rounded-full absolute flex justify-center items-center bg-slate-900 text-slate-300 border-sky-400 border text-2xl animate-[spin_8s_linear_infinite] hover:bg-slate-800"
                                                key={link._id}>
                                                {link.socialName === 'facebook' && <FaFacebook />}
                                                {link.socialName === 'linkedin' && <FaLinkedin />}
                                                {link.socialName === 'twitter' && <FaTwitter />}
                                                {link.socialName === 'github' && <FaGithub />}
                                                {link.socialName === 'instagram' && <FaInstagram />}
                                                {link.socialName === 'stackoverflow' && (
                                                    <FaStackOverflow />
                                                )}
                                            </a>
                                        );
                                    })}
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminView;
