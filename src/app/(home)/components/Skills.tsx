"use client"

import { HoverEffect } from '@/components/ui/card-hover-effect'
import React from 'react'
import { SiReact } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiPrisma } from "react-icons/si";

export default function Skills() {
    const skills = [
        {
            text: "React",
            Icon: SiReact
        },
        {
            text: "Next.js",
            Icon: SiNextdotjs
        },
        {
            text: "Tailwind",
            Icon: SiTailwindcss
        },
        {
            text: "Javascript",
            Icon: SiJavascript
        },
        {
            text: "Typescript",
            Icon: SiTypescript
        },
        {
            text: "Node",
            Icon: SiNodedotjs
        },
        {
            text: "Express",
            Icon: SiExpress
        },
        {
            text: "Prisma",
            Icon: SiPrisma
        },
        {
            text: "MongoDB",
            Icon: SiMongodb
        },
        {
            text: "Postgresql",
            Icon: SiPostgresql
        },
    ]
    return (
        <div className='max-w-5xl mx-auto px-8'>
            <div className='flex flex-col items-center justify-center -rotate-6'>
                <h1 className='text-3xl font-bold group-hover:text-green-400 transition-all'>Skills 🔪</h1>
                <div className='w-40 h-2 bg-green-500 rounded-full'></div>
                <div className='w-40 h-2 bg-indigo-500 rounded-full translate-x-2'></div>
            </div>
            {/* hover effect */}
            <HoverEffect items={skills}/>
        </div>
    )
}
