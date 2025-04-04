import { useState } from 'react';
import { useScroll } from '../hooks/useScroll';
import './Menu.css';  

function Menu() {
  
    const [isOpen, setIsOpen] = useState(false);
    const scrolled = useScroll();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
      <nav className={`menu ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <button 
            className={`nav-toggle ${isOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
                
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li>
              <a
               href="#speakers" 
               onClick={() => 
                setIsOpen(false)
              }>speakers</a>
          </li>
          <li>
              <a
               href="#offerts" 
               onClick={() => 
                setIsOpen(false)
              }>offerts</a>
          </li>
          <li>
              <a
               href="#form" 
               onClick={() => 
                setIsOpen(false)
              }>form</a>
          </li>
          <li>
              <a
               href="#location" 
               onClick={() => 
                setIsOpen(false)
              }>location</a>
          </li>
        </ul>
       </div>
     </nav>
    );
};

export default Menu;