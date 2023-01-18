import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/24/outline"
import { useEffect, useState } from "react"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Hero() {
    let backgrounds = [{
      id:0,
      image:"md:bg-[url('https://hustlersheaven.web.app/static/media/man_in_yellow_hoodie.f57cb817dcc4e7c20c85.jpg')] bg-[url('https://hustlersheaven.web.app/static/media/man_in_yellow_hoodieMob.6733cd3e8402f89194a0.jpg')]",
      title:"Premium Collection"
    },{
      id:1,
      image:"md:bg-[url('https://hustlersheaven.web.app/static/media/hustlers_heaven_fabric.32e206c0c32c0abe2229.jpg')] bg-[url('https://hustlersheaven.web.app/static/media/hustlers_heaven_fabricMob.8deb1a25ed039ee50be6.jpg')]",
      title:"High Quality Fabric"
    }]
    const [background,setBackground] = useState(backgrounds[0]);
    useEffect(()=>{
      setInterval(()=>{
        if(background.id === backgrounds[1].id){
          setBackground(backgrounds[0]);
        } else if(background.id === backgrounds[0].id) {
          setBackground(backgrounds[1])
        }
      },5000)
    },[])
    return (
      <div className="reative overflow-hidden bg-white w-full md:h-[650px] h-[500px]">
        <div className={classNames("relative transition-all overflow-hidden w-auto md:h-[650px] h-[500px] bg-cover bg-no-repeat bg-fixed bg-opacity-90",background.image)}>
        <div className="absolute md:top-[50%] top-[85%] w-full text-gray-100 z-40">
             <div className="flex w-full justify-between px-4">
               <div><ArrowLeftCircleIcon className="w-10 h-10 transition-all hover:h-12 hover:w-12 hover:cursor-pointer" onClick={()=>{
                 if(background.id === backgrounds[1].id){
                   setBackground(backgrounds[0]);
                 } else {
                   setBackground(backgrounds[1])
                 }
               }}/></div>
               <div><ArrowRightCircleIcon className="w-10 h-10 transition-all hover:h-12 hover:w-12 hover:cursor-pointer" onClick={()=>{
                 if(background.id === backgrounds[0].id){
                   setBackground(backgrounds[1]);
                 } else {
                   setBackground(backgrounds[0])
                 }
               }}/></div>
             </div>
        </div>
        <div className="absolute md:top-[40%] w-full text-gray-100 top-[50%]">
             <div className="flex w-full justify-between items-center flex-col">
              <p className="font-bold font-serif md:text-6xl text-3xl">{background.title}</p>
              <button
                className="mt-8 rounded-md border border-transparent bg-indigo-600 py-3 px-4 md:text-base text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Shop Now
              </button>
             </div>
        </div>
        <div className="absolute w-full text-gray-100 bottom-1 text-center flex justify-center">
            <div className={classNames(background.id === 0 ? "text-white":"text-gray-800")}>__</div>
            <div className={classNames(background.id === 1 ? "text-white":"text-gray-800")}>__</div>
        </div>
        </div>
        
      </div>
    )
  }
  