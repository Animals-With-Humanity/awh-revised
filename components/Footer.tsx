import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp , FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-white text-black py-6">
            <div className="container mx-auto flex flex-col items-center justify-center px-6 lg:pb-0 md:pb-[20%] pb-[65%]">
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 text-4xl">
                        <FaFacebookF />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 text-4xl">
                        <FaTwitter />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 text-4xl">
                        <FaInstagram />
                    </a>
                    <a href="mailto:info@example.com" className="text-black hover:text-gray-600 text-4xl">
                        <FaEnvelope/>
                    </a>
                    <a href="mailto:info@example.com" className="text-black hover:text-gray-600 text-4xl">
                        <FaWhatsapp/>
                    </a>
                </div>
                <p className="py-5 text-[11px] font-extrabold">Reg No: 01/01/03/38114/21</p>
            </div>
        </footer>
    );
}
