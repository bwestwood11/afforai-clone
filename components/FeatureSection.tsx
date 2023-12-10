import Image from "next/image"
import { AiOutlineCheckCircle } from "react-icons/ai";

const FeatureSection = () => {
  return (
    <div className="max-w-[1500px] sm:pt-[158px] mb-[160px] flex sm:flex-row flex-col gap-8 mx-auto">
        <div className="basis-1/2 sm:ml-[8.33%] px-4 sm:mt-32">
             <h3 className="font-semibold sm:text-4xl text-3xl leading-snug mb-4">Say goodbye to long, tiresome documents</h3>
             <p className="font-normal text-base leading-tight text-[#525252] max-w-xl mb-6">Afforai seamlessly translates documents, files, spreadsheets & websites, filtering out what you don’t need & answering your specific questions within seconds.</p>
             <div className="flex flex-col gap-4">
               <div className="flex items-center text-[#03CC3B] font-medium gap-4">
               <AiOutlineCheckCircle size={24} />
                <p>A whip smart research assistant</p>
               </div>
               <div className="flex items-center text-[#03CC3B] font-medium gap-4">
               <AiOutlineCheckCircle size={24} />
                <p>We speak every language</p>
               </div>
               <div className="flex items-center text-[#03CC3B] font-medium gap-4">
               <AiOutlineCheckCircle size={24} />
                <p>Reliable data citation for answers</p>
               </div>
               <div className="flex items-center text-[#03CC3B] font-medium gap-4">
               <AiOutlineCheckCircle size={24} />
                <p>Fort-Knox level data security</p>
               </div>
             </div>
        </div>
        <div className="basis-1/2 mx-3">
              <Image
                src='/laptop-landing-4.png'
                alt='laptop'
                width={1040}
                height={800}
                className="w-full"
                />
        </div>
    </div>
  )
}

export default FeatureSection