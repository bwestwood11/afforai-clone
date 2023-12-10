import Image from "next/image";

const FeatureSection3 = () => {
  return (
    <div className="w-full my-[160px] flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-6 max-w-7xl mx-auto">
        <p className="py-1.5 px-4 rounded-lg border-2 border-[#8036FF] text-[#8036FF] text-sm">
          Why choose us?
        </p>
        <h3 className="max-w-xl text-4xl leading-tight text-[#222222] text-center font-semibold">
          Built for the user
        </h3>
        <p className="max-w-sm text-base font-normal text-slate-600 text-center">
          Afforai is where exceptional customer focus meets exceptional
          technology.
        </p>
      </div>
      <div className="max-w-7xl mx-auto w-full flex sm:flex-row flex-col justify-center gap-4 mt-16">
        {/* Image and Text Section */}
        <div className="basis-1/3 border-[#E6E6E6] border rounded-lg overflow-hidden flex flex-col">
          {/* Image container */}
          <div className="bg-[#F5F5F5] border-b border-[#E6E6E6]">
            <Image
              src="/laptop-landing-6.png"
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
                Cross Language Querying
              </h4>
              <div className="flex items-center py-1 px-2 rounded-3xl bg-[#EFE6FF] text-[#6004FF]">
                <p className="text-xs font-medium">NEW</p>
              </div>
            </div>{" "}
            <p className="text-xs text-slate-500 leading-4 mt-2">
              Afforai is able to translate your documents to more than 100
              languages, meaning wherever you’re from, you can be assured we can
              help.
            </p>
          </div>
        </div>

        {/* Other Section with 2/3 Basis */}
        <div className="basis-2/3 border-[#E6E6E6] border rounded-lg overflow-hidden flex flex-col">
        <div className="bg-[#F5F5F5] border-b border-[#E6E6E6]">
            <Image
              src="/laptop-landing-7.png"
              alt="laptop"
              width={1040}
              height={800}
              className="w-full"
            />
          </div>
          <div className="pb-6 pt-2 px-4 flex flex-grow flex-col">
            <div className="inline-flex items-center gap-2">
              <h4 className="text-base text-[#222222] font-medium">
              Multiple file types supported
              </h4>
            </div>{" "}
            <p className="text-xs text-slate-500 leading-4 mt-2">
            Afforai can extract data from a multitude of formats, including; PDF, URL, DOCX, PPTX & XLSX, as well as your own text & links from Websites. The possibilities are limitless!
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto w-full flex sm:flex-row flex-col justify-center gap-4 mt-4">
      <div className="basis-2/3 border-[#E6E6E6] border rounded-lg overflow-hidden flex flex-col gap-5">
      <div className="flex-1 border-[#E6E6E6] border rounded-lg overflow-hidden flex flex-col">
      <div className="bg-[#F5F5F5] border-b border-[#E6E6E6]">
            <Image
              src="/laptop-landing-8.png"
              alt="laptop"
              width={1040}
              height={800}
              className="w-full"
            />
          </div>
          <div className="pb-6 pt-2 px-4 flex flex-grow flex-col">
            <div className="inline-flex items-center gap-2">
              <h4 className="text-base text-[#222222] font-medium">
              Valuable Data Citation
              </h4>
              <div className="flex items-center py-1 px-2 rounded-3xl bg-[#EFE6FF] text-[#6004FF]">
                <p className="text-xs font-medium">NEW</p>
              </div>
            </div>{" "}
            <p className="text-xs text-slate-500 leading-4 mt-2">
            Afforai is able to show exactly where your data has been extracted from & highlight it for you, so you never loose your time validating information again.
            </p>
          </div>
          </div>

          {/* Second div in left section */}
          <div className="flex-1 border-[#E6E6E6] border rounded-lg overflow-hidden flex flex-col">
          <div className="bg-[#F5F5F5] border-b border-[#E6E6E6]">
            <Image
              src="/laptop-landing-10.png"
              alt="laptop"
              width={1040}
              height={800}
              className="w-full"
            />
          </div>
          <div className="pb-6 pt-2 px-4 flex flex-grow flex-col">
            <div className="inline-flex items-center gap-2">
              <h4 className="text-base text-[#222222] font-medium">
              Built in Document Viewer
              </h4>
            </div>{" "}
            <p className="text-xs text-slate-500 leading-4 mt-2">
            Never Switch tabs again. Afforai’s document viewer means that you can have your uploaded files right next to your chatbot, giving you the ability to search the file, and refer to it for data citations.
            </p>
          </div>
          </div>
        </div>
         {/* Right Section with 1/3 basis */}
         <div className="basis-1/3 border-[#E6E6E6] border rounded-lg overflow-hidden flex flex-col">
          {/* Image and Text Section */}
          <div className="bg-[#F5F5F5] border-b border-[#E6E6E6] flex-grow sm:h-[70%]" >
            <Image
              src="/laptop-landing-9.png"
              alt="laptop"
              width={1040}
              layout="full"
              objectFit="cover"
              height={800}
              className="w-full h-full"
            />
          </div>
          <div className="pb-6 pt-2 px-4 flex flex-grow flex-col">
          <div className="inline-flex items-center gap-2">
              <h4 className="text-base text-[#222222] font-medium">
              Unbreakable Security
              </h4>
            </div>{" "}
            <p className="text-xs text-slate-500 leading-4 mt-2">
            Afforai uses Azure Server & Azure OpenAI API. In other words, your data is more than safe with us. <span className="text-blue-500">Learn more.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection3;
