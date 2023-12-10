import Image from "next/image";
import styles from "./styles.module.css";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="py-4 max-w-[1500px] mx-auto">
      <div className="flex flex-col gap-[100px] relative overflow-hidden">
        <div className="flex flex-col items-center gap-8 z-[2] px-2">
          <div
            className={`inline-flex items-center p-2 rounded-xl border-2 border-[#333333] ${styles.yellow} gap-[6px] backdrop-blur-xl text-sm font-semibold`}
          >
            <Image src="/appsumo.png" alt="logo" width={20} height={26} />
            <p>Now on AppSumo</p>
            <button
              className={`py-1.5 pr-0.5 pl-1.5 border-[#333333] border gap-[2px] rounded-md flex items-center justify-center ${styles.transparent}`}
            >
              Get Lifetime Deal
              <AiOutlineRight className="text-[#333333] text-sm" />
            </button>
          </div>
          <h1 className="font-semibold sm:text-5xl text-[42px] leading-tight sm:max-w-[659px] sm:text-center text-left">
             Your second brain <br className="block sm:hidden" /> for maximizing productivity
          </h1>
          <p className="text-base leading-normal sm:text-center text-[#525252] max-w-[671px]">
          Afforai is an AI chatbot that searches, summarizes, and translates info from multiple sources to produce trustworthy research. Feed lengthy research documents to stacks of dry compliance requirements and extract the key findings you need.
          </p>
          <div className="flex justify-between w-[816px] text-sm text-[#525252]">
              <div className="flex items-center py-1 px-1.5 gap-1 rounded-md border border-[#E6E6E6] bg-[#FAFAFA]">
              <AiOutlineCheck />
              <p>Summarize Key Findings</p>
              </div>
              <div className="flex items-center py-1 px-1.5 gap-1 rounded-md border border-[#E6E6E6] bg-[#FAFAFA]">
              <AiOutlineCheck />
              <p>Compare Between Documents</p>
              </div>
              <div className="flex items-center py-1 px-1.5 gap-1 rounded-md border border-[#E6E6E6] bg-[#FAFAFA]">
              <AiOutlineCheck />
              <p>Search For Answers</p>
              </div>
              <div className="flex items-center py-1 px-1.5 gap-1 rounded-md border border-[#E6E6E6] bg-[#FAFAFA]">
              <AiOutlineCheck />
              <p>Ask in Any Language</p>
              </div>
          </div>
          <div className="gap-6 hidden sm:flex sm:flex-row sm:flex-shrink justify-center">
            <button className={`text-base py-1.5 px-7 rounded-xl text-white ${styles.button}`}>Try for free</button>
            <button className='bg-[#f5f5f5] border-[#e6e6e6] border text-[#525252] py-1.5 px-7 rounded-xl'>View pricing</button>
        </div>
          <div className="gap-6 sm:hidden flex flex-col justify-center w-full px-6">
            <button className={`text-base py-1.5 px-7 rounded-xl text-white ${styles.button}`}>Get Started</button>
            <button className='bg-[#f5f5f5] border-[#e6e6e6] border text-[#525252] py-1.5 px-7 rounded-xl'>View pricing</button>
        </div>
        </div>
        <div className="z-[2] mx-[72px] sm:block hidden">
          <Image 
          src='/laptop-landing-1.png'
            alt='laptop'
            width={1040}
            height={800}
            className="w-full"
            />
        </div>
        <div className="absolute z-[1] bottom-[280px] w-full rounded-3xl sm:block hidden overflow-hidden">
          <Image 
          src='/laptop-landing-3.png'
            alt='laptop'
            width={1920}
            height={1080}
            className="w-full"
            />
        </div>
      </div>
    </div>
  );
};

export default Hero;
