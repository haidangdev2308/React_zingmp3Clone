import React from 'react'
import { useSelector } from 'react-redux'
//useSelector để lấy dữ liệu từ redux

const Slider = () => {
    const {banner} = useSelector(state => state.app) //state đại diện các states của store lưu giữ
    console.log(banner);
  return (
    <div>Slider</div>
  )
}

export default Slider