
import { IoBagHandleOutline } from "react-icons/io5";

import './index.css'

import plant2 from './../../assets/plant2.png';
import plant3 from './../../assets/plant3.png';

const TrenduPlants = () => {
  return (
    <div className='trendy-plants-initial-cont'>

        <h1 className="trendy-plants-main-title">Our Trendy Plants</h1>
        <div className="trendy-plants-item-conts">
            <div className="trendy-plants-image-cont">
                <img src={plant2} alt="plant" className="plant-2-trendy"/>
            </div>
            <div className="trendy-planet-item-inner-cont">
                <h1 className="trendy-planet-item-title">For Your Desks Decorations</h1>
                <p>I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!</p>
                <h1 className="trendy-planet-item-price">Rs. 599 /-</h1>
                <div className="trendy-planet-item-button-cont">
                    <button>Explore</button>
                    <IoBagHandleOutline />
                </div>
            </div>
        </div>
        <div className="trendy-plants-item-conts trendy-plants-middle-cont">
            <div className="trendy-plants-image-cont trendy-plants-middle-con-image">
                <img src={plant3} alt="plant" className="plant-3-trendy"/>
            </div>
            <div className="trendy-planet-item-inner-cont">
                <h1 className="trendy-planet-item-title">For Your Desks Decorations</h1>
                <p>The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming</p>
                <h1 className="trendy-planet-item-price">Rs. 399 /-</h1>
                <div className="trendy-planet-item-button-cont">
                    <button>Explore</button>
                    <IoBagHandleOutline />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default TrenduPlants
