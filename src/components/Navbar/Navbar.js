import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import './Navbar.css';

function Navbar() {

   // Hide/Show Hamburger menu
   const [click, setClick] = useState(false)
   const handleClick = () => { setClick(!click) };

   // Show/Hide Sign up button on mobile
   const [button, setButton] = useState(true);
   const showButton = () => {
      if (window.innerWidth <= 960) {
         setButton(false);
      } else {
         setButton(true);
      }
   }
   useEffect(() => {
      showButton();
   }, []);
   window.addEventListener('resize', showButton);

   // Hide mobile menu on clic
   const closeMobileMenu = () => {
      setClick(false);
   }

   return (
      <>
         <nav className="navbar">
            <div className="navbar-container">
               {/* Logo */}
               <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                  TRVLR <i className='fab fa-typo3'></i>
               </Link>

               {/* Hamburger menu */}
               <div className="menu-icon" onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
               </div>

               {/* Links - Nav Menu*/}
               <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  {/* Links items */}
                  <li className='nav-item'>
                     <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                     </Link>
                  </li>
                  <li className='nav-item'>
                     <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                        Services
                     </Link>
                  </li>
                  <li className='nav-item'>
                     <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                        Products
                     </Link>
                  </li>
                  <li>
                     <Link
                        to='/sign-up'
                        className='nav-links-mobile'
                        onClick={closeMobileMenu}
                     >
                        Sign Up
                     </Link>
                  </li>
               </ul>

               {button && (
                  <Button buttonStyle='btn--outline'>
                     SIGN UP
                  </Button>
               )}
            </div>
         </nav>
      </>
   )
}

export default Navbar
