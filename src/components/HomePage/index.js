import './index.css';
import Header from '../Header';
import Footer from '../Footer';
import { useContext } from 'react';
import SettingsContext from '../../SettingsContext';
import { Outlet } from 'react-router-dom';
export default function Home() {
  const { theme } = useContext(SettingsContext);
    return (
      <div className="Homepage" style={{backgroundColor: theme.background}}>
          <Header />
            <Outlet />
          <Footer />
      </div>
    );
  }