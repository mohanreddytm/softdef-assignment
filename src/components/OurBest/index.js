import './index.css'

import { FaChevronLeft , FaChevronRight} from "react-icons/fa";

import plant1 from '../../assets/plant1.png';

const OurBest = () => {
    return (
        <div className='our-best-initial-cont'>
            <div className='our-best-initial-title-cont'>
                <h1 className='trendy-plants-main-title'>Our Best o2</h1>

            </div>
            <div className='our-best-main-cont'>
            <img src={plant1} alt="plant" className='our-best-plant-image-for-mobile' />
                <div className='our-best-plant-image-cont'><img src={plant1} alt="plant" className='our-best-plant-image' /></div>
                <div className='our-best-main-cont-inner'>
                    <h1>We Have Small And Best O2 Plants Collection’s</h1>
                    <p>Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.</p>
                    <p>Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.</p>
                    <div className='our-best-main-cont-inner-button-cont'>
                        <button>Explore</button>
                        <div>
                            <FaChevronLeft />
                            <p><span>01</span>/04</p>
                            <FaChevronRight />
                        </div>
                    </div>
                </div>
            </div>
            <div className='our-best-carousal-effect'>
                <p></p>
                <p></p>
                <p></p>
            </div>
        </div>
    )
}

export default OurBest;