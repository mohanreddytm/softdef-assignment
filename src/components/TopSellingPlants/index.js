import React from 'react'
import TopSellingPlantItem from '../TopSellingPlantItem'
import plant1 from '../../assets/plant1.png'
import plant2 from '../../assets/plant2.png'
import plant4 from '../../assets/plant4.png'
import plant5 from '../../assets/plant5.png'
import plant6 from '../../assets/plant6.png'
import plant7 from '../../assets/plant7.png' 

import './index.css'

const plants = [{
    id:1,
    image: plant1,
    title:"Aglaonema plant",
    desc:"The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care",
    price:300
},{
    id:2,
    image: plant2,
    title:"Plantain Lilies",
    desc:"Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,",
    price:380
},{
    id:3,
    image: plant4,
    title:"Cactus",
    desc:"It is known for their ability to thrive in arid environments",
    price:259
},{
    id:4,
    image: plant5,
    title:"Swiss cheese Plant",
    desc:"It is a popular tropical houseplant known for its distinctive, perforated leaves",
    price:400
},{
    id:5,
    image: plant6,
    title:"Sansevieria plant",
    desc:"It is a popular indoor plant admired for its striking appearance and low-maintenance nature.",
    price:450
},{
    id:6,
    image: plant7,
    title:"Agave plant",
    desc:"The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.",
    price:359
}
]

const TopSellingPlants = () => {
  return (
    <div className='selling-plants-cont'>
        <h1>Our Top Selling Plants</h1>
        <div>
            {plants.map(each => <TopSellingPlantItem key={each.id} item={each} />)}
        </div>
    </div>
  )
}

export default TopSellingPlants
