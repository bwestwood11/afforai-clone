import Image from 'next/image'
import React from 'react'

const FeatureSection8 = () => {
  return (
    <div className='w-full my-[160px] flex flex-col gap-10 items-center justify-center'>
        <div className="flex flex-col px-4 sm:px-0 items-center gap-6 max-w-7xl mx-auto">
        <p className="py-1.5 px-4 rounded-lg border-2 border-[#8036FF] text-[#8036FF] text-sm">
          Seamless Integrations - Coming Soon
        </p>
        <h3 className="max-w-xl text-4xl leading-tight text-[#222222] text-center font-semibold">
        Upload Files directly from Google Drive, One Drive & Dropbox
        </h3>
        <p className="max-w-2xl text-base font-normal text-slate-600 text-center">
        Afforai allows you to upload files directly from Google Drive, One Drive & Dropbox, meaning your experience will be smooth sailing regardless of your preferred
        </p>
        </div>
        <div>
            <Image
            src='/laptop-landing-15.png'
            alt='laptop'
            width={1040}
            height={800}
            className="w-3/4 mx-auto"
            />
        </div>
    </div>
  )
}

export default FeatureSection8