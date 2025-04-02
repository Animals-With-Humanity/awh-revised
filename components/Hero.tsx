import Image from "next/image";
import hero from "../public/herosection.png"

export default function HeroSection() {
    return (
        <div className=" flex flex-col lg:px-8 lg:py-8 bg-[#03d2ff] md:px-8 md:py-6 md:pb-15 lg:h-[80vh] h-[61vh]">
            <div className=" flex flex-col md:flex-row items-center lg:px-8 lg:pt-12">
                <div className="md:w-1/2 mb-8 md:mb-8 lg:ml-50 md:ml-30">
                    <h1 className="lg:text-[58px] md:text-[46px] text-[38px] font-extrabold text-black leading-tight lg:mb-5 md:mb-4 mb-2 whitespace-nowrap">
                       It&apos;s time we be <br/>KIND to all <br/> KINDS.
                    </h1>
                    <p className="lg:text-xl md:text-[16px] font-extrabold lg:mb-8 md:mb-6 text-black mb-6">
                        The world belongs to all,
                        <br />
                        and it&apos;s time we learn to co-exist!
                    </p>
                    <button className="bg-[#ffffff] text-white lg:text-lg md:text-[16px] font-semibold lg:py-4 md:py-2.5 py-1.5 lg:px-18 md:px-10 px-6 rounded-lg shadow-md hover:bg-blue-700 transition" >
                        <span className="text-[#03d2ff] lg:text-xl md:text-xl text-sm">How can you help?</span>
                    </button>
                </div>
                <div className="md:w-1/2 flex md:justify-end lg:mr-45 md:mr-0 ml-25">
                    <Image
                        src={hero}
                        alt="Woman holding a dog"
                        className="rounded-lg object-cover lg:max-w-xl md:max-w-lg rotate-[90deg]"
                    />
                </div>
            </div>
        </div>
    );

}
