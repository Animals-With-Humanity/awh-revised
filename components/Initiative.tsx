import Image from 'next/image';
import React from 'react'
import paltu from "../public/paltu-removebg.png"
import kaaya from "../public/kaaya-removebg.png"
import vastu from "../public/vastu-removebg.png"

const Initiative = () => {
    return (
        <div className='flex flex-col'>
            <div className='bg-[#03d2ff] w-full lg:rounded-br-[20rem] md:rounded-br-[13rem] rounded-br-[8rem] lg:px-[5rem] md:px-[3.4rem] px-[1.8rem] lg:pt-10 md:pt-8 lg:pb-10 md:pb-8'>
                <h1 className='text-yellow-300 lg:text-[54px] md:text-[46px] text-[42px] leading-15 font-extrabold'>
                    OUR <br /> INITIATIVES
                </h1>
                <div className='flex lg:flex-row md:flex-row flex-col lg:mt-10 md:mt-8 mt-5 items-center'>
                    <Image
                        src={paltu}
                        alt='paltu dog'
                        className='lg:h-85 lg:w-85 md:h-62 md:w-62 mr-5 h-46 w-46 lg:mb-0 md:mb-0 mb-2'
                    />
                    <Image
                        src={vastu}
                        alt='vastu'
                        className='lg:h-85 lg:w-85 md:h-62 md:w-62 mr-5 h-46 w-46 lg:mb-0 md:mb-0 mb-2'
                    />
                    <Image
                        src={kaaya}
                        alt='kaaya'
                        className='lg:h-85 lg:w-85 md:h-62 md:w-62 mr-5 h-46 w-46 lg:mb-0 md:mb-0 mb-20'
                    />
                </div>
            </div>

            <div className='flex flex-col w-full mt-8 md:hidden'>
                <div className='flex flex-col space-y-8 items-center justify-center'>
                    <div className='flex items-center'>
                        <span className='text-[#03d2ff] font-bold text-2xl w-1/2 text-right pr-4'>STERILISATION</span>
                        <div className='h-12 w-1 bg-yellow-300 mx-8'></div>
                        <span className='text-black font-bold text-4xl'>339</span>
                    </div>
                    
                    <div className='flex items-center'>
                        <span className='text-[#03d2ff] font-bold text-2xl w-1/2 text-right pr-4'>RESCUES</span>
                        <div className='h-12 w-1 bg-yellow-300 mx-8'></div>
                        <span className='text-black font-bold text-4xl'>801</span>
                    </div>

                    <div className='flex items-center'>
                        <span className='text-[#03d2ff] font-bold text-2xl w-1/2 text-right pr-4'>VACCINATIONS</span>
                        <div className='h-12 w-1 bg-yellow-300 mx-8'></div>
                        <span className='text-black font-bold text-4xl'>317</span>
                    </div>
                    
                    <div className='flex items-center'>
                        <span className='text-[#03d2ff] font-bold text-2xl w-1/2 text-right pr-4'>ADOPTIONS</span>
                        <div className='h-12 w-1 bg-yellow-300 mx-8'></div>
                        <span className='text-black font-bold text-4xl'>249</span>
                    </div>
                </div>

                <div className='mt-12 px-6 items-start'>
                    <h1 className='text-[#03d2ff] font-extrabold text-4xl leading-8'>
                        OUR <br /> WORK
                    </h1>
                </div>
            </div>

            <div className="hidden md:flex flex-row justify-between items-center w-full mb-12 mt-10">
                {[
                    { label: "RESCUES", value: "801" },
                    { label: "ADOPTIONS", value: "249" },
                    { label: "VACCINATIONS", value: "317" },
                    { label: "STERILISATION", value: "339" },
                ].map((item, index) => (
                    <div key={index} className="py-4 text-center flex flex-col flex-1">
                        <div className="text-xl lg:text-3xl text-[#03d2ff] tracking-wide font-extrabold">
                            {item.label}
                        </div>
                        <div className="text-4xl lg:text-5xl font-extrabold text-black mb-2">
                            {item.value}
                        </div>
                    </div>
                ))}
                <div className="px-10 pb-14">
                    <h1 className="text-[#03d2ff] text-5xl lg:text-6xl leading-tight font-extrabold">
                        OUR <br /> WORK
                    </h1>
                </div>
            </div>

        </div>
    );
}

export default Initiative