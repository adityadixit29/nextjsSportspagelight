import Image from "next/image";
interface SpotLightCardProps {
    title: string;
    totalevents: string; // Consider using a more specific type if possible
    sport: string; // Consider using a more specific type if possible
    src: string;
}
export default function SpotLightCard({
    title,
    totalevents,
    sport,
    src,
  }:SpotLightCardProps)  {
    return (
        <>
        <div className='flex justify-center'>
            <div className='shadow-black shadow-md w-[250px] h-[624px] bg-[#3B3E47] p-3'>
                <div className='h-[415px] border-b-2 border-dashed border-[#818A97]'>
                <div>
                    <img src={src} alt="" className='h-[385px] object-cover' />
                </div>
                </div>
                <div className='text-white p-3 flex flex-col justify-center items-center gap-2'>
                    <h1 className='text-lg font-titleFont'>{title}</h1>
                    <span className='text-sm font-bodyFont'>Oct 15 Sun 4:30 PM</span>
                    <span className='text-[#DFDFDF] font-bodyFont text-xs text-center'>Las Vegas Ballpark, Las Vegas, Nevada</span>
                </div>
                <div>
                    <button className='bg-black text-white w-[13.5rem] p-2 mt-2 font-bodyFont text-sm'>Take Flight Collection</button>
                </div>
            </div>
        </div>
    </>
    );
  }