import Link from 'next/link';
import React from 'react'
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";

export default function HeroNavbar() {
    const socials = [
        {
            Link: "https://www.linkedin.com/in/sudhanshu-gautam/",
            Label: "LinkedIn",
            Icon: SiLinkedin
        },
        {
            Link: "https://github.com/sudhanshugautam2911",
            Label: "Github",
            Icon: SiGithub
        },
        {
            Link: "https://leetcode.com/u/gautam2911/",
            Label: "LinkedIn",
            Icon: SiLeetcode
        },
    ]
    return (
        <nav className='py-8 flex items-center justify-between'>
            <h1 className='text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>Sudhanshu 👨‍💻</h1>
            <div className='flex gap-5'>
                {socials.map((item, index) => {
                    const Icons = item.Icon
                    return <Link key={index} target='_blank' href={item.Link} aria-label={item.Label}>
                        <Icons className='w-5 h-5 hover:scale-125 transition-all' />
                    </Link>
                })}
            </div>
        </nav>
    )
}
