import Image from "next/image"
import { IoLocation } from "react-icons/io5";
import { MdOutlineBedroomParent } from "react-icons/md";
import { FaSquarespace } from "react-icons/fa";
const PopulerCard=()=> {
    return(
<div className="w-full min-h-screen px-4">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center drop-shadow-lg mt-10 sm:mt-20">Our Popular Residences</h1>

    <div className="flex flex-wrap justify-center gap-8 mt-10 sm:mt-16">
        {/* Card 1 */}
        <div className="w-[90%] sm:w-[300px] md:w-[330px] bg-orange-50 drop-shadow-lg rounded-lg">
            <Image src="/pic12.jpeg" width={320} height={320} className="w-full rounded-t-lg drop-shadow-lg hover:scale-105 transition-transform duration-300" alt="residence-pic" />
            <div className="p-4">
                <h1 className="text-[14px] font-bold flex items-center gap-1"><IoLocation /> Palo Alto, California</h1>
                <ul className="flex gap-4 mt-3 text-[12px]">
                    <li className="flex items-center"><MdOutlineBedroomParent /> 6 rooms</li>
                    <li className="flex items-center"><FaSquarespace /> 4,000 sq ft</li>
                </ul>
                <div className="flex justify-between items-center mt-4">
                    <button className="w-24 h-9 bg-black text-white rounded-lg hover:bg-red-700 transition-colors">Buy Now</button>
                    <h1 className="font-semibold">$3,700,000</h1>
                </div>
            </div>
        </div>

        {/* Card 2 */}
        <div className="w-[90%] sm:w-[300px] md:w-[330px] bg-orange-50 drop-shadow-lg rounded-lg">
            <Image src="/pic11.jpeg" width={320} height={340} className="w-full rounded-t-lg drop-shadow-lg hover:scale-105 transition-transform duration-300" alt="residence-pic" />
            <div className="p-4">
                <h1 className="text-[14px] font-bold flex items-center gap-1"><IoLocation /> Palo Alto, California</h1>
                <ul className="flex gap-4 mt-3 text-[12px]">
                    <li className="flex items-center"><MdOutlineBedroomParent /> 6 rooms</li>
                    <li className="flex items-center"><FaSquarespace /> 4,000 sq ft</li>
                </ul>
                <div className="flex justify-between items-center mt-4">
                    <button className="w-24 h-9 bg-black text-white rounded-lg hover:bg-red-700 transition-colors">Buy Now</button>
                    <h1 className="font-semibold">$3,700,000</h1>
                </div>
            </div>
        </div>

        {/* Card 3 */}
        <div className="w-[90%] sm:w-[300px] md:w-[330px] bg-orange-50 drop-shadow-lg rounded-lg">
            <Image src="/pic13.jpeg" width={320} height={350} className="w-full rounded-t-lg drop-shadow-lg hover:scale-105 transition-transform duration-300" alt="residence-pic" />
            <div className="p-4">
                <h1 className="text-[14px] font-bold flex items-center gap-1"><IoLocation /> Beverly Hills, California</h1>
                <ul className="flex gap-4 mt-3 text-[12px]">
                    <li className="flex items-center"><MdOutlineBedroomParent /> 6 rooms</li>
                    <li className="flex items-center"><FaSquarespace /> 4,000 sq ft</li>
                </ul>
                <div className="flex justify-between items-center mt-4">
                    <button className="w-24 h-9 bg-black text-white rounded-lg hover:bg-red-700 transition-colors">Buy Now</button>
                    <h1 className="font-semibold">$3,700,000</h1>
                </div>
            </div>
        </div>
    </div>
</div>

    )
}
export default PopulerCard
