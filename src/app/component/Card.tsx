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
            <div className='shadow-black shadow-md w-[258px] h-[511px] bg-[#3B3E47] p-3'>
                <div>
                    <img src={src} alt="" className='h-[385px] object-cover' />
                </div>
                <div className='text-[#DFDFDF] font-bodyFont text-lg pb-2 pt-2'>{title}</div>
                <div className='text-white bg-[#292B32] p-3 flex'>
                    <div className='flex flex-col pr-[50px]'>
                        <span className='text-xs font-bodyFont text-[#DFDFDF]'>Total Events</span>
                        <span>{totalevents}</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-xs font-bodyFont text-[#DFDFDF]'>Sports</span>
                        <span>{sport}</span>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
};

