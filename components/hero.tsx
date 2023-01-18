import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

export default function Hero() {
    return (
      <div className="relative overflow-hidden bg-white w-full md:h-[650px] h-[500px] md:bg-[url('https://hustlersheaven.web.app/static/media/man_in_yellow_hoodie.f57cb817dcc4e7c20c85.jpg')] bg-cover bg-no-repeat bg-fixed bg-[url('https://hustlersheaven.web.app/static/media/man_in_yellow_hoodieMob.6733cd3e8402f89194a0.jpg')]">
        <div className="absolute md:top-[40%] top-[85%] w-full text-gray-100 z-40">
             <div className="flex w-full justify-between px-4">
               <div><ArrowLeftCircleIcon className="w-10 h-10 transition-all hover:h-12 hover:w-12 hover:cursor-pointer"/></div>
               <div><ArrowRightCircleIcon className="w-10 h-10 transition-all hover:h-12 hover:w-12 hover:cursor-pointer"/></div>
             </div>
        </div>
        <div className="absolute md:top-[30%] w-full text-gray-100 top-[50%]">
             <div className="flex w-full justify-between items-center flex-col">
              <p className="font-bold font-serif md:text-6xl text-3xl"> Premium Collection</p>
              <button
                className="mt-8 rounded-md border border-transparent bg-indigo-600 py-3 px-4 md:text-base text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Shop Now
              </button>
             </div>
        </div>
      </div>
    )
  }
  