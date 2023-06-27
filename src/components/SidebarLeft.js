import React from 'react'
import logo from '../assets/logo.svg'
import { menuSidebar } from '../ultis/menu'
import { NavLink } from 'react-router-dom' //NavLink để viết những link trong navbar

const notActiveStyle = 'hover:text-[#b72479] border-solid border-transparent border-l-[3px] py-[12px] px-[21px] font-medium flex items-center gap-3 text-[15px] text-[#4d4b54]'
const activeStyle = 'border-solid border-l-[3px] py-[12px] px-[21px] font-medium flex items-center gap-3 text-[15px] text-[#b72479] border-[#b72479] bg-[rgba(0,0,0,0.05)]'

const SidebarLeft = () => {
  return (
    <div className='flex flex-col bg-[#fbe6e6]'>
        <div className='w-full pl-[25px] pr-[28px] h-[70px] flex items-center'>
            <img src={logo} alt="logo" className='w-[120px] h-[40px]' />
        </div>

        <div className=' flex flex-col'>
          {
            menuSidebar.map( item => (
              <NavLink
                to={item.path}
                key={item.path}
                end={item.end}
                  className= { ({isActive}) => isActive? activeStyle : notActiveStyle } //  biến isActive là của NavLink
              >
                {item.icon}
                <span>{item.text}</span>
              </NavLink>
            ))
          }
        </div>
    </div>
  )
}

export default SidebarLeft