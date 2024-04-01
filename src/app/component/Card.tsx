import Image from "next/image";
interface CardProps {
    title: string;
    totalevents: string; // Consider using a more specific type if possible
    sport: string; // Consider using a more specific type if possible
    src: any;
}
export default function Card({
    title,
    totalevents,
    sport,
    src,
  }: CardProps) 
{
    return(
    <>
        <div className='flex justify-center'>
            <div className='shadow-gray-300 shadow-md w-[258px] h-[511px] bg-[#FFFFFF] p-3'>
                <div>
                    <img src={src} alt="" className='h-[385px] object-cover' />
                </div>
                <div className='text-black font-bodyFont text-lg pb-2 pt-2'>{title}</div>
                <div className='text-white bg-[#F7F7F8] p-3 flex'>
                    <div className='flex flex-col pr-[50px]'>
                        <span className='text-xs font-bodyFont text-[#525965]'>Total Events</span>
                        <span className="text-black">{totalevents}</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-xs font-bodyFont text-[#525965]'>Sports</span>
                        <span className="text-black">{sport}</span>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
};

