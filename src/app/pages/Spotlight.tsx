
import SpotlightCard from "@/app/component/SpotlightCard";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
interface CardProps {
    title: string;
    totalevents: string; // Consider using a more specific type if possible
    sport: string; // Consider using a more specific type if possible
    src: string;
    btn:string;
}
export default function Spotlight({
    title,
    totalevents,
    sport,
    src,
    btn,
  }:CardProps) 
{
    return(
    <>
        <div className='pt-20 lg:pt-0 lg:w-[1388px]'>
            <div className='bg-gradient-to-b from-[#F9F8FF] to-[#F3F9FF] lg:pb-0 pb-10'>
                <div className='p-10 flex justify-center items-center flex-col'>
                    <h1 className='text-black font-extrabold font-titleFont text-5xl mb-4 text-center'>Collection Spotlight</h1>
                    <p className='text-black text-sm font-bodyFont lg:w-[998px] text-center pb-10'>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
                </div>
                <div className='flex justify-center relative'>
                    <div className='lg:w-[1388px] lg:h-[673px] w-[421px] h-auto gap-10 flex flex-col lg:flex-row lg:justify-center'>
                        <div className='text-[#2C9CF0] border border-[#2C9CF0] pl-[0.4rem] w-8 h-10 flex justify-center items-center font-bodyFont text-lg absolute left-[41px] lg:left-[174px] top-[298px] cursor-pointer'><MdArrowBackIos/></div>
                        <SpotlightCard title="Sacramento River Cats" totalevents="48 Events" sport="Las Vegas Ballpark, Las Vegas, Nevada" src="img5.jpg" btn="Take Flight Collection"/>
                        <div className='gap-10 hidden lg:flex'>
                        <SpotlightCard title="Las Vegas Aviators" totalevents="28 Events" sport="Sutter Health Park, Sacramento, California" src="img6.jpg" btn="Orange Collection"/>
                        <SpotlightCard title="New Jersey Devils" totalevents="15 Events" sport="Las Vegas Ballpark, Las Vegas, Nevada" src="img7.jpg" btn="Take Flight Collection"/>
                        </div>
                        <div className='text-[#2C9CF0] border border-[#2C9CF0]  pr-[0.1rem] w-8 h-10 flex justify-center items-center font-bodyFont text-lg absolute right-[41px] lg:right-[174px] top-[298px] cursor-pointer'><MdArrowForwardIos/></div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
  };
