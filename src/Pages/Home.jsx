import React, { useState } from 'react'
import Header from '../Components/Header'
import CircleBox from '../Components/CircleBox'
import axios from 'axios'
import Card from '../Components/Card'
const Home = () => {
  let api1 = " https://fakestoreapi.com/products/category/"
  let api2 = "https://dummyjson.com/products/category/"
  let api1Item = [
                  "electronics",
                  "jewelery",
                  "men's clothing",
                  "women's clothing"
                ]
  const [data,setData] = useState()
  const callAPI = async (category)=>{
    let res = null
      if(api1Item.includes(category)){
        alert('api 1 is call')
         res = await axios.get(api1+category)
         res = res.data
      }
      else{
        alert('api two is call')
        res = await axios.get(api2+category)
        res = res.data.products
      }
      
      console.log(res)
  }
  return (
    <>
            <div className='min-h-screen w-full bg-[#1C1C1C] pb-10'>
                 <Header/>
                 <div className='h-[80%] w-full'>
                    <img className='h-full w-full object-cover ' src="../../public/home.jpg" alt="home-jpg" />
                 </div>
                 <div className='min-h-30 w-full px-10 py-5 flex gap-2 flex-wrap '>
                        <CircleBox 
                        text= "electronics"
                        src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIa0OMnJAVJS8HS9fyCkGBZrRXmtHVGa93mQ&s"
                        handleClick = {callAPI}
                        />
                        <CircleBox
                         text="smartphones" 
                         src = "https://www.sify.com/wp-content/uploads/2024/11/smart-phones.webp"
                         handleClick = {callAPI}
                         />
                         <CircleBox 
                         text="laptops"
                         src= "https://intelcorp.scene7.com/is/image/intelcorp/laptop-marquee-16x9:1920-1080?wid=480&hei=270&fmt=webp-alpha"
                         handleClick = {callAPI}
                          />
                        <CircleBox 
                        text= "groceries"
                        src= "https://www.bankrate.com/2020/08/01170557/How-to-save-money-on-groceries.jpeg?auto=webp&optimize=high&crop=16:9"
                        handleClick = {callAPI}
                        />
                          <CircleBox 
                          text = "fragrances"
                          src = "https://www.pureoilsindia.com/storage/media/96fa70ef8bfdf078cb7e385ee9188bff.png"
                          handleClick = {callAPI}
                          />
                        <CircleBox 
                        text="jewelery"
                        src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoWqm9J63_3_QWM8Mj72J9Xh22tqBX6pZJeg&s"
                        handleClick = {callAPI}
                        />
                        

                 </div>
                 <div className='px-10'>
                    <Card/>
                 </div>
            </div>
    </>
  )
}

export default Home