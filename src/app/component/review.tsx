import Image from "next/image"
import { CiStar } from "react-icons/ci"
import { TiTick } from "react-icons/ti"
const Review = () => {
    return (
<div className="w-screen min-h-screen">
    <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mt-12 sm:mt-20 md:mt-28">
        <h1>What People Say</h1>
        <h1>About Dwello</h1>
    </div>

    <div className="flex flex-wrap justify-center gap-8 mt-10 mx-auto w-[90%] md:w-[80%] text-center text-[12px] md:text-[14px]">
        {/* Card 1 */}
        <div className="w-[280px] h-auto bg-black text-white drop-shadow-lg rounded-lg">
            <Image src="/tvlounge.jpeg" width={330} height={350} className="w-full drop-shadow-lg animate-pulse" alt="pic" />
            <div className="p-4">
                <div className="flex items-center gap-4 mb-4">
                    <Image src="/girl2.jpeg" width={40} height={40} className="rounded-full" alt="profile-pic" />
                    <h1 className="text-[16px]">Madiha</h1>
                    <div className="text-[16px] text-yellow-500"><CiStar /></div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet beatae esse officia labore.</p>
            </div>
        </div>

        {/* Card 2 */}
        <div className="w-[280px] h-auto bg-black text-white drop-shadow-lg rounded-lg">
            <Image src="/bedroom.webp" width={320} height={350} className="w-full drop-shadow-lg animate-pulse" alt="pic" />
            <div className="p-4">
                <div className="flex items-center gap-4 mb-4">
                    <Image src="/girl3.webp" width={40} height={40} className="rounded-full" alt="profile-pic" />
                    <h1 className="text-[16px]">Madiha</h1>
                    <div className="text-[16px] text-yellow-500"><CiStar /></div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet beatae esse officia labore.</p>
            </div>
        </div>

        {/* Card 3 */}
        <div className="w-[280px] h-auto bg-black text-white drop-shadow-lg rounded-lg">
            <Image src="/garden3.jpeg" width={320} height={350} className="w-full drop-shadow-lg animate-pulse" alt="pic" />
            <div className="p-4">
                <div className="flex items-center gap-4 mb-4">
                    <Image src="/girl3.webp" width={40} height={40} className="rounded-full" alt="profile-pic" />
                    <h1 className="text-[16px]">Madiha</h1>
                    <div className="text-[16px] text-yellow-500"><CiStar /></div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet beatae esse officia labore.</p>
            </div>
        </div>

        {/* Card 4 */}
        <div className="w-[280px] h-auto bg-black text-white drop-shadow-lg rounded-lg">
            <Image src="/kitchen.jpeg" width={330} height={350} className="w-full drop-shadow-lg animate-pulse" alt="pic" />
            <div className="p-4">
                <div className="flex items-center gap-4 mb-4">
                    <Image src="/girl3.webp" width={40} height={40} className="rounded-full" alt="profile-pic" />
                    <h1 className="text-[16px]">Madiha</h1>
                    <div className="text-[16px] text-yellow-500"><CiStar /></div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet beatae esse officia labore.</p>
            </div>
        </div>
    </div>

    <div className="text-center text-2xl sm:text-3xl mt-16 drop-shadow-lg">
        <h1>Do You Have Any Questions?</h1>
        <h1>Get Help From Us</h1>
    </div>

    <div className="flex flex-col md:flex-row justify-center items-center gap-3 text-[14px] mt-5">
        <h1 className="flex items-center gap-3 drop-shadow-lg">
            <TiTick /> Chat live with support team
        </h1>
        <h1 className="flex items-center gap-3 drop-shadow-lg">
            <TiTick /> Browse Our FAQ
        </h1>
    </div>

    <form className="flex flex-col items-center mt-10 gap-3">
        <input
            className="border-orange-100 bg-orange-50 w-[80%] md:w-[50%] lg:w-[30%] border-2 p-3 rounded-md pl-5"
            type="email"
            id="email"
            placeholder="Enter Your Email"
        />
        <button
            type="submit"
            className="bg-black w-auto py-2 px-6 rounded-lg text-white text-[16px] text-center hover:bg-gray-200 hover:text-black drop-shadow-lg"
        >
            Submit
        </button>
    </form>
</div>









       
            
            )
}
export default Review