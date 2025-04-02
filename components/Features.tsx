import Image from 'next/image';
import React from 'react'
import legal from "../public/legal .png"
import rescue from "../public/rescue.png"
import foster from "../public/fostering .png"
import vaccine from "../public/vaccination .png"
import awareness from "../public/awarness.png"
import sterlization from "../public/sterlization .png"

const Features = () => {
    const featuresData = [
        {
            title: "Legal",
            icon: legal,
            alt: 'legal',
            iconClass: "lg:h-28 lg:w-28 md:h-22 md:w-22 w-16 h-16 lg:mr-8 md:mr-10",
            mobileContent: "We address and help in cases of animal cruelty through legal means.",
            desktopContent: "We address and help in \ncases of animal cruelty \nthrough legal means."
        },
        {
            title: `Animal \nresuce`,
            icon: rescue,
            alt: 'rescue',
            iconClass: "lg:h-25 lg:w-40 md:h-16 md:w-28 w-28 h-16",
            mobileContent: "We intervene to rescue animals in distress that are living on the streets.",
            desktopContent: "We intervene to rescue \nanimals in distress that are \nliving on the streets."
        },
        {
            title: "Fostering \nand \nAdoption",
            icon: foster,
            alt: 'foster',
            iconClass: "lg:h-25 lg:w-40 md:h-16 md:w-28 w-28 h-14",
            mobileContent: "We offer a temporary shelter for distressed animals during their recovery period and work towards securing permanent homes for them.",
            desktopContent: "We offer a temporary shelter for \ndistressed animals during their \nrecovery period and work towards \nsecuring permanent homes for them."
        },
        {
            title: "Vaccination",
            icon: vaccine,
            alt: 'vaccine',
            iconClass: "lg:h-25 lg:w-40 md:h-16 md:w-28 w-28 h-16",
            mobileContent: "We facilitate free rabies vaccination drives and vaccinations for other diseases at affordable cost for companion animals",
            desktopContent: "We facilitate free rabies \nvaccination drives and \nvaccinations for other \ndiseases at affordable cost for \ncompanion animals."
        },
        {
            title: "Awareness & \nBonding",
            icon: awareness,
            alt: 'awareness',
            iconClass: "lg:h-25 lg:w-40 md:h-16 md:w-28 w-28 h-16",
            mobileContent: "We arrange public awareness programs to promote understanding of the coexistence challenges between humans and animals, focusing on their welfare",
            desktopContent: "We arrange public awareness \nprograms to promote understanding \nof the coexistence challenges between \nhumans and animals, focusing on their \nwelfare."
        },
        {
            title: "Sterilization",
            icon: sterlization,
            alt: 'sterlization',
            iconClass: "lg:h-25 lg:w-40 md:h-16 md:w-28 w-28 h-16",
            mobileContent: "We collaborate with local administrative bodies to facilitate sterilization of community dogs and cats.",
            desktopContent: "We collaborate with local \nadministrative bodies to \nfacilitate sterilization of \ncommunity dogs and cats."
        },
    ];

    return (
        <div className="lg:py-10 md:py-6 py-8">
            {/* Mobile View - Hidden on md screens and above */}
            <div className="md:hidden px-2">
                <div className="grid grid-cols-2 space-y-6">
                    {featuresData.map((program, index) => (
                        <div
                            key={index}
                            className="bg-white p-4 hover:shadow-lg transition-shadow"
                        >
                            <div className="flex items-start mb-4">
                                <div>
                                    <Image 
                                        src={program.icon} 
                                        alt={program.alt} 
                                        className="w-22 h-16 mr-3" 
                                    />
                                </div>
                                <h3 className="text-xs font-extrabold text-gray-800 mt-2 whitespace-pre-line leading-3">
                                    {program.title}
                                </h3>
                            </div>
                            <p className="text-black text-xs leading-relaxed">
                                {program.mobileContent}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Desktop/Tablet View - Hidden on small screens */}
            <div className="hidden md:block">
                <div className="lg:px-20 md:px-16">
                    <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-x-0 md:gap-x-0">
                        {featuresData.map((program, index) => (
                            <div
                                key={index}
                                className="bg-white lg:p-6 md:p-4 hover:shadow-lg transition-shadow lg:ml-10 md:ml-20"
                            >
                                <div className="flex items-start lg:mb-10 md:mb-6">
                                    <div className="lg:mr-4 md:mr-3">
                                        <Image 
                                            src={program.icon} 
                                            alt={program.alt} 
                                            className={program.iconClass} 
                                        />
                                    </div>
                                    <h3 className="lg:text-2xl md:text-lg text-xs font-extrabold text-gray-800 lg:mt-6 md:mt-4 mt-2 whitespace-pre-line lg:leading-6 md:leading-6 leading-3">
                                        {program.title}
                                    </h3>
                                </div>
                                <p className="text-black lg:text-xl md:text-lg text-xs leading-relaxed whitespace-pre-line">
                                    {program.desktopContent}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features