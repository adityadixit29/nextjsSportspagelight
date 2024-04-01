import Image from "next/image";
interface AdProps {
    src: string;
}
export default function Ad({
    src,
  }: AdProps) 
{
    return (
        <div className='flex justify-center'>
        <div className='shadow-black shadow-md w-[258px] h-[511px] bg-[#3B3E47] p-3'>
            <div className='flex justify-center relative'>
                <img src={src} alt="" className='h-[218px] object-cover' />
                <div className='h-7 w-12 bg-black text-white absolute text-center right-[0.4rem]'>
                    Ad
                </div>
            </div>
            <div className='text-white font-bodyFont text-lg pt-5 text-center pb-3'>Advertisement title</div>
        <p className=' w-[13.5rem] mx-auto text-xs font-bodyFont text-[#DFDFDF] pl-3 leading-5 pr-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </div>
    );
  }