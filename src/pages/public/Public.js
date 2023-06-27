import React from 'react'
import { Outlet } from 'react-router-dom'
//hiển thị con của route khi map với đường dẫn
import { SidebarLeft, SidebarRight } from '../../components'

const Public = () => {
  return (
    <div className='w-full flex bg-[#f9dbdb]'>
      <div className='w-[240px] flex-none'>
        <SidebarLeft/>
      </div>
      <div className='flex-auto'>
        <Outlet/>
      </div>
      <div className='w-[330px] flex-none'>
        <SidebarRight/>
      </div>
    </div>
  )
}

export default Public