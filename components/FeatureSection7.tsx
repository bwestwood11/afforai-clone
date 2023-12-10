import Image from 'next/image'
import React from 'react'

const FeatureSection7 = () => {
  return (
    <div className="my-[220px] mx-auto max-w-7xl">
    <div className="flex sm:flex-row flex-col-reverse px-4 sm:px-0 gap-10 sm:gap-0">  
    <div className="basis-1/2 w-full mr-16">
       <Image
       src='/laptop-landing-14.png'
          alt='laptop'
            width={1040}
            height={800}
            className="w-full"
            />
      </div>
      <div className="basis-1/2 flex flex-col justify-center items-start mt-[-100px] gap-6 px-3 max-w-xl">
        <p className="py-1.5 px-4 rounded-lg border-2 border-[#8036FF] text-[#8036FF] text-sm max-w-max text-left">
        Get more out of your files
        </p>
        <h3 className="max-w-md text-4xl leading-tight text-[#222222] text-left font-semibold">
        File Wizard - a game changing new feature
        </h3>
        <p className="text-base font-normal text-slate-600">Convert your files with less effort than ever. Afforai’s File Wizard feature allows you to transform your files, in limitless different ways. We can translate, summarize, or explain your upload in no time.</p> 
      </div>
    
    </div>
  </div>
  )
}

export default FeatureSection7