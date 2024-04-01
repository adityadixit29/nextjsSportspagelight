import Ad from '../component/Ad';
import Card from '../component/Card';


interface CardProps {
  title: string;
  totalevents: string; // Consider using a more specific type if possible
  sport: string; // Consider using a more specific type if possible
  src: string;
}
export default function Homepage({
  title,
  totalevents,
  sport,
  src,
}: CardProps) 
{
    return (
      <>
      <div className='lg:pl-[3.9rem] pl-[1.9rem] flex flex-row'>
                <h1 className='text-white font-bold font-titleFont pb-5'>Sports</h1>
            </div>
    <div className='flex justify-center'>

        <div className='lg:w-[1388px] lg:h-[673px] w-[421px] h-auto gap-6 flex flex-col lg:flex-row'>
            
            <Card title="Sacramento River Cats" totalevents="48 Events" sport="Baseball" src="img1.jpg" />
            <Card title="Las Vegas Aviators" totalevents="28 Events" sport="Baseball" src="img4.jpg" />
            <Card title="New Jersey Devils" totalevents="15 Events" sport="Ice Hockey" src="img3.jpg" />
            <Card title="Las Vegas Aviators" totalevents="28 Events" sport="Baseball" src="img4.jpg" />
            <Ad src="img8.jpg" />
        </div>
    </div>
    </>
    );
  }
  
