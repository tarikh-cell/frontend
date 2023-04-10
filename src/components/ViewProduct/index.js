import './index.css';
import { useContext, useState } from 'react';
import SettingsContext from '../../SettingsContext';
import { useLocation } from 'react-router-dom';

export default function ViewProduct({ state }) {
  let m = useLocation()
  let val =m.state.val;
  const { theme } = useContext(SettingsContext);
  const [colors] = useState(val.color.split('/'));
  
  const [open, setOpen] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [colorChioce, setColorChoice] = useState(colors[0]);
  let length = [1,2,3,4,5,6,7,8,9,10]

  return (
    <div className="ViewProduct" style={{backgroundColor: theme.background}}>
      <div className='view-items' style={{backgroundColor: theme.primary, color: theme.text}}>  

        <div className='view-image'>
          <div className='img-container'>
            <img className='item-image' src={val.image} alt={val.name} />
          </div>
        </div>

        <div className='view-details'>
          <p className='view-name' style={{color: theme.secondary}}>{val.name}</p>


          <p className='view-color' style={{color: theme.secondary}}>Choose color:</p>
            {colors.map((value) => {
              return(
                <button key={value} className='color-button' style={{backgroundColor: value === colorChioce ? '#8F90A6' : '#fff' }} onClick={() => setColorChoice(value)}>{value}</button>
              )
            })}

          <div>
            <p className='number-input'>Quantity:</p>
            <div className='view-quantity'>
              {open ? <button className='quantity-button' onClick={() => setOpen(false)}>{quantity}</button> :
                length.map((value) => {
                  return(<button key={value} className='quantity-button' onClick={() => {setQuantity(value);setOpen(true)}}>{value}</button>)
                })
              }
            </div>
          </div>
          
          <p className='view-price'>£{val.price * quantity}.00</p>
          <p>Description:</p>
          <p className='view-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </div>
  );
}