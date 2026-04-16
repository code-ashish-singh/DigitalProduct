import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <div className='flex  p-10 justify-between'>
            <h4 className='text-[#8ED6FE] flex-semibold text-4xl font-[cursive] '>DigitalProduct</h4>
            <ul className='flex gap-10 text-2xl font-semibold text-white'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/collection'>Collection</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
   
            </ul>
        </div>
    </>
  )
}

export default Header