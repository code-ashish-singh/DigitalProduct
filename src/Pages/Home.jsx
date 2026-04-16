import React from 'react'
import Header from '../Components/Header'
import CircleBox from '../Components/CircleBox'

const Home = () => {
  return (
    <>
            <div className='min-h-screen w-full bg-[#1C1C1C]'>
                 <Header/>
                 <div className='h-[80%] w-full'>
                    <img className='h-full w-full object-cover ' src="../../public/home.jpg" alt="home-jpg" />
                 </div>
                 <div className='min-h-30 w-full px-10 py-5 flex gap-5 flex-nowrap '>
                        <CircleBox 
                        text= "electronics"
                        src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIa0OMnJAVJS8HS9fyCkGBZrRXmtHVGa93mQ&s"
                        />
                        <CircleBox
                         text="smartphones" 
                         src = "https://www.sify.com/wp-content/uploads/2024/11/smart-phones.webp"
                         />
                         <CircleBox 
                         text="laptops"
                         src= "https://intelcorp.scene7.com/is/image/intelcorp/laptop-marquee-16x9:1920-1080?wid=480&hei=270&fmt=webp-alpha"
                          />
                        <CircleBox 
                        text= "groceries"
                        src= "https://www.bankrate.com/2020/08/01170557/How-to-save-money-on-groceries.jpeg?auto=webp&optimize=high&crop=16:9"
                        />
                          <CircleBox text = "fragrances" />
                        <CircleBox text="jewelery"/>
                        

                 </div>
            </div>
    </>
  )
}

export default Home