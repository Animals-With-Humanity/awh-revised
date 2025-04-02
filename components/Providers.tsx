import React from 'react';
import Image from 'next/image';
import whishlist from "../public/wishlist.png";
import doner from "../public/monthly doner.png"
import joinus from "../public/joinus.png"
import shopus from "../public/shopremovebg.png"
import joinuslogo from "../public/joinus_logo_remover.png"
import monthly from "../public/monthly_logoremovebg.png"


const Providers = () => {
    return (
        <div className="flex lg:flex-row md:flex-row flex-col px-[5rem] justify-evenly lg:py-[5rem] py-[2rem] lg:gap-y-0 gap-y-[4rem]">
            <div className="lg:w-1/4 md:w-1/2 relative w-full">
                <Image
                    src={whishlist}
                    alt="whishlist"
                    className="w-full h-auto"
                />
                <div className="absolute top-0 left-0 p-4">
                    <div className="px-2 py-2 flex flex-row items-center">
                        <span className="text-white font-extrabold lg:text-[40px] text-[28px] uppercase tracking-wide leading-9">
                            SHOP <br />FOR <br />US
                        </span>
                        <Image
                            src={shopus}
                            alt='shop'
                            className='w-24 mt-15'
                        />
                    </div>
                </div>
                <div className="absolute top-[53%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button className="lg:text-[30px] text-[20px] bg-white lg:px-[5rem] px-[3rem] lg:py-3 py-1 rounded-3xl shadow-lg font-bold text-[#03d2ff] tracking-wide hover:cursor-pointer">
                        Wishlist
                    </button>
                </div>
                <div className="absolute top-[60%] left-0 p-4">
                    <div className="lg:px-2 lg:py-2 flex flex-col items-start">
                        <span className="text-white font-extrabold lg:text-[22px] text-[16px] uppercase tracking-wide lg:leading-9 ">
                            IT CAN REDUCE OUR EXPENSES UPTO
                        </span>
                        <span className='text-yellow-300 lg:text-6xl text-4xl font-extrabold mt-5'>20%</span>
                    </div>
                </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 relative flex">
                <Image
                    src={doner}
                    alt="doner"
                    className="w-full h-auto"
                />
                {/* Centered Logo */}
                <div className="absolute top-[26%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Image
                        src={monthly}
                        alt='monthly'
                        className='w-full'
                    />
                    <span className="text-white font-extrabold lg:text-[38px] text-[26px] text-center leading-6">
                        CONTRIBUTE <br /> MONTHLY
                    </span>
                </div>
                <div className="absolute top-[53%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button className="lg:text-[30px] text-[20px] bg-white lg:px-[5rem] px-[3rem] lg:py-3 py-1 rounded-3xl shadow-lg font-bold text-[#03d2ff] tracking-wide hover:cursor-pointer">
                        Register</button>
                </div>
                <div className="absolute top-[66%] left-0 p-4">
                    <div className="px-2 py-2 flex flex-col items-center">
                        <span className="text-white font-extrabold lg:text-[22px] text-[18px] uppercase leading-9">
                            MAKE A DIFFERENCE EVERY
                        </span>
                        <span className='text-yellow-300 lg:text-6xl text-4xl font-extrabold lg:mt-5'>MONTH</span>
                    </div>
                </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 relative flex">
                <Image
                    src={joinus}
                    alt="join us"
                    className=""
                />
                <div className="absolute top-[26%] left-1/2 transform -translate-x-1/4 -translate-y-1/2 flex flex-col">
                    <div className="text-white font-extrabold lg:text-[34px] text-[26px] text-end leading-8 max-w-full mb-10 whitespace-nowrap">
                        BECOME A <br /> HOOOMAN
                    </div>
                    <Image
                        src={joinuslogo}
                        alt='joinuslogo'
                        className='w-full'
                    />
                </div>
                <div className="absolute top-[53%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button className="lg:text-[30px] text-[18px] bg-white lg:px-[5rem] lg:py-5 px-[3rem] py-2 rounded-2xl font-bold text-[#03d2ff] leading-5 whitespace-nowrap hover:cursor-pointer">
                        Join Us</button>
                </div>
                <div className="absolute top-[60%] left-6 p-4">
                    <div className="px-2 py-2 flex flex-col text-right">
                        <span className="text-white font-extrabold lg:text-[24px] text-[18px] uppercase leading-9">
                            TURNING <br/> COMPASSION INTO
                        </span>
                        <span className='text-yellow-300 lg:text-6xl text-[18px] font-extrabold lg:mt-5'>ACTION</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Providers;