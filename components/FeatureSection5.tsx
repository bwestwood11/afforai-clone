import Image from "next/image";
import styles from "./styles.module.css";
import React from "react";

const FeatureSection5 = () => {
  return (
    <div className="my-[220px] mx-auto max-w-7xl">
      <div className="flex sm:flex-row flex-col-reverse px-6 sm:px-0">
        <div className="basis-1/2 px-8 mr-10">
          <Image
            src="/laptop-landing-12.png"
            alt="laptop"
            width={1040}
            height={800}
            className="w-full"
          />
        </div>
        <div className="basis-1/2 flex flex-col justify-center items-start gap-6 px-3">
          <p className="py-1.5 px-4 rounded-lg border-2 border-[#8036FF] text-[#8036FF] text-sm max-w-max text-left">
          Different Modes Available
          </p>
          <h3 className="max-w-xl text-4xl leading-tight text-[#222222] text-left font-semibold">
          Customize your assistant with a range of different modes
          </h3>
          <p className="text-base font-normal text-slate-600">
          Further power your questions with additional modes. Afforai allows you to switch between three different modes, each which have unique ways of utilising our AI tools to answer your question(s).
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
               <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 5.75C20.586 5.75 20.25 6.086 20.25 6.5V9.99805L15.608 6.33203C14.793 5.68903 13.709 5.57097 12.774 6.02197C11.834 6.47797 11.25 7.41289 11.25 8.46289V9.99707L6.60803 6.33105C5.79303 5.68805 4.70905 5.57 3.77405 6.021C2.83405 6.477 2.25 7.41191 2.25 8.46191V16.5349C2.25 17.5849 2.83405 18.5201 3.77405 18.9761C4.15005 19.1581 4.55 19.2471 4.948 19.2471C5.538 19.2471 6.12103 19.05 6.60803 18.665L11.25 14.999V16.5339C11.25 17.5839 11.834 18.5191 12.774 18.9751C13.15 19.1571 13.55 19.2461 13.948 19.2461C14.538 19.2461 15.121 19.0491 15.608 18.6641L20.25 14.998V18.5C20.25 18.914 20.586 19.25 21 19.25C21.414 19.25 21.75 18.914 21.75 18.5V6.5C21.75 6.086 21.414 5.75 21 5.75ZM10.79 13.4541L5.67896 17.491C5.31396 17.78 4.84795 17.8309 4.42896 17.6289C4.00396 17.4229 3.75 17.0151 3.75 16.5381V8.46509C3.75 7.98709 4.00396 7.58002 4.42896 7.37402C4.59795 7.29202 4.77495 7.25195 4.94995 7.25195C5.20795 7.25195 5.46196 7.33999 5.67896 7.51099L10.79 11.5471C11.082 11.7781 11.25 12.126 11.25 12.501C11.25 12.876 11.082 13.2231 10.79 13.4541ZM19.79 13.4541L14.679 17.491C14.314 17.78 13.848 17.8309 13.429 17.6289C13.004 17.4229 12.75 17.0151 12.75 16.5381V8.46509C12.75 7.98709 13.004 7.58002 13.429 7.37402C13.598 7.29202 13.775 7.25195 13.95 7.25195C14.208 7.25195 14.462 7.33999 14.679 7.51099L19.79 11.5471C20.082 11.7781 20.25 12.126 20.25 12.501C20.25 12.876 20.082 13.2231 19.79 13.4541Z" fill="#3A0299"/>
</svg> 
<p className="text-[#3A0299] font-medium text-base">Fast Mode (default)</p>
<div className="flex items-center py-1 px-2 rounded-3xl bg-[#EFE6FF] text-[#6004FF]">
                <p className="text-xs font-medium">1 credit</p>
              </div>
            </div>
           <p className="text-sm text-[#260266]">Quickly ask a question and receive an answer from the AI. This mode is most suited for applications that require only a small part of the documents to be scanned (ex. FAQ Chatbot, Search).</p>

          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 11.25C11.586 11.25 11.25 10.914 11.25 10.5V3.5C11.25 3.086 11.586 2.75 12 2.75C12.414 2.75 12.75 3.086 12.75 3.5V10.5C12.75 10.914 12.414 11.25 12 11.25ZM20.75 13.5C20.75 10.395 19.074 7.4909 16.377 5.9209C16.021 5.7139 15.5611 5.83489 15.3521 6.19189C15.1441 6.54989 15.265 7.00904 15.623 7.21704C17.86 8.51804 19.25 10.925 19.25 13.499C19.25 17.497 15.998 20.749 12 20.749C8.002 20.749 4.75 17.497 4.75 13.499C4.75 10.926 6.13995 8.51904 8.37695 7.21704C8.73495 7.00904 8.85595 6.54989 8.64795 6.19189C8.43995 5.83389 7.98105 5.7129 7.62305 5.9209C4.92605 7.4899 3.25 10.394 3.25 13.5C3.25 18.325 7.175 22.25 12 22.25C16.825 22.25 20.75 18.325 20.75 13.5Z" fill="#3A0299"/>
</svg>
<p className="text-[#3A0299] font-medium text-base">Powerful Mode</p>
<div className="flex items-center py-1 px-2 rounded-3xl bg-[#EFE6FF] text-[#6004FF]">
                <p className="text-xs font-medium">4 credits</p>
              </div>
            </div>
           <p className="text-sm text-[#260266]">Get answers of extra high quality from the AI. This mode is most suited for applications that require inferences as well as the full documents to be scanned (ex. Textual Data Analysis, Search with Inference, Report Generation).</p>

          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.53 20.97L17.689 17.129C18.973 15.606 19.75 13.643 19.75 11.5C19.75 6.675 15.825 2.75 11 2.75C6.175 2.75 2.25 6.675 2.25 11.5C2.25 16.325 6.175 20.25 11 20.25C13.143 20.25 15.106 19.473 16.629 18.189L20.47 22.03C20.616 22.176 20.808 22.25 21 22.25C21.192 22.25 21.384 22.177 21.53 22.03C21.823 21.738 21.823 21.263 21.53 20.97ZM3.75 11.5C3.75 7.502 7.002 4.25 11 4.25C14.998 4.25 18.25 7.502 18.25 11.5C18.25 15.498 14.998 18.75 11 18.75C7.002 18.75 3.75 15.498 3.75 11.5ZM14 10.75H11.75V8.5C11.75 8.086 11.414 7.75 11 7.75C10.586 7.75 10.25 8.086 10.25 8.5V10.75H8C7.586 10.75 7.25 11.086 7.25 11.5C7.25 11.914 7.586 12.25 8 12.25H10.25V14.5C10.25 14.914 10.586 15.25 11 15.25C11.414 15.25 11.75 14.914 11.75 14.5V12.25H14C14.414 12.25 14.75 11.914 14.75 11.5C14.75 11.086 14.414 10.75 14 10.75Z" fill="#3A0299"/>
</svg>
<p className="text-[#3A0299] font-medium text-base">Google Mode</p>
<div className="flex items-center py-1 px-2 rounded-3xl bg-[#EFE6FF] text-[#6004FF]">
                <p className="text-xs font-medium">5 credits</p>
              </div>
            </div>
           <p className="text-sm text-[#260266]">Supplement your answers with the top 3 results from Google Search. This adds extra reliability to back up our already incredibly accurate answers.</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection5;
