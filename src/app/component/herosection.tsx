import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { IoHome } from "react-icons/io5";
import { TbCircleLetterS } from "react-icons/tb";
const Herosection = () => {
    return (
        <>
        <div className="flex flex-col md:flex-row w-full bg-orange-50 p-5 md:p-0">
   <div className="flex flex-col md:flex-row w-full md:w-4/5 gap-8 md:gap-16 mx-auto mt-10 md:mt-0">
      <div className="w-full md:w-1/2 bg-orange-50 p-5 md:p-12 rounded-lg">
         <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-weight-800 drop-shadow-lg">
            <h1>Find Your</h1>
            <h1 className="mt-3 drop-shadow-lg">Dream Home</h1>
         </div>
         <div className="text-center md:text-left mt-4 md:mt-7 text-sm sm:text-base md:text-[14px]">
            <p>Explore our curated selection of exquisite properties meticulously tailored to your unique dream home vision.</p>
         </div>
         <div className="bg-black hover:bg-red-800 text-white w-24 sm:w-28 px-4 py-2 mt-6 md:mt-10 rounded-lg drop-shadow-lg text-center">
            <button>Buy Home</button>
         </div>
      </div>

      <div className="w-full md:w-1/2 mt-6 md:mt-20 flex justify-center">
         <Image 
            src="/pic3.png"
            width={650}
            height={800}
            className="bg-orange-50 max-w-full rounded-lg drop-shadow-lg"
            alt="background-pic" 
         />
      </div>
   </div>
</div>

<div className="flex flex-col md:flex-row w-full max-w-[990px] h-auto md:h-[95px] gap-4 md:gap-8 mb-10 md:mb-20 mx-auto bg-orange-200 px-6 md:px-20 items-center rounded-lg drop-shadow-lg">
   <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-9 w-full md:w-auto">
      <div className="flex items-center gap-3 w-full md:w-[180px] text-black h-[37px] bg-red-50 rounded-md pl-2 pt-2 drop-shadow-lg">
         <h1>Location</h1>
         <CiLocationOn className="drop-shadow-lg animate-pulse" />
      </div>
      <div className="flex items-center gap-3 w-full md:w-[180px] text-black h-[37px] bg-red-50 rounded-md pl-2 pt-2 drop-shadow-lg">
         <h1>Type</h1>
         <IoHome className="drop-shadow-lg animate-pulse" />
      </div>
      <div className="flex items-center gap-3 w-full md:w-[180px] text-black h-[37px] bg-red-50 rounded-md pl-2 pt-2 text-[14px] drop-shadow-lg">
         <h1>Price Range</h1>
         <TbCircleLetterS className="drop-shadow-lg animate-pulse" />
      </div>
      <div className="w-full md:w-[180px] text-white h-[37px] bg-black hover:bg-red-800 rounded-md text-center pt-2 drop-shadow-lg">
         <button>Search</button>
      </div>
   </div>
</div>




         {/* <div className="flex w-full bg-orange-50">
            <div className="flex w-80% gap-16 ml-20">  
                <div className="w-50% bg-bisucuty-50 mt-32 ml-12" >
                <div className="text-7xl font-bold font-weaight-800 drop-shadow-lg "><h1>Find Your </h1>
                <h1 className="mt-3 drop-shadow-lg ">Dream Home</h1></div>
                <div className="text-center mt-7 text-[14px]"><p>Explore our curated section of exquisite properties meticulously 
                    tailored to your unique dream home vision </p></div>
                    <div className="bg-black  hover:bg-red-800 text-white w-28 pl-5 pt-1 h-8 mt-10 rounded-lg drop-shadow-lg "><button>Buy Home</button></div>
            </div>
            <div className="w-48% mt-20 ">
                 <Image src="/pic3.png"
                 width={650} height={800} className="bg-orange-50  "
                 alt="background-pic" />
            </div>
            </div>   
        </div>
         <div className="flex w-[990px] h-[95px] gap-16  mb-20 ml-44 bg-orange-200 pr-20 iteam-c-center rounded-lg drop-shadow-lg ">
            <div className="flex gap-9 w-80% ml-20 rounded-lg pb-10">
         <div className=" flex gap-14 w-[180px]  text-black h-[37px] mt-9 bg-red-50 rounded-md pl-2 pt-2 drop-shadow-lg "><h1>Location</h1><h1 className="pt-1 "><CiLocationOn className="drop-shadow-lg animate-pulse"/></h1></div>
         <div className=" flex gap-20 w-[180px] text-black h-[37px] mt-9 bg-red-50 rounded-md pl-2 pt-2 drop-shadow-lg "><h1>Type</h1><h1 className="pt-1"><IoHome className="drop-shadow-lg animate-pulse"/></h1></div>
         <div className=" flex gap-14 w-[180px] text-black h-[37px] mt-9 drop-shadow-lg  bg-red-50 rounded-md pl-2 text-[14px] pt-2" ><h1>Price Range</h1><h1 className="pt-1"><TbCircleLetterS className="drop-shadow-lg animate-pulse"/></h1></div>
         <div className="w-[180px]  text-white h-[37px] mt-9 drop-shadow-lg  bg-black  hover:bg-red-800 rounded-md pl-12 pt-2"><button>Search</button></div>
         </div>
     </div>  */}
     
     </>
    )
}
export default Herosection