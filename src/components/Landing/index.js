import './index.css';
import { NavLink } from 'react-router-dom'
import { useContext } from 'react';
import SettingsContext from '../../SettingsContext';

export default function Landing() {
  const { updateType } = useContext(SettingsContext);
    return (
      <div className="container">
        <h2 className='logos'>Elegant &nbsp;&nbsp; Wear &nbsp;&nbsp;</h2>
        <NavLink exact="true" activeclassname="active" className="thobe-link" onClick={() => updateType("Thobe")} to="/Home/Products">
          {/* <h2 className='logo'>Elegant</h2> */}
          <div className='bg-t'>
            <h1>THOBES</h1>
          </div>
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="abaya-link" onClick={() => updateType("Abaya")} to="/Home/Products">
            {/* <h2 className='logo'>Wear</h2> */}
            <div className='bg-a'>
              <h1>ABAYAS</h1>
            </div>
        </NavLink>
      </div>
    );
  }