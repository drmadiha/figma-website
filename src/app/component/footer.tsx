import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
const Footer = () => {
    return (

<div className="min-h-screen bg-blue-100 mt-16 drop-shadow-lg bg-gradient-to-r from-cyan-500 to-blue-500">
    <div>
        <div className="shadow-sm">
            <h1 className="font-bold text-4xl text-orange-800 text-center pt-20 drop-shadow-lg">
                Get Free WordPress Website Template
            </h1>
            <div className="bg-red-500 hover:bg-red-700 w-44 h-14 rounded-lg pb-2 pt-3 drop-shadow-lg mx-auto mt-12 text-center text-white font-bold text-[20px]">
                <button>Download</button>
            </div>
            <ul className="flex gap-6 justify-center text-[20px] sm:text-[25px] text-orange-800 animate-pulse mt-10">
                <li><FaFacebook /></li>
                <li><FaLinkedin /></li>
                <li><FaTwitter /></li>
                <li><FaInstagram /></li>
                <li><FaWhatsapp /></li>
                <li><FaYoutube /></li>
                <li><FaPhoneAlt /></li>
            </ul>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 bg-orange-50 gap-10 sm:gap-20 w-full h-auto sm:h-96 mt-20 pt-10 pb-10 text-center drop-shadow-lg">
            <div>
                <h1 className="text-3xl font-bold drop-shadow-lg">Product</h1>
                <ul className="text-[16px] drop-shadow-lg pt-4">
                    <li>Feature</li>
                    <li>Service</li>
                    <li>Enterprise</li>
                    <li>Pricing</li>
                </ul>
            </div>
            <div>
                <h1 className="text-3xl font-bold drop-shadow-lg">Company</h1>
                <ul className="text-[16px] drop-shadow-lg pt-4">
                    <li>Headless</li>
                    <li>Commerce</li>
                    <li>Multi Channel</li>
                    <li>Career</li>
                </ul>
            </div>
            <div>
                <h1 className="text-3xl font-bold drop-shadow-lg">Help Center</h1>
                <ul className="text-[16px] drop-shadow-lg pt-4">
                    <li>Community</li>
                    <li>Video</li>
                    <li>Contact</li>
                    <li>Tech Support</li>
                </ul>
            </div>
            <div>
                <h1 className="text-3xl font-bold drop-shadow-lg">Partners</h1>
                <ul className="text-[16px] drop-shadow-lg pt-4">
                    <li>Overview</li>
                    <li>Become a Partner</li>
                    <li>Find a Partner</li>
                    <li>Revenue</li>
                </ul>
            </div>
        </div>

        <p className="text-[12px] drop-shadow-lg text-center mt-10">
            © 2024 All rights reserved | Built by Madiha Rashid
        </p>
    </div>
</div>




        
    )
}
export default Footer