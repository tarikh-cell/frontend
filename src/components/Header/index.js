import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SettingsContext from '../../SettingsContext';
import Login from '../Login';
import './index.css';

export default function Header() {
  const { updateType, mode, theme, updateTheme } = useContext(SettingsContext);
  const [hyt, setHyt] = useState('0px');

  const reSize = () => {
    if (hyt === '0px') {
      setHyt('500px')
      window.scrollTo(0,0)
    } else {
      setHyt('0px')
    }
  }
  
  return (
    <div style={{}}>
      <div className='drop' style={{width: '100%', height: hyt, overflow: 'hidden'}}><Login setHeight={setHyt} /></div>
      <div className="Header">
        <NavLink exact="true" activeclassname="active" className="nav-logo" to="/Home/Products">
          <h2 style={{color: theme.text}}>Elegant Wear</h2>
        </NavLink>
        <div className='links' style={{color: theme.text}}>
          <button onClick={() => updateType("Thobe")} style={{color: 'inherit'}}><p className='link'>Thobe</p></button>
          <button onClick={() => updateType("Abaya")} style={{color: 'inherit'}}><p className='link'>Abaya</p></button>
        </div>   
        <div className='mode' style={{color: theme.text}}>
          <NavLink exact="true" activeclassname="active" className='icon' to="/Home/Basket" style={{color: 'inherit'}}>
            <ion-icon name="cart-outline"></ion-icon>
          </NavLink>
          {mode === "light" ? 
          <button className='icon' onClick={() => updateTheme("dark")} style={{color: 'inherit'}}><ion-icon name="moon-outline"></ion-icon></button>:
          <button className='icon' onClick={() => updateTheme("light")} style={{color: 'inherit'}}><ion-icon name="sunny-outline"></ion-icon></button> }   
          {/* <NavLink exact="true" className='icon' to="/Login"  style={{color: 'inherit'}}></NavLink>   */}
          <button className='icon' onClick={() => reSize()} style={{color: 'inherit'}}><ion-icon name="person-outline"></ion-icon></button>
        </div>
      </div>
    </div>
  );
}