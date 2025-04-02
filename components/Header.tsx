import Image from 'next/image'
import React from 'react'
import { BsThreeDots } from "react-icons/bs";
import logo from "../public/logo .png"

const Header = () => {
    return (
        <div className="flex lg:px-8 md:px-8 justify-between w-full flex-row bg-[#03d2ff] lg:pb-0 md:pb-15 pb-10 px-4">
            <div className="flex flex-col py-4">
                <button className="lg:text-3xl md:text-3xl text-2xl hover:cursor-pointer mb-2 text-black">
                    <BsThreeDots />
                </button>
                <button className="bg-yellow-400 text-black font-bold  rounded-sm shadow-md hover:bg-yellow-500 lg:text-[20px] hover:cursor-pointer lg:px-6 lg:py-3 md:px-4 md:py-1.5 md:text-[16px] px-3 py-1 text-[13px]">
                    Donate
                </button>
            </div>
            <Image
                src={logo}
                alt="Animals With Humanity"
                className="lg:h-20 lg:w-50 md:h-15 md:w-35 h-13 w-34" // Added base size
                priority
            />
        </div>
    )
}

export default Header