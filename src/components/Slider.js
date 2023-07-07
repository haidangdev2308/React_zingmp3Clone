import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
//useSelector để lấy dữ liệu từ redux

const Slider = () => {
    const {banner} = useSelector(state => state.app) //state đại diện các states của store lưu giữ
    // console.log(banner);

    useEffect( () => { 
      const sliderEls = document.getElementsByClassName('slider-item')
      for(let i = 0; i < sliderEls.length; i++) {
        if( i < 3) {
          sliderEls[i].style.cssText = 'display: none'
        } else {
          sliderEls[i].style.cssText = 'display: block'
        }
      }
    },[])

  return (
    <div className='flex gap-4 w-full overflow-hidden px-[59px] pt-[32px]'>
      {
        banner?.map(item => 
          (<img
            key={item.encodeId}
            src={item.banner}
            className='slider-item flex-1 object-contain w-[32%] rounded-lg'
          />)
        )
      }
    </div>
  )
}

export default Slider