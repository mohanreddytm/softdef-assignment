import React from 'react'

import './index.css'

import profile1 from './../../assets/profile1.png'
import profile2 from './../../assets/profile2.jpg'
import profile3 from './../../assets/profile3.png'


import { TiStarHalf } from "react-icons/ti";

import HeaderContainer from '../../appstyle'

import { TiStar } from "react-icons/ti";

const reviews = [{
    id:1,
    profile:profile1,
    name:"Shelly Russel",
    comment:"Just got my hands on some absolutely awesome plants, and I couldn’t be happier!"
},{
    id:2,
    profile:profile2,
    name:"Lula Rolfson",
    comment:"Each one has its own unique charm and personality, and they’ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home."
},{
    id:3,
    profile:profile3,
    name:"Carol Huels",
    comment:"It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!"
}
]

const CustomerReview = () => {
  return (
    <div className='customer-review-initial-cont'>
        <div className='trendy-plants-main-title-cont'>
        <h1 className='trendy-plants-main-title'>Customer Review</h1>

            {/* <h1 className="trendy-plants-main-title">Our Top Selling Plants</h1> */}
        </div>
        <ul className='customer-reviews-cont'>
            {reviews.map(each =>
                <li>

                        <div className='customer-review-profile-cont curve-spacing-fix'>
                            <HeaderContainer background={each.profile} className='customer-profile'></HeaderContainer>
                            <div className='customer-review-profile-inner-cont'>
                                <h1>{each.name}</h1>
                                <div>
                                    <TiStar className="star-icon" />
                                    <TiStar className="star-icon" />
                                    <TiStar className="star-icon" />
                                    <TiStar className="star-icon" />
                                    <TiStarHalf className="star-icon" />
                                </div>
                            </div>
                        </div>
                        <p>{each.comment}</p>
                 
                </li>
            )}
        </ul>
    </div>
  )
}

export default CustomerReview
