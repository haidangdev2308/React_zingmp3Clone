import React from 'react'
import icons from '../ultis/icons'
import Search from './Search'

const { AiOutlineArrowLeft, AiOutlineArrowRight } = icons
//bọc trong span để viết sự kiện onclick
const Header = () => {
  return (
    <div className=' w-full flex justify-between items-center'>
        <div className='flex gap-6 items-center w-full'>
            <div className='flex gap-5'>
                <span><AiOutlineArrowLeft size={22} color='#bda8ab'/></span> 
                <span><AiOutlineArrowRight size={22} color='#bda8ab'/></span>
            </div>
            <div className='w-full'>
                <Search />
            </div>
        </div>
        <div className='text-[#787878]'>
            Login
        </div>
    </div>
  )
}

export default Header