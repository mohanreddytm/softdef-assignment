import React from 'react'
import { IoBagHandleOutline } from "react-icons/io5";

import './index.css'


const TopSellingPlantItem = (props) => {
    const {item} = props;
  return (
    <div className='plant-item-initial-cont'>
      <img src={item.image} alt="plant" />
      <div className='plant-item-image-cont'></div>
      <div className='plant-item-inner-cont'>
        <h1>{item.title}</h1>
        <p>{item.desc}</p>
        <div>
          <h1>Rs. {item.price} /-</h1>
          <IoBagHandleOutline />
        </div>
      </div>
    </div>
  )
}

export default TopSellingPlantItem
