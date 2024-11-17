import { FaHandshake } from "react-icons/fa";
import { PiNotebookFill } from "react-icons/pi";
import { FaServicestack } from "react-icons/fa";
import { MdHome } from "react-icons/md";

const Card = () => {
   return (
<>
      <div className="mt-24 w-full">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center drop-shadow-lg">Why Choose Us</h1>
      <p className="text-sm sm:text-base md:text-[15px] text-center pt-6 sm:pt-9 mx-auto px-4 md:px-0 md:w-[680px] lg:w-[780px]">
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga reprehenderit tempora aperiam eaque perferendis enim explicabo, aut fugit natus libero dolores quae amet omnis, ullam autem voluptatum corrupti accusamus vitae.
      </p>
   </div>
   
   <div className="flex flex-wrap justify-center gap-5 mt-11 px-4 md:px-0">
      <div className="bg-orange-50 w-full sm:w-[320px] h-[320px] rounded-lg drop-shadow-lg hover:translate-y-3 transition-transform duration-300">
         <h1 className="w-20 h-16 text-3xl flex items-center justify-center bg-white drop-shadow-lg animate-pulse mt-10 mx-auto">
            <FaHandshake />
         </h1>
         <h1 className="font-bold text-[20px] text-center mt-4">Exceptional Support</h1>
         <p className="text-center px-4 mt-2">
            Fuga reprehenderit tempora aperiam eaque perferendis enim explicabo, aut fugit natus libero dolores quae amet omnis, ullam autem voluptatum corrupti accusamus vita.
         </p>
      </div>
   
      <div className="bg-orange-50 w-full sm:w-[320px] h-[320px] rounded-lg drop-shadow-lg hover:skew-x-6 transition-transform duration-300">
         <h1 className="w-20 h-16 text-3xl flex items-center justify-center bg-white drop-shadow-lg animate-pulse mt-10 mx-auto">
            <PiNotebookFill />
         </h1>
         <h1 className="font-bold text-[20px] text-center mt-4">Transparent Process</h1>
         <p className="text-center px-4 mt-2">
            Fuga reprehenderit tempora aperiam eaque perferendis enim explicabo, aut fugit natus libero dolores quae amet omnis, ullam autem voluptatum corrupti accusamus vita.
         </p>
      </div>
   
      <div className="bg-orange-50 w-full sm:w-[320px] h-[320px] rounded-lg drop-shadow-lg hover:scale-105 transition-transform duration-300">
         <h1 className="w-20 h-16 text-3xl flex items-center justify-center bg-white drop-shadow-lg animate-pulse mt-10 mx-auto">
            <FaServicestack />
         </h1>
         <h1 className="font-bold text-[20px] text-center mt-4">Residence Services</h1>
         <p className="text-center px-4 mt-2">
            Fuga reprehenderit tempora aperiam eaque perferendis enim explicabo, aut fugit natus libero dolores quae amet omnis, ullam autem voluptatum corrupti accusamus vita.
         </p>
      </div>
   
      <div className="bg-orange-50 w-full sm:w-[320px] h-[320px] rounded-lg drop-shadow-lg hover:translate-y-3 transition-transform duration-300">
         <h1 className="w-20 h-16 text-3xl flex items-center justify-center bg-white drop-shadow-lg animate-pulse mt-10 mx-auto">
            <MdHome />
         </h1>
         <h1 className="font-bold text-[20px] text-center mt-4">Exceptional Support</h1>
         <p className="text-center px-4 mt-2">
            Fuga reprehenderit tempora aperiam eaque perferendis enim explicabo, aut fugit natus libero dolores quae amet omnis, ullam autem voluptatum corrupti accusamus vita.
         </p>
      </div>
   </div>
   

</>




      // <div>
      //    <div className="mt-24 w-full">
      //       <h1 className="text-5xl font-bold text-center drop-shadow-lg ">Why Choies Us</h1>
      //       <p className="text-[15px] text-center pt-9 w-[680px] pl-10 ml-96 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      //          Fuga reprehenderit tempora aperiam eaque perferendis enim explicabo,
      //           aut fugit natus libero dolores quae amet omnis, ullam autem voluptatum corrupti accusamus vitae.</p>
      //    </div>
      //    <div className="flex grid-4 w-full gap-5 ml-20 mt-11 ">
      //       <div className="bg-orange-50 w-[320px] h-[320px] rounded-lg drop-shadow-lg hover:translate-y-3 "><h1 className="w-20 h-16 text-3xl pl-5 pt-3 mt-10 ml-5 bg-white drop-shadow-lg animate-pulse "><FaHandshake /></h1>
      //       <h1 className="font-bold text-[20px] pl-8 pt-10 mt-1">Excptional Suporat</h1>
      //       <p className="pl-8 pr-5 mt-2">Fuga reprehenderit tempora aperiam eaque perferendis enim explicabo,
      //       aut fugit natus libero dolores quae amet omnis, ullam autem voluptatum corrupti accusamus vita</p></div>
      //       <div className="bg-orange-50 w-[320px] h-[320px] rounded-lg drop-shadow-lg hover:skew-x-6"><h1 className="w-20 h-16 text-3xl pl-5 pt-3 mt-10 ml-5 bg-white drop-shadow-lg animate-pulse" ><PiNotebookFill /></h1>
      //       <h1 className="font-bold text-[20px] pl-8 mt-1">Transperent Process</h1>
      //       <p className="pl-8 pr-5 mt-2">Fuga reprehenderit tempora aperiam eaque perferendis enim explicabo,
      //       aut fugit natus libero dolores quae amet omnis, ullam autem voluptatum corrupti accusamus vita</p></div>
      //       <div className="bg-orange-50 w-[320px] h-[320px] rounded-lg drop-shadow-lg hover:scale-105"><h1 className="w-20 h-16 text-3xl pl-5 pt-3 mt-10 ml-5 bg-white drop-shadow-lg animate-pulse"><FaServicestack /></h1>
      //       <h1 className="font-bold text-[20px] pl-8 mt-1">Residense Services</h1>
      //       <p className="pl-8 pr-5 mt-2">Fuga reprehenderit tempora aperiam eaque perferendis enim explicabo,
      //       aut fugit natus libero dolores quae amet omnis, ullam autem voluptatum corrupti accusamus vita</p></div>
      //       <div className="bg-orange-50 w-[320px] h-[320px] rounded-lg drop-shadow-lg hover:translate-y-3"><h1 className="w-20 h-16 text-3xl pl-5 pt-3 mt-10 ml-5 bg-white drop-shadow-lg animate-pulse"><MdHome /></h1>
      //       <h1 className="font-bold text-[20px] pl-8 mt-1">Excptional Suporat</h1>
      //       <p className="pl-8 pr-5 mt-2">Fuga reprehenderit tempora aperiam eaque perferendis enim explicabo,
      //       aut fugit natus libero dolores quae amet omnis, ullam autem voluptatum corrupti accusamus vita</p></div>
      //    </div>
      // </div>
   )
}
export default Card