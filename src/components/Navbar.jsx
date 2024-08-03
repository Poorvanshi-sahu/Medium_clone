import React from 'react'
import Write from "../assets/edit_box_line.svg"
import Bell from "../assets/notification_line.svg"
import Search from "../assets/search_line.svg"
import Menu from "../assets/menu_line.svg"

const Navbar = () => {
  return (
    <div className='section border-b-[1px] flex justify-between px-6 py-2.5 text-black text-sm w-full'>
         <div className='left flex'>
            <h1 className='text-3xl capitalize font-serif font-bold'>Medium</h1>
            <div className='hidden md:flex flex items-center bg-gray-light rounded-2xl w-24 ml-6 px-3 py-1'>
                <img src={Search} alt="search-icon" className='w-6 text-primary'/>
                <input type="text" className='focus:outline-none bg-gray-light px-4 rounded-2xl h-full' placeholder='Search' />
            </div>
         </div>
         <div className='right flex items-center' >
          <div className='hidden md:flex items-center'>
            <div className='flex items-center mr-8'>
                <img src={Write} alt="edit box" className='w-6' />
                <h3 className='text-primary ml-2'>Write</h3>
            </div>
            <div>
                <img src={Bell} alt="notification line" className='w-6 mr-8' />
            </div>
            <div className='w-8 h-8 rounded-full bg-secondary text-white flex justify-center items-center font-semibold text-lg'>
                P
            </div>
            </div>
            <div>
              <img src={Menu} alt="menu"  className='md:hidden w-6' />
            </div>
         </div>
    </div>
  )
}

export default Navbar