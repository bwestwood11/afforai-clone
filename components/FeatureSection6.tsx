import Image from 'next/image'
import React from 'react'
import styles from './styles.module.css'

const FeatureSection6 = () => {
  return (
    <div className="my-[220px] mx-auto max-w-7xl">
        <div className="flex sm:flex-row flex-col px-4 sm:px-0 gap-8 sm:gap-0">
          <div className="basis-1/2 flex flex-col justify-center items-start gap-6 px-3 max-w-xl">
            <p className="py-1.5 px-4 rounded-lg border-2 border-[#8036FF] text-[#8036FF] text-sm max-w-max text-left">
            Multiple Language Supported
            </p>
            <h3 className="max-w-xl text-4xl leading-tight text-[#222222] text-left font-semibold">
            Regardless of where you are from, Afforai is for you
            </h3>
            <p className="text-base font-normal text-slate-600">We support more than 100 Languages, meaning you can seamlessly use our services regardless of where you are from. Our Cross Language Querying feature also allows flawless translation of documents.</p> 
          </div>
          <div className="basis-1/2 w-full">
           <Image
           src='/laptop-landing-13.png'
              alt='laptop'
                width={1040}
                height={800}
                className="w-full"
                />
          </div>
        </div>
      </div>
  )
}

export default FeatureSection6