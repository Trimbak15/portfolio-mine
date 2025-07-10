import React from 'react'

export default function SectionHeader({title, eyebrow, description} : {title: string, eyebrow: string, description: string}) {
  return (
    <>
      <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center lg:text-xl">
            {eyebrow}
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6 lg:text-5xl">
          {title}
        </h2>
        <p className="text-center text-white/60 md:text-xl lg:text-xl mt-2 md:mt-10 max-w-md mx-auto lg:max-w-4xl">
          {description}
        </p>
    </>
  )
}
