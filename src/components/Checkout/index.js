import { useContext } from 'react';
import SettingsContext from '../../SettingsContext';
import './index.css';

export default function Checkout() {
  const { theme, cart } = useContext(SettingsContext);
  
  return (
    <div className='Checkout' style={{backgroundColor: theme.background, color: theme.text}}>
        Checkout
    </div>
  );
}