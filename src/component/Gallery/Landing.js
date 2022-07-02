import React from 'react'
import GalleryCard from './GalleryCard'
import { Typography } from "@material-tailwind/react";

const Landing = () => {
  return (
    <div className="max-w-screen-lg mx-auto my-4 px-3">
        <div className="bg-slate-800 p-4 shadow-lg rounded-lg overflow-hidden">
        <Typography variant="h4" color="grey" className="m-2">Events -2020</Typography>
        <div className='flex flex-wrap items-center justify-center gap-6'>
        <GalleryCard />
        <GalleryCard />
        </div>
        </div>
        <div className="bg-slate-800 p-4 shadow-lg rounded-lg overflow-hidden">
        <Typography variant="h4" color="grey" className="m-2">Events -2021</Typography>
        <div className='flex flex-wrap items-center justify-center gap-6'>
        <GalleryCard />
        <GalleryCard />
        </div>
        </div>
        <div className="bg-slate-800 p-4 shadow-lg rounded-lg overflow-hidden">
        <Typography variant="h4" color="grey" className="m-2">Events -2022</Typography>
        <div className='flex flex-wrap items-center justify-center gap-6'>
        <GalleryCard />
        <GalleryCard />
        </div>
        </div>

        </div>
  )
}

export default Landing