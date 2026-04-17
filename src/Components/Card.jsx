import React from 'react'

const Card = () => {
  return (
   <>
        <div className='w-80 min-h-60 bg-white rounded-2xl px-3 py-2 '>
            <div className='h-2/3 w-full'>
                    <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
            </div>
            <div className='h-1/3 w-full'>
                    <div>
                        <p className='text-gray-600 text-sm'>ELECTRONICS</p>
                        <p className="font-semibold">WD 2TB Elements Protable External Hard Drive...</p>
                        <p className='font-bold text-4xl'>$64</p>
                        <div className='flex items-center '>
                            <p className='text-gray-700 text-[0.8rem]'>
                                High capacity fast usb 3.0 storage. Reliablity for your photos videos and files
                            </p>
                            <button className='whitespace-nowrap px-2 h-10 text-white font-semibold py-1 bg-linear-to-r from-blue-500 from-blue-500 to-purple-600 rounded'>Add to cart</button>
                        </div>
                    </div>
            </div>

        </div>
   </>
  )
}

export default Card