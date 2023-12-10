import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="w-full sm:py-6 my-3 sm:px-12 sticky top-0 z-[50]">
      <div className="w-full md:mx-auto py-3 md:px-6 border-b border-[#D1D5DB] bg-[#FAFAFA]/50 backdrop-blur-lg md:max-w-[1264px] md:rounded-2xl md:border">
        <div className="justify-between flex flex-row w-full items-center">
          <div className="flex-1 flex justify-start items-center flex-grow pl-4 sm:pl-0">
            <Link
              href="/"
              className="flex flex-shrink gap-2 justify-start items-center"
            >
              <Image
                src="/logo-new-violet.png"
                alt="logo"
                width={24}
                height={24}
              />
              <h2 className="text-[#111111] text-lg font-medium ">Afforai</h2>
            </Link>
          </div>
          <div className="items-center gap-7 justify-center md:flex flex-1 hidden">
            <Link href="/about" className="text-[#111111] text-sm font-medium">
              Affiliate
            </Link>
            <Link href="/about" className="text-[#111111] text-sm font-medium">
              Pricing
            </Link>
            <Link href="/about" className="text-[#111111] text-sm font-medium">
              Testimonials
            </Link>
            <Link href="/about" className="text-[#111111] text-sm font-medium">
              Help Center
            </Link>
          </div>
          <div className="flex flex-1 justify-end items-center gap-1.5">
            <button className="bg-[#f5f5f5] border-[#e6e6e6] border text-[#525252] sm:py-[5px] sm:px-[14px] whitespace-nowrap p-1.5 font-medium sm:text-sm text-xs rounded-lg">
              Log In
            </button>
            <button
              className={`text-white border border-white/20 sm:py-[5px] sm:px-[14px] p-1.5 font-medium text-sm rounded-lg whitespace-nowrap ${styles.button}`}
            >
              Try for free
            </button>
            <div className="border border-[#e6e6e6] p-2 block rounded-lg sm:hidden mr-4">
              <AiOutlineMenu />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
