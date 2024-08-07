import { MovingBorder, MovingBorderBtn } from '@/components/ui/moving-border'
import Link from 'next/link'

const HeroSection = () => {
    return (

        <div className='min-h-[60vh] flex flex-col-reverse lg:gap-0 gap-14 lg:flex-row items-center justify-between'>
            <div className='space-y-10 text-center lg:text-left'>
                <h1 className='text-4xl lg:text-7xl font-bold'>Nice to meet you!👋 <br />
                    <span className='underline underline-offset-8 decoration-green-500'>{"I'm Sudhanshu."}</span>
                </h1>

                <p className='md:w-96 text-lg text-gray-300'>
                    {
                        "I'm Fullstack developer passinate about building a modern web application that users love"
                    }
                </p>

                <Link href={"mailto:gautamsudhanshu2911@gmail.com"} className='inline-block group'>
                    <div>

                        <h1 className='text-3xl font-bold group-hover:text-green-400 transition-all'>Contact Me 📭</h1>
                        <div className='w-40 h-2 bg-green-500 rounded-full'></div>
                        <div className='w-40 h-2 bg-indigo-500 rounded-full translate-x-2'></div>

                    </div>
                </Link>
            </div>
            <div>
                <div className='w-72 h-72 space-y-3 -rotate-[30deg] relative'>
                    <div className='flex gap-3 translate-x-8 max-md:translate-y-6'>
                        <div className='w-32 h-32 rounded-2xl bg-green-500'></div>
                        <div className='w-32 h-32  rounded-full bg-indigo-500'></div>
                    </div>
                    <div className='flex gap-3 -translate-x-8 max-md:translate-y-6'>
                        <div className='w-32 h-32 rounded-2xl bg-indigo-500'></div>
                        <div className='w-32 h-32 rounded-full bg-green-500'></div>
                    </div >
                    <div className='glow absolute top-[40%] right-1/2 -z-10' ></div>
                </div>
                <MovingBorderBtn >
                    <p>Quality Work</p>
                </MovingBorderBtn>
            
            </div>
        </div>

    )
}

export default HeroSection