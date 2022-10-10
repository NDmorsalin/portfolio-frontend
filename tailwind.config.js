/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const labelGroup = require('tailwindcss-labeled-groups')


module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    
  variants: {
  },
    theme: {
        extend: {
            keyframes: {
                sticky: {
                    '0%': { opacity: '0', transform: 'translate3d(0,-100%,0)' },
                    '100%': { opacity: '1', transform: 'translateZ(0)' },
                },
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
            },
            animation: {
                sticky: 'sticky 0.5s ease-in-out',
                wiggle: 'wiggle 1s ease-in-out infinite',
            },
        },
        fontFamily: {
            sans: ['Roboto'],
            roboto: ['Roboto', 'sans-serif'],
        },
    },
    plugins: [
        labelGroup(['projectCard', 'card-header' ]),
        plugin(({ matchUtilities,addBase, addComponents, addUtilities, theme }) => {
            matchUtilities(
                {
                  nd: (value) => ({
                    tabSize: value
                  }),
                },
                { values: theme('myName') }
              )

            addUtilities({
                '.preserve-3d':{
                    transformStyle: 'preserve-3d'
                },
                
                '.-rotate-y-135':{
                    transform: 'rotateY(-135deg)'
                },
                '.-rotate-x-85':{
                    transform: 'rotateX(85deg) perspective(2000px)'
                },
                
                '.perspective-none':{
                    transform:'perspective(none)'
                },
                
                '.perspective-1':{
                    transform:'perspective(100px)'
                },
                
                '.perspective-2':{
                    transform:'perspective(200px)'
                },
                '.perspective-2k':{
                    transform:'perspective(2000px)'
                },
                
                '.perspective-3':{
                    transform:'perspective(300px)'
                },
                
                '.perspective-4':{
                    transform:'perspective(400px)'
                },
                
                '.perspective-5':{
                    transform:'perspective(500px)'
                },
                
                '.perspective-6':{
                    transform:'perspective(600px)'
                },
                
                '.perspective-7':{
                    transform:'perspective(700px)'
                },
                
                '.perspective-8':{
                    transform:'perspective(800px)'
                },
                
                '.perspective-9':{
                    transform:'perspective(900px)'
                },
                
                '.perspective-10':{
                    transform:'perspective(1000px)'
                },
                
                '.perspective-25vw':{
                    transform:'perspective(25vw)'
                },
                
                '.perspective-50vw':{
                    transform:'perspective(50vw)'
                },
                
                '.perspective-75vw':{
                    transform:'perspective(75vw)'
                },
                
                '.perspective-100vw':{
                    transform:'perspective(100vw)'
                }
            });
        }),
    ],
};
