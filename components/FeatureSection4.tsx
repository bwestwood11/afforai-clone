import Image from "next/image";
import styles from './styles.module.css'

const FeatureSection4 = () => {
    return (
      <div className="my-[220px] mx-auto max-w-7xl">
        <div className="flex sm:flex-row flex-col gap-8 sm:gap-0">
          <div className="basis-1/2 flex flex-col justify-center items-start gap-6 px-3">
            <p className="py-1.5 px-4 rounded-lg border-2 border-[#8036FF] text-[#8036FF] text-sm max-w-max text-left">
              Most versatile
            </p>
            <h3 className="max-w-xl text-4xl leading-tight text-[#222222] text-left font-semibold">
            Create multiple chatbots for different purposes
            </h3>
            <p className="text-base font-normal text-slate-600">Legal documents? Summarising a book? Extracting data from a website? We allow you to create multiple chatbots at one time, so you can use Afforai for a whole range of purposes.</p>
            <div className="flex flex-row gap-4">
                 <button className={`text-white border border-white/20 py-[5px] px-[14px] font-medium text-sm rounded-lg ${styles.button}`}>Get started</button>
            <button className="bg-[#f5f5f5] border-[#e6e6e6] border text-[#525252] py-[5px] px-[14px] font-medium text-sm rounded-lg">View Pricing</button>
            </div>
           
          </div>
          <div className="basis-1/2 px-8">
           <Image
           src='/laptop-landing-11.png'
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
  
  export default FeatureSection4;
  