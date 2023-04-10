import './index.css';
import { useContext } from 'react';
import SettingsContext from '../../SettingsContext';
import { NavLink } from 'react-router-dom';
import Ajram from './Ajram.jpg'

export default function Login({ setHeight }) {
  const { theme } = useContext(SettingsContext);
  
    return (
      <div className="containers" style={{backgroundColor: theme.background}}>
          <div className='credentials'>
            <div className='form' style={{backgroundColor: theme.primary}}>
              <h2 className='login-title' style={{color: theme.text}}>Login</h2>
              <input className='auth' style={{backgroundColor: theme.primary}} placeholder='Email' />
              <input className='auth' style={{backgroundColor: theme.primary}} placeholder='Password' />
              <button className='submit' style={{color: theme.text}}>Login</button>
              <p className='prompt' style={{color: theme.text}}>Don't have an account? <NavLink>Register</NavLink></p>
            </div>
          </div>
          <div className='background'>
            <button className='icon' onClick={() => setHeight('0px')} style={{color: theme.text, marginTop: '20px'}}><ion-icon name="close-outline"></ion-icon></button>
            <div className='circle circle1' style={{width: '30%', height: '30%', alignSelf: 'self-start'}}></div>
            <div className='circle circle4'></div>
            <div className='circle circle2' style={{width: '30%', height: '30%', backgroundColor: '#000'}}>
              <img src={Ajram} alt="Ajram" />
            </div>
            <div className='circle circle3'></div>
            {/* <div className='circle circle1' style={{width: '20%', height: '20%', alignSelf: 'self-end'}}></div> */}
          </div>
      </div>
    );
  }