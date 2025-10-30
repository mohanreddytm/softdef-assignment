import './index.css';
import { IoPlay } from "react-icons/io5";
import { TiStar } from "react-icons/ti";
import { TiStarHalf } from "react-icons/ti";
import profile from './../../assets/femaleprofile.png';
import plant1 from './../../assets/plant1.png';
import { FaAngleRight } from "react-icons/fa6";

import HeaderContainer from '../../appstyle'
const HomePageOne = () => {
  return (
    <div className='home-page-1-initial-cont'> 
      <div className='home-page-left-cont'>
        <div className='home-page-left-1'>
            <h1>Earth's Exhale</h1>
            <p>
                "Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.
            </p>
            <div className='home-page-left-1-inner-cont'>
                <button>Buy Now</button>
                <IoPlay className="play-icon" />
                <p>Live Demo...</p>
            </div>
        </div>
        <div className='home-page-left-2'>
            <div className='home-page-left-2-profile-cont'>
                <HeaderContainer background={profile} className='profile-image'></HeaderContainer>
                <div className='profile-name-star-cont'>
                    <h1>Ronnie Hamill</h1>
                    <div>
                        <TiStar className="star-icon" />
                        <TiStar className="star-icon" />
                        <TiStar className="star-icon" />
                        <TiStar className="star-icon" />
                        <TiStarHalf className="star-icon" />
                    </div>
                </div>
            </div>
            <p>I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.</p>
        </div>
      </div>
      <div>
        
        <div className='home-right-cont'>
            <img src={plant1} alt="plant" className='home-1-plant-imge' />
            <div className='home-right-inner-1'>
                <h1>Indoor Plant</h1>
                
                <div>
                    <h1>Aglaonema plant</h1>
                    <FaAngleRight />
                </div>
                <button>Buy Now</button>
            </div>
            <div className='carousal-buttons'>
                <p></p>
                <p></p>
                <p></p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageOne;
