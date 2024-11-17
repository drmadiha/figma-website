import Image from "next/image"
const DisPlay = () => {
    return (

        <div className="flex flex-col md:flex-row w-full gap-10 md:gap-32 mt-10 items-center md:items-start">
        <div className="w-full md:w-auto flex justify-center md:justify-start">
           <Image 
              src="/pic4.jpeg"
              width={650}
              height={700} 
              className="w-full max-w-[350px] md:max-w-none pl-0 md:pl-20 drop-shadow-lg hover:scale-105 transition-transform duration-300"
              alt="pic"
           />
        </div>
     
        <div className="w-full md:w-1/2 lg:w-1/3 drop-shadow-lg text-center md:text-left">
           <div className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              <h1>We Help You To Find</h1>
              <h1>Your Dream Home</h1>
           </div>
           <div className="text-sm sm:text-base md:text-[14px] mt-6 sm:mt-8 md:mt-12 pr-4 md:pr-14">
              <p>From cozy cottages to luxurious estates, our dedicated team guides you through every step of the journey, ensuring your dream home becomes a reality.</p>
           </div>
           <div className="flex flex-wrap justify-center md:justify-start gap-8 sm:gap-12 md:gap-28 mt-6 sm:mt-8 md:mt-12">
              <div className="text-center">
                 <h1 className="text-2xl sm:text-3xl font-bold">8k+</h1>
                 <p>Houses Available</p>
              </div>
              <div className="text-center">
                 <h1 className="text-2xl sm:text-3xl font-bold">6k+</h1>
                 <p>Houses Sold</p>
              </div>
              <div className="text-center">
                 <h1 className="text-2xl sm:text-3xl font-bold">2k+</h1>
                 <p>Trusted Agents</p>
              </div>
           </div>
        </div>
     </div>
     










        // <div className="flex w-full grid-colos-2 gap-32 mt-10">
        //     <div>
        //         <Image src="/pic4.jpeg"
        //         width={650}
        //         height={700} className="pl-20 drop-shadow-lg hover:scale-105"
        //         alt="pic"/>
        //     </div>
        //     <div className="w-50 drop-shadow-lg ">
        //     <div className="text-6xl font-bold"><h1>We Help You To Find</h1>
        //         <h1>Your Dream Home</h1>
        //     </div>
        //     <div className="text-[14px] mt-12 pr-14"><p>From cory cottages to luxurious estates our dedicated team guides you through every step of the journey ensuring your dream home becomes a realty. </p></div>
        //    <div className=" flex  grid-colos-3 mt-12 gap-28">
        //     <div >
        //         <h1 className="text-3xl font-bold">8k+</h1>
        //         <p>Houses Available</p>
        //     </div>
        //     <div>
        //         <h1 className="text-3xl font-bold">6k+</h1>
        //         <p>Houses Sold</p>
        //     </div>
        //     <div>
        //         <h1 className="text-3xl font-bold">2k+</h1>
        //         <p>Trusted Agents</p>
        //     </div>
        //    </div>
        //    </div>
        // </div>
    )
}
export default DisPlay