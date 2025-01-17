import React from 'react'
import shirt from './assets/shirt.jpg'
import pant from './assets/pant.jpg'
import shoes from './assets/shoe.jpg'
import assesories from './assets/assesories.jpg'

const Categories:React.FC = () => {
  return (
    <div className="px-5 font-sora pb-20">
            <h1 className="text-base pb-3 font-semibold">Shop by categories</h1>
      <div  className="w-full flex gap-5 justify-between  items-center overflow-x-scroll  scrollbar-hide scroll-smooth">
        <div className="w-[20rem] h-[14.6rem] shrink-0">
            <img src={shirt} alt="shirt" className="h-[85%] w-full" />
            <span className="">Shirt</span>
        </div>
        <div className="w-[20rem] h-[14.6rem] shrink-0" >
            <img src={pant} alt="shirt" className="h-[85%] w-[100%] border" />
            <span className="">Trouser</span>
        </div>
        <div className="w-[20rem] h-[14.6rem] shrink-0">
            <img src={assesories} alt="shirt" className="h-[85%] w-[100%] border" />
            <span className="">Assesories</span>
        </div>
        <div className="w-[20rem] h-[14.6rem] shrink-0">
            <img src={shoes} alt="shirt" className="h-[85%] w-[100%]" />
            <span className="">Shoes</span>
        </div>
        
      </div>
       
    </div>
  )
}

export default Categories;