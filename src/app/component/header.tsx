import Link from "next/link"
import { FaSearch } from "react-icons/fa";
import { LuUser } from "react-icons/lu";
const Header=()=>{
    return(


        <div className="w-full bg-orange-50">
    <div className="flex flex-col md:flex-row w-full md:w-4/5 items-center justify-between mx-auto gap-4 md:gap-10 lg:gap-20 px-6 md:px-12 font-bold bg-orange-50">
        <div className="font-bold text-2xl md:text-3xl mt-4 md:mt-9 mb-4 md:mb-10 drop-shadow-lg border-t-black animate-pulse">
            Dwello
        </div>
        <div className="text-xs md:text-sm lg:text-base mt-4 md:mt-10 flex justify-center md:justify-start">
            <ul className="flex flex-col md:flex-row gap-4 md:gap-10 lg:gap-14 mt-2 md:mt-3 mb-4 md:mb-10 text-center">
                <li className="hover:scale-110">
                    <Link href="/">Home</Link>
                </li>
                <li className="hover:scale-110">
                    <Link href="/service">Services</Link>
                </li>
                <li className="hover:scale-110">
                    <Link href="/agent">Agents</Link>
                </li>
                <li className="hover:scale-110">
                    <Link href="/contact-us">Contact</Link>
                </li>
            </ul>
        </div>
        <div className="flex gap-3 md:gap-5 lg:gap-7 items-center mb-4 md:mb-0">
            <FaSearch className="drop-shadow-lg animate-pulse" />
            <LuUser className="drop-shadow-lg animate-pulse" />
            <button className="w-16 md:w-20 h-8 md:h-9 text-xs md:text-[13px] rounded-lg bg-black hover:bg-red-800 text-white hover:scale-110">
                Sign Up
            </button>
        </div>
    </div>
</div>

    )
}
export default Header