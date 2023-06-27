import React from 'react'
import icons from '../ultis/icons'

const {HiOutlineSearch} = icons

const Search = () => {
  return (
    <div className='w-[440px] flex items-center bg-[#ecd0d0] rounded-[20px]'>
        <span className='text-[#868686] px-[10px]'>
            <HiOutlineSearch size={24}/>
        </span>
        <input 
            type="text" 
            className='outline-none px-[2px] placeholder:text-[#787878] placeholder:font-normal text-[15px] font-normal text-[#8a8585] bg-[#ecd0d0] rounded-[20px] h-[40px] w-full leading-[34px]'
            placeholder='Tìm kiếm bài hát, nghệ sĩ, lời bài hát...'
        />
    </div>
  )
}

export default Search