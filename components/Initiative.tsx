import Image from 'next/image';
import React from 'react'
import paltu from "../public/paltu-removebg.png"
import kaaya from "../public/kaaya-removebg.png"
import vastu from "../public/vastu-removebg.png"

const Initiative = () => {
    return (
        <div className='flex flex-col'>
            <div className='bg-[#03d2ff] w-full lg:rounded-br-[20rem] md:rounded-br-[13rem] lg:px-[5rem] md:px-[3.4rem] lg:pt-10 md:pt-8 lg:pb-10 md:pb-8'>
                <h1 className='text-yellow-300 lg:text-[54px] md:text-[46px] leading-15 font-extrabold'>
                    OUR <br /> INITIATIVES
                </h1>
                <div className='flex flex-row lg:mt-10 md:mt-8'>
                    <Image
                        src={paltu}
                        alt='paltu bsdka'
                        className='lg:h-85 lg:w-85 md:h-62 md:w-62 mr-5'
                    />
                    <Image
                        src={vastu}
                        alt='vastu'
                        className='lg:h-85 lg:w-85 md:h-62 md:w-62 mr-5'
                    />
                    <Image
                        src={kaaya}
                        alt='kaaya'
                        className='lg:h-85 lg:w-85 md:h-62 md:w-62 mr-5'
                    />
                </div>
            </div>

            <div className="flex justify-between items-center w-full lg:mb-16 md:mb-12 lg:mt-15 md:mt-11">
                {[
                    { label: "RESCUES", value: "801" },
                    { label: "ADOPTIONS", value: "249" },
                    { label: "VACCINATIONS", value: "317" },
                    { label: "STERILISATION", value: "339" },
                ].map((item, index) => (
                    <div key={index} className="lg:py-6 md:py-4 text-center flex flex-col flex-1">
                        <div className="lg:text-[32px] md:text-[18px]] text-[#03d2ff] tracking-wide font-extrabold leading-2">
                            {item.label}
                        </div>
                        <div className="lg:text-[52px] md:text-[41px] font-extrabold text-black mb-2">
                            {item.value}
                        </div>
                    </div>
                ))}
                <div className=" px-10">
                    <h1 className="text-[#03d2ff] lg:text-[60px] md:text-[46px] leading-15 font-extrabold">
                        OUR <br /> WORK
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Initiative