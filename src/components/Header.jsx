import { headerNav } from '@/constants'
import React, { useState } from 'react'

const Header = () => {
  const [show, setShow] = useState(false);


  const toggleMenu = () => {
    setShow((prevshow)=> !prevshow)
  }

  return (
    <header id="header" role="banner">
        <div className="header__inner">
            <h1 className="header__logo">
                <a href="">PortFolio <em>next.js</em></a>
            </h1>
            <nav className={`header__nav ${show ? "show" : ""}`} role="navigation" aria-label="메인 메뉴">
                <ul>
                  {headerNav.map((nav, key)=> (
                    <li key={key}>
                      <a href={nav.url}>{nav.title}</a>
                    </li>
                  ))}
                </ul>
            </nav>
            <div class="header__nav__mobile" 
                id="headerToggle" 
                aria-controls="primary-menu" 
                aria-expanded={show ? "true" : "false"}
                ole="button" 
                tabindex="0"
                onClick={toggleMenu}
                >
                <span></span>
            </div>
        </div>
    </header>
  )
}

export default Header
