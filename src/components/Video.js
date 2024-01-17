import React from 'react';
import {Link} from 'react-router-dom'
import './Video.css';
import gymVideo from '../assets/video.mp4'

function Video(props) {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video' >
                <source src={gymVideo} type="video/mp4"/>

            </video>
            <div className='content'>
                <h1>
                    Improve your life now!
                </h1>
                <p>welcome to our gym</p>
            
            <div>
                <Link to='/training' className='btn'>Training</Link>
                <Link to='/contact' className='btn btn-light'>Launch</Link>
            </div>
            
        </div>
        </div>
    );
}

export default Video;