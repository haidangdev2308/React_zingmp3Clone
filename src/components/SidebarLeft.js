import React from 'react'
import logo from '../assets/logo.svg'

const SidebarLeft = () => {
  return (
    <div className='text-white'>
        <div className='w-full pl-[25px] pr-[28px] h-[70px] flex items-center'>
            <img src={logo} alt="logo" className='w-[120px] h-[40px]' />
        </div>
    </div>
  )
}

export default SidebarLeft