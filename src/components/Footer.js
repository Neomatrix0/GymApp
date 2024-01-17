import React from 'react';
import './Footer.css';
import {FaFacebook,FaLinkedin,FaMailBulk,FaPhone,FaSearchLocation,FaTwitter} from 'react-icons/fa';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className="left">
                    <div className="location">
                        <FaSearchLocation size={20} style={{color:'#ffffff',marginRight:'2rem'}}/>
                    
                    <div>
                        <p>123 x street</p>
                        <h4>Italy</h4>
                    </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{color:'#ffffff',marginRight:'2rem'}}/>010-123-000</h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{color:'#ffffff',marginRight:'2rem'}}/>onelife@gym.com</h4>
                    </div>

                </div>
                <div className="right">
                    <h4>About the company</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Magni, numquam impedit? Alias ullam ipsa cumque deleniti.
                         Officia, illo mollitia, 
                        incidunt minima nobis vel nesciunt nam accusantium 
                        dignissimos vero soluta numquam?
                    </p>
                    <div className="social">
                        <FaFacebook size={30} style={{color:'#ffffff',marginRight:'1rem'}}/>
                        <FaTwitter size={30} style={{color:'#ffffff',marginRight:'1rem'}}/>
                        <FaLinkedin size={30} style={{color:'#ffffff',marginRight:'1rem'}}/>

                    </div>


                </div>
            </div>
            
        </div>
    );
}

export default Footer;