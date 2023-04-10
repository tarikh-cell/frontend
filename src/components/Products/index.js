import './index.css';
import thobeimg from './thobe.jpg'
import abayaimg from './abaya.jpg'
import { useContext, useEffect, useState } from 'react';
import SettingsContext from '../../SettingsContext';
import { useNavigate } from "react-router-dom";

export default function Products() {
  const { type, updateType, theme, addToCart } = useContext(SettingsContext);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filteredproducts, setFilteredProducts] = useState([]);
  const [addedItem, setAddedItem] = useState();
  const [ isAlertVisible, setIsAlertVisible ] = useState(false);
  let filterColours = ["black", "white", "darkgrey", "grey", "beige", "blue", "green", "pink", "brown"]
  let filterSizes = [[0,15], [16,25], [26,35], [36,50], [51,150]]
  const [filterColour, setFilterColour] = useState("");
  const [filterSize, setFilterSize] = useState([1,200])
  const thobe = [{image: thobeimg, name: 'Thobe', color: 'black', price: '50'}, {image: thobeimg, name: 'Thobe', color: 'green', price: '25'}, {image: thobeimg, name: 'Thobe', color: 'blue', price: '15'}]
  const abaya = [{image: abayaimg, name: 'Long Abaya', color: 'black', price: '35'}, {image: abayaimg, name: 'Abaya', color: 'pink', price: '15'}]

  useEffect(()=>{
    if (type === 'Thobe') {
        setProducts(thobe)
        setFilteredProducts(thobe)
    } else {
        setProducts(abaya)
        setFilteredProducts(abaya)
    }
  }, [type])

  const filterProducts = (event) => {
    if (event.key === 'Enter') {
      setFilteredProducts(products.filter((val) => val.name.includes(event.target.value)))
    }
  }

  const SearchBar = () => {
    return(
      <input type='text' className='search' placeholder='Search...' onKeyDown={(e) => filterProducts(e)} style={{backgroundColor: theme.primary, color: theme.secondary}} />
    )
  }

  const SearchFilters = () => {
    return(
      <div className='filters'>
        <p className='filter-text'> Filter by:</p>
        <div className='filter' style={{color: theme.text}}>
          Style
        </div>
        <div className='filter' style={{color: theme.text}}>
          Color
        </div>
        <div className='filter' style={{color: theme.text}}>
          Price
        </div>
      </div>
    )
  }

  const AddedItem = () => {
    return(
      <div className='basket-item' style={{backgroundColor: theme.primary, color: theme.text}}>
        <h2 className='cart-title'><ion-icon name="bag-handle-outline"></ion-icon>Added To Cart</h2>
        <table>
          <tbody>
            <tr className='cart-item'>
              <td><img className='cart-image' src={addedItem.image} alt={addedItem.name} /></td>
              <td><p>{addedItem.name}</p></td>
              {/* <td><p>{addedItem.color}</p></td> */}
              {/* <td><p>1</p></td> */}
              <td><p>£{addedItem.price}.00</p></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

  const AddItemToCart = (value) => {
    addToCart(value);
    setAddedItem(value);
    setIsAlertVisible(true);
    setTimeout(() => {
      setIsAlertVisible(false);
    }, 2000);
  }

  const filterBy = () => {
    // filteredproducts
    setFilteredProducts(filteredproducts.filter((val) => val.color.includes(filterColour))
    .filter((val) => filterSize[0] < parseInt(val.price) && filterSize[1] >= parseInt(val.price)))
  }

  const clearSelection = () => {
    setFilteredProducts(products)
    setFilterColour("")
    setFilterSize([1,200])
  }

  const Filter = () => {
    return(
      <div className='Filter' style={{backgroundColor: theme.primary, color: theme.text}}>
        <p className='filter-label' style={{width: '100%', textAlign: 'center'}}>Filter By: <ion-icon name="funnel-outline"></ion-icon></p>
        <p className='filter-label'>Type:</p>
        <div className='links'>
          <button onClick={() => updateType("Thobe")} style={{color: 'inherit'}}><p className='size-filter filter-label'>Thobe</p></button>
          <button onClick={() => updateType("Abaya")} style={{color: 'inherit'}}><p className='size-filter filter-label'>Abaya</p></button>
        </div>
        <p className='filter-label'>Color:</p>
        {filterColours.map((value) => {
          return(
            <button key={value} className='color-filter' onClick={() => setFilterColour(value)} style={{outlineColor: filterColour === value ? theme.text : null, backgroundColor: value}}></button>
          )
        })}
        <p className='filter-label'>Price:</p>
        {filterSizes.map((values, index) => {
          return(
            <button key={index} className='size-filter' onClick={() => setFilterSize(values)} style={{color: filterSize[0] === values[0] ? 'blue' : theme.text}}>{values[0]}-{values[1]}</button>
          )
        })}
        <p></p>
        <button className='filter' onClick={() => clearSelection()} style={{backgroundColor: theme.background, color: theme.text}}>Clear</button>
        <button className='filter' onClick={() => filterBy()} style={{backgroundColor: theme.background, color: theme.text}}>Submit</button>
      </div>
    )
  }

  return (      
    <div className="Products" style={{backgroundColor: theme.background}}>
      
      {isAlertVisible && <AddedItem />}
      <SearchBar />
      {/* <SearchFilters /> */}

      <div className='main'>
        <Filter />
        {filteredproducts.length === 0 ?
          <div className='empty-message' style={{color: theme.text}}>
            <ion-icon name="storefront-outline"></ion-icon>
            <p>There are no items that match your search ...</p>
          </div>
          :
          <div className='items'>
            {filteredproducts.map((value, id) => {
              return (
                <div key={id} className='item' style={{backgroundColor: theme.primary}}>
                  <button className='image' onClick={() => navigate("/Home/ViewProduct", { state: {val: value}})}>
                      <img className='item-image' src={value.image} alt={value.name} />
                  </button>
                  <p className='name' style={{color: theme.text}}>{value.name}</p>
                  <p className='color' style={{color: theme.text}}>{value.color}</p>
                  <p className='price'>£{value.price}.00</p>
                  <button className='filter' style={{backgroundColor: theme.background, color: theme.text}} onClick={() => AddItemToCart(value)}>Add to Cart</button>
                </div>
              )
            })}
          </div>}
      </div>
    </div>
  );
}