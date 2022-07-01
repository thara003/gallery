
import { Button } from '@material-tailwind/react';

export default function Header() {
  return (
//     <div class="flex justify-center items-center w-screen h-screen ">
//   <div class="w-1/3 h-60 relative flex flex-col justify-center items-center">
//       <div class="font-medium text-xl my-3"><h1 className="text-5xl font-bold text-center">Gallery</h1></div>
//       <div class="text-sm my-2"><p className="col-center-2 col-span-4 font-bold text-center">
//            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
//            euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi,
//            eu consectetur nisi nisl euismod, consectetur nisi nisl euismod.
//          </p></div>
//   </div>
//  </div>
<div className='max-w-screen-lg mx-auto px-3 items-center justify-center flex flex-col'>
    <div className="pt-24 items-center justify-center flex flex-col">
      <div className="text-center">
        <h1 className="text-5xl font-serif font-bold uppercase underline decoration-blue-500/30 text-center">Gallery</h1>
        </div>
        <div className="text-center w-2/3">
        <p className="pt-5 text-center text-gray-600 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        </p>
        </div>
        </div>
        <div className="flex gap-6 pt-12">
        <Button variant="gradient" className='focus:outline-none focus:ring focus:ring-300'>
        {/* <p>All</p> */}
        <a href="#" className="text-white active">
          All</a>
      </Button>
      <Button variant="gradient" className='focus:outline-none focus:ring focus:ring-300'>
        <p>Events-2020</p>
      </Button>
      <Button variant="gradient" className='focus:outline-none focus:ring focus:ring-300'>
        <p>Events-2021</p>
      </Button>
      <Button variant="gradient" className='focus:outline-none focus:ring focus:ring-300'>
        <p>Events-2022</p>
      </Button>
    </div>
        </div>
  );
}
