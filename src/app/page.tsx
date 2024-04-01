import Image from "next/image";
import Spotlight from "./pages/Spotlight";
import Homepage from "./pages/Homepage";

export default function Home() {
  return (
    <>
      <div className='bg-[#F7F7F8] min-h-screen'>
        <div className='pt-20'>
          <Homepage title={""} totalevents={""} sport={""} src={""} />
        </div>
        <div className='flex justify-center pb-20'>
          <Spotlight title={""} totalevents={""} sport={""} src={""} btn={""}/>
        </div>
      </div>
    </>
  );
}
