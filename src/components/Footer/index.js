import { NavLink } from 'react-router-dom';
import './index.css';

export default function Footer() {  
  return (
    <div className="Footer" style={{backgroundColor: '#1C1C27', color: '#fff'}}>
        <div className='footer-links'>
            <div className='section'>
                <NavLink exact="true" activeclassname="active" className="nav-logo" to="/">
                    <h2 className='footer-logo'>Elegant Wear</h2>
                </NavLink>
            </div>

            <div className='section'>
                <p>Quick Links</p>
                <NavLink exact="true" activeclassname="active" to="/" style={{color: 'inherit'}}>
                    <p className='quick-link'>Home</p>
                </NavLink> 
                <NavLink exact="true" activeclassname="active" to="/Home/Products" style={{color: 'inherit'}}>
                    <p className='quick-link'>Products</p>
                </NavLink> 
                <NavLink exact="true" activeclassname="active" to="/Home/Basket" style={{color: 'inherit'}}>
                    <p className='quick-link'>Basket</p>
                </NavLink> 
            </div> 

            <div className='section'>
                <p>Our mission</p>
                Luxury Wear aims to inspire everyone to live and dress modestly. We pride ourselves in delivering the highest quality modest- wear for Men and Women, all at an affordable price.
            </div>

            <div className='section'>
                <p>Contact</p>
                <label>Phone: </label><a href="tel:+7400000000">+7400000000</a><p></p>
                <label>Email: </label><a href="mailto: boss@h.labs.com">boss@h.labs.com</a>
            </div>
        </div>

        <div>
            <a className='social-link'><ion-icon name="logo-instagram"></ion-icon></a>
            <a className='social-link'><ion-icon name="logo-twitter"></ion-icon></a>
            <a className='social-link' href='https://www.youtube.com/@h-labs'><ion-icon name="logo-youtube"></ion-icon></a>
        </div>

        <p>Powered by <a href='www.hlabs.com'>H-labs.</a></p>
    </div>
  );
}