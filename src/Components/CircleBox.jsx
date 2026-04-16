import React from 'react'

const CircleBox = ({text,src}) => {
  return (
    <>
       <div className='size-50 border-2 border-white rounded rounded-xl overflow-hidden '>
            <div className='h-2/3 w-full'>
                <img src={src} alt="" />
            </div>
               <div className='h-1/3 text-white flex justify-center items-center cursor-pointer font-semibold uppercase'>
                 {text}
               </div>
       </div>
    </>
  )
}

export default CircleBox