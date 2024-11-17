import Header from "../component/header"
import Footer from "../component/footer"
import Image from "next/image"
const Service = () => {
   return (

      <div className="w-full relative">
  <Header />

  <div>
    <div className="relative">
      <Image
        src="/home.jpeg"
        width={1510}
        height={350}
        alt="pic"
        className="w-full h-[500px] md:h-[700px] lg:h-[900px] object-cover"
      />

      {/* Centered overlay container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 space-y-4">
        <h1 className="text-black text-2xl md:text-3xl lg:text-4xl font-bold drop-shadow-lg">
          Experience the comfort and quality of our handcrafted home goods
        </h1>

        <p className="text-gray-100 text-sm md:text-base lg:text-lg font-bold max-w-md">
          Invest in pieces that will not only look great but also provide lasting comfort and durability. Our products are made with the finest materials and craftsmanship, ensuring years of enjoyment.
        </p>

        <button className="text-white rounded-full w-[150px] h-10 border-2 border-red bg-black font-bold drop-shadow-lg text-sm md:text-base">
          SHOP NOW
        </button>
      </div>
    </div>
  </div>

  <Footer />
</div>

   )
}
export default Service