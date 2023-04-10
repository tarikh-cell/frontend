import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from './components/Landing';
import Home from './components/HomePage';
import Basket from './components/Basket';
import ViewProduct from './components/ViewProduct';
import Products from './components/Products';
import Checkout from './components/Checkout';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Landing />} />
        <Route path="Home" element={<Home />}>
          <Route path="Products" element={<Products />} />
          <Route path="Basket" element={<Basket />} />
          <Route path="ViewProduct" element={<ViewProduct />} />
          <Route path="Checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}