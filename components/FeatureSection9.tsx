import Image from "next/image";
import React from "react";

const FeatureSection9 = () => {
  return (
    <div className="w-full my-[160px] flex flex-col gap-10 items-center justify-center">
      <div className="flex flex-col px-4 sm:px-0 items-center gap-6 max-w-7xl mx-auto">
        <h3 className="max-w-3xl text-4xl leading-tight text-[#222222] text-center font-semibold">
          Unquestionable accuracy & reliability
        </h3>
        <p className="max-w-2xl text-base font-normal text-slate-600 text-center">
          We pride ourselves on the quality of our chatbot’s responses, and go
          the extra mile to ensure the accuracy & reliability of our answers.
        </p>
      </div>
      <div className="flex sm:flex-row flex-col px-3 sm:px-0 gap-6 max-w-[1300px] mx-auto">
        <div className="basis-1/3 border-[#E6E6E6] border rounded-lg overflow-hidden flex flex-col">
          {/* Image container */}
          <div className="bg-[#F5F5F5] border-b border-[#E6E6E6]">
            <Image
              src="/laptop-landing-17.png"
              alt="laptop"
              width={1040}
              height={800}
              className="w-full"
            />
          </div>
          {/* Text container */}
          <div className="pb-6 pt-2 px-4 flex flex-grow flex-col">
            <div className="inline-flex items-center gap-2">
              <h4 className="text-base text-[#222222] font-medium">
              Trusted by users all over the World
              </h4>
            </div>{" "}
            <p className="text-xs text-slate-500 leading-4 mt-2">
            Afforai is used all around the World, saving thousands of people time and money with our speed & accuracy.
            </p>
          </div>
        </div>
        <div className="basis-1/3 border-[#E6E6E6] border rounded-lg overflow-hidden flex flex-col">
          {/* Image container */}
          <div className="bg-[#F5F5F5] border-b border-[#E6E6E6]">
            <Image
              src="/laptop-landing-18.png"
              alt="laptop"
              width={1040}
              height={800}
              className="w-full"
            />
          </div>
          {/* Text container */}
          <div className="pb-6 pt-2 px-4 flex flex-grow flex-col">
            <div className="inline-flex items-center gap-2">
              <h4 className="text-base text-[#222222] font-medium">
              Information filtering
              </h4>
            </div>{" "}
            <p className="text-xs text-slate-500 leading-4 mt-2">
            Afforai gives you the highest quality answers, and filters out any irrelevant information.
            </p>
          </div>
        </div>
        <div className="basis-1/3 border-[#E6E6E6] border rounded-lg overflow-hidden flex flex-col">
          {/* Image container */}
          <div className="bg-[#F5F5F5] border-b border-[#E6E6E6]">
            <Image
              src="/laptop-landing-19.png"
              alt="laptop"
              width={1040}
              height={800}
              className="w-full"
            />
          </div>
          {/* Text container */}
          <div className="pb-6 pt-2 px-4 flex flex-grow flex-col">
            <div className="inline-flex items-center gap-2">
              <h4 className="text-base text-[#222222] font-medium">
              Built in Comprehension Model
              </h4>
            </div>{" "}
            <p className="text-xs text-slate-500 leading-4 mt-2">
            Our powerful comprehension model increases the power of our data retrieval.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection9;
