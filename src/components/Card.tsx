import React, { PropsWithChildren } from 'react'
import grainImage from "@/assets/images/grain.jpg";
import { twMerge } from 'tailwind-merge';

export default function Card({className, children} : PropsWithChildren<{className: string}>) {
  return (
    <>
      <div
            className={twMerge("bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-10 lg:pt-16 lg:px-20 after:pointer-events-none p-6",
        className)}>
            <div className="absolute inset-0 opacity-5" style={{backgroundImage: `url(${grainImage.src})`,}}></div>
            {children}
            </div>
    </>
  )
}
