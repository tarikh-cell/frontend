import { useContext, useState } from 'react';
import SettingsContext from '../../SettingsContext';
import './index.css';
import { NavLink } from 'react-router-dom';

export default function Basket() {
  const { theme, cart, removeItemFromCart } = useContext(SettingsContext);
  let cost = 0;

  const decreaseQuantity = (quantity, setQuantity) => {
    if (quantity != 1) {
      setQuantity(quantity-1)
    }
  }

  const increaseQuantity = (quantity, setQuantity) => {
    if (quantity != 10) {
      setQuantity(quantity+1)
    }
  }

  const Item = ({name, image, color, price}) => {
    const [quantity, setQuantity] = useState(1);

    return(
      <div className='cart-item'>
        <h3>{name}</h3>
        <div className='item-desc'>
          <img className='cart-image' src={image} alt={name} />
          <div>
            <p>Article Id: 1</p>
            <p>Color: {color}</p>
            <p>Size: M</p>                    
          </div>
          <p>£{price}.00</p>
          <div className='change-quantity'>
            <button onClick={() => decreaseQuantity(quantity, setQuantity)}><ion-icon name="remove-outline"></ion-icon></button>
            <p>{quantity}</p>
            <button onClick={() => increaseQuantity(quantity, setQuantity)}><ion-icon name="add-outline"></ion-icon></button>
          </div>
          <p>£{price*quantity}.00</p>
          <button style={{color: theme.text}} onClick={() => removeItemFromCart(name)}><ion-icon name="trash-outline"></ion-icon></button>
        </div>
        <div className='line'></div>
      </div>
    )
  }
  
  return (
    <div className='Basket' style={{backgroundColor: theme.background, color: theme.text}}>
        <h2 className='cart-title'><ion-icon name="bag-handle-outline"></ion-icon> Your Cart</h2>
        {cart.length === 0 ?
        <div className='empty-message'>
          <ion-icon name="storefront-outline"></ion-icon>
          <p>There is currently nothing in your trolley ...</p>
        </div>
        :
        <div className='basket-wrapper'>   
          <div className='cart' style={{backgroundColor: theme.primary}}>
            {cart.map((value, index) => {
              cost=cost+Number(value.price);
              return(
                <Item key={index} name={value.name} image={value.image} price={value.price} color={value.color} />
              )
            })}
          </div>

          <div className='checkout'>
            <input className='promo-text' placeholder='promo-code' style={{backgroundColor: 'inherit', borderColor: theme.text}}></input><button className='promo-button'  style={{borderColor: theme.text}}>Apply</button>
            <div className='row'><label>Items sub total:</label><p>.00</p></div>
            <div className='row'><label>Delivery fee:</label><p>.00</p></div>
            <div className='row'><label>Discount:</label><p>.00</p></div>
            <div className='line'></div>
            <div className='row'><label>Total:</label><p>£{cost}.00</p></div>
            <NavLink exact="true" activeclassname="active" to="/Home/Checkout"><p className="checkout-tag" style={{backgroundColor: theme.primary, color: theme.text}}>Proceed to Checkout</p></NavLink>
          </div>
        </div>
        }
    </div>
  );
}