import React from 'react'
import Link from "next/link";

export const Hero = ({heading,message,text}) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>

        <div className='absolute right-0 left-0 top-0 bottom-0 bg-black/60 z-[2]'/>
        <div className='p-5 text-white z-[2] mt-[-10rem]'>

            <h2 className='py-5 text-2xl font-bold animate-bounce '>{heading}</h2>
            <p className='pb-5 text-xl '>{message}</p>
            <p className='py-5 text-sm'>{text}</p>

           <Link href='/contact/#contactus' ><button className='"text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"'>დაგვიკავშირდით</button></Link>
        </div>
    </div>
  )
}
