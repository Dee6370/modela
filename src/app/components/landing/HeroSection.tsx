'use client'
import { Button } from '@material-tailwind/react'
import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='flex flex-col gap-6 justify-center items-center py-24 w-full'>
        <h1 className="heroText text-6xl font-bold text-[rgba(30,30,30)] text-center">
            Worlds Largest Showcase Site for AI Models. Explore and Contribute to Cutting-Edge Models at <b className="font-extrabold">Modelarium</b>
        </h1>
        <div className="flex flex-col gap-1  mt-[3.5rem]">
            <p className="">Want to showcase your models?</p>
            <div className="buttons flex gap-6">
            
            <Link href="#featured"><Button size='lg' className='*:'  placeholder={undefined}>Get started</Button></Link>
            
            <Link href="#explore"><Button size='lg' className=''  placeholder={undefined}>Explore</Button></Link>
        </div>
        </div> 
        
        
    </div>
  )
}

export default HeroSection