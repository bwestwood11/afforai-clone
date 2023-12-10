import Image from "next/image";
import React from "react";

const FeatureSection2 = () => {
  return (
    <div className="max-w-[1500px] my-[160px] mx-auto flex justify-center">
      <div className="flex flex-col sm:items-center items-start gap-6 px-4 sm:px-0 max-w-7xl">
        <p className="py-1.5 px-4 rounded-lg border-2 border-[#8036FF] text-[#8036FF] text-sm">
          10x your productivity
        </p>
        <h3 className="max-w-xl text-4xl leading-tight text-[#222222] sm:text-center font-semibold">
          Save yourself from stress & streamline your workflow
        </h3>
        <p className="max-w-lg text-base font-normal text-slate-600 sm:text-center">
          The average worker spends 9 hours per week looking through & gathering
          information from thick stacks of documents. With Afforai, you can save
          yourself 8 hours per week (plus a lot of headaches).
        </p>
        <div className="max-w-[1440px] mx-auto sm:block hidden">
          <Image
            src="/laptop-landing-5.png"
            alt="laptop"
            width={1040}
            height={800}
            className="w-full"
          />
        </div>
        <div className="block sm:hidden w-full h-full">
          <Image
            src="/mobile-landing-5.png"
            alt="laptop"
            width={1040}
            height={800}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureSection2;
