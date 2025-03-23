import Image from 'next/image';
import React from 'react'
import legal from "../public/legal .png"
import rescue from "../public/rescue.png"
import foster from "../public/fostering .png"
import vaccine from "../public/vaccination .png"
import awareness from "../public/awarness.png"
import sterlization from "../public/sterlization .png"


const Features = () => {
    return (
        <div className="lg:py-10 md:py-6">
            <div className="lg:px-20 md:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            title: "Legal",
                            icon: <Image src={legal} alt='legal' className="lg:h-28 lg:w-28 md:h-22 md:w-22 lg:mr-8 md:mr-10" />,
                            content: "We address and help in \ncases of animal cruelty \nthrough legal means."
                        },
                        {
                            title: `Animal \nresuce`,
                            icon: <Image src={rescue} alt='rescue' className="lg:h-25 lg:w-40 md:h-16 md:w-28" />,
                            content: "We intervene to rescue \nanimals in distress that are \nliving on the streets."
                        },
                        {
                            title: "Fostering \nand \nAdoption",
                            icon: <Image src={foster} alt="foster" className="lg:h-25 lg:w-40 md:h-16 md:w-28" />,
                            content: "We offer a temporary shelter for \ndistressed animals during their \nrecovery period and work towards \nsecuring permanent homes for them."
                        },
                        {
                            title: "Vaccination",
                            icon: <Image src={vaccine} alt='vaccine' className="lg:h-25 lg:w-40 md:h-16 md:w-28" />,
                            content: "We facilitate free rabies \nvaccination drives and \nvaccinations for other \ndiseases at affordable cost for \ncompanion animals"
                        },
                        {
                            title: "Awareness & \nBonding",
                            icon: <Image src={awareness} alt='awareness' className="lg:h-25 lg:w-40 md:h-16 md:w-28" />,
                            content: "We arrange public awareness \nprograms to promote understanding \nof the coexistence challenges between \nhumans and animals, focusing on their \nwelfare"
                        },
                        {
                            title: "Sterilization",
                            icon: <Image src={sterlization} alt='sterlization' className="lg:h-25 lg:w-40 md:h-16 md:w-28" />,
                            content: "We collaborate with local \nadministrative bodies to \nfacilitate sterilization of \ncommunity dogs and cats."
                        },
                    ].map((program, index) => (
                        <div
                            key={index}
                            className="bg-white lg:p-6 md:p-4 hover:shadow-lg transition-shadow lg:ml-10 md:ml-[5rem]"
                        >
                            <div className="flex items-start lg:mb-10 md:mb-6">
                                <div className="lg:mr-4 md:mr-3">
                                    {program.icon}
                                </div>
                                <h3 className="lg:text-[24px] md:text-[19px] font-extrabold text-gray-800 lg:mt-6 md:mt-4 whitespace-pre-line leading-6">
                                    {program.title}
                                </h3>
                            </div>
                            <p className="text-black lg:text-[20px] md:text-[18px] leading-relaxed whitespace-pre-line">
                                {program.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Features