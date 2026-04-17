import React from 'react'

const CircleBox = ({text,src,handleClick}) => {
  return (
    <>
       <div className='size-50 border-2 border-white rounded rounded-xl overflow-hidden shrink-none '>
            <div
             className='h-2/3 w-full'
             >
                <img 
                className='h-full w-full'
                 src={src} 
                 alt={text} />
              </div>
               <div 
               onClick={()=>{handleClick(text)}}
                className='h-1/3 text-white flex justify-center items-center cursor-pointer font-semibold uppercase bg-green-600'>
                 {text}
               </div>
       </div>
    </>
  )
}

export default CircleBox