import { Link } from 'react-router-dom';
import { useState } from 'react';
import './NavbarStyle.css';
import {FaBars,FaTimes} from 'react-icons/fa';
function Navbar(){
    const[click,setClick]=useState(false);
    const handleClick=()=>setClick(!click);
    const [color,setColor]=useState(false);

    const changeColor=()=>{
        if(window.scrollY>=100){
            setColor(true);
        }
        else{
            setColor(false);
        }
    }
    window.addEventListener('scroll',changeColor)
    return(
        <div className={color ? 'header header-bg' : 'header'}>
           <Link to='/'><h1>ONE LIFE</h1></Link> 
            <ul className='nav-menu'>
                <Link to='/'><li>Home</li></Link>
                <Link to='/pricing'><li>Pricing</li></Link>
                <Link to='/training'><li>Training</li></Link>
               <Link to='/contact'> <li>Contact Us</li></Link>
            </ul>
            <div className="hamburger" onClick={handleClick}>
              {click ? (<FaTimes size={20} style={{color:'#fff'}}/>) : (<FaBars size={20} style={{color:'#fff'}}/>)}
            </div>

        </div>
    )
}
export default Navbar;