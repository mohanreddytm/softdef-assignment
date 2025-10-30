import applogo from '../../assets/applogo.png'

import { FaRegCopyright } from "react-icons/fa";

import './index.css'

const FooterOne = () => {
    return(
        <div className='footer-one-initial-cont'>
            <div className='footer-left-one'>
                <div>
                    <img src={applogo} alt="App logo" />
                    <h1>FloraVision.</h1>
                </div>
                <p>"From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."</p>
                <div>
                    <h1>FB</h1>
                    <h1>TW</h1>
                    <h1>LI</h1>
                </div>
            </div>
            <div className='footer-middle-one'>
                <h1>Quick Link's</h1>
                <ul>
                    <li>Home</li>
                    <li>Type's Of Plant's</li>
                    <li>Contact</li>
                    <li>Privacy</li>
                </ul>
            </div>
            <div className='footer-last-one'>
                <h1>For Every update.</h1>
                <div>
                    <input type='text' placeholder='Enter Email' />
                    <button>SUBSCRIBE</button>
                </div>
                <p>FloraVision <FaRegCopyright /> all right reserve</p>
            </div>
        </div>
    )
}

export default FooterOne