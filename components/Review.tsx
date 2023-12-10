import Image from "next/image";
import styles from "./styles.module.css";

type ReviewProps = {
  text: string;
};

const Review = ({ text }: ReviewProps) => {
  return (
    <div
      className={`p-8 mx-2 bg-white sm:w-[660px] h-[266px] shadow-md rounded-md border border-[#E6E6E6] whitespace-normal ${styles.logoslider}`}
    >
      <p>{text}</p>
      <div className="border-t border-[#E6E6E6] mt-[15%]">
        <div className="mt-5 flex justify-between items-center">
          <div className="flex flex-row items-center gap-5">
            <Image
              src="/0-1.png"
              alt="logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <p className="text-slate-500 text-sm">Jay, Founder of FLYTSudios</p>
          </div>
          <div className="border border-[#FF3C05] bg-[#F6E8E5] px-2 inline-flex py-1 rounded-lg gap-3">
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="product hunt">
                <path
                  id="Vector"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 8.5C16 12.9184 12.4184 16.5 8 16.5C3.5816 16.5 0 12.9184 0 8.5C0 4.0816 3.5816 0.5 8 0.5C12.4184 0.5 16 4.0816 16 8.5Z"
                  fill="#DA552F"
                />
                <path
                  id="Vector_2"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.067 8.5H6.8002V6.1H9.067C9.38525 6.1 9.6905 6.22645 9.91555 6.45145C10.1405 6.6765 10.267 6.98175 10.267 7.3C10.267 7.61825 10.1405 7.9235 9.91555 8.14855C9.6905 8.37355 9.38525 8.5 9.067 8.5ZM9.067 4.5H5.2002V12.5H6.8002V10.1H9.067C9.8096 10.1 10.5218 9.805 11.0469 9.2799C11.572 8.7548 11.867 8.0426 11.867 7.3C11.867 6.5574 11.572 5.8452 11.0469 5.3201C10.5218 4.795 9.8096 4.5 9.067 4.5Z"
                  fill="white"
                />
              </g>
            </svg>
            <p className="text-[#FF3C05] text-xs font-medium">
              View on Product Hunt
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
