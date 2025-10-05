import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets'; // Adjust the path as per your project structure
import { StoreContext } from '../../context/StoreContext';
import './Navbar.css';

const Navbar = (props) => {
  const { setShowLogin } = props; // Destructure setShowLogin from props
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
      <ul className="navbar-menu">
        <li>
          <Link to='/' onClick={() => setMenu("home")} className={menu === 'home' ? 'active' : ''}>Home</Link>
        </li>
        <li>
          <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === 'menu' ? 'active' : ''}>Menu</a>
        </li>
        <li>
          <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === 'mobile-app' ? 'active' : ''}>Mobile App</a>
        </li>
        <li>
          <a href='#footer' onClick={() => setMenu("contact us")} className={menu === 'contact us' ? 'active' : ''}>Contact Us</a>
        </li>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="" />
        <div className='navbar-search-icon'>
          <Link to='/cart'>
            <img src={assets.basket_icon} alt="" />
            {getTotalCartAmount() > 0 && <div className='dot'></div>}
          </Link>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
}
export default Navbar;