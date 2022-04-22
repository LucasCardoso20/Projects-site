import React, { useState } from 'react'
import bigtwo from '../../assets/bigtwo.png'
import './navbar.scss'


 const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false)
  
  return (
    <>
    <header id="header" className='container'>
      <div className='logo'>
        <img src={bigtwo}/>
      </div>
  <nav className="nav">
    <button className="toggle-menu" onClick={()=>setShowMenu(!showMenu)}>
      <span></span>
    </button>
  </nav>
</header>

<div id="menu" className={showMenu ? 'open' : ''}>
  <nav className="main-nav">
    <ul>
      <li>
        <a href="https://thebigtwo.vercel.app/">
          Blog
        </a>
      </li>
      <li>
        <a href="#">
          Quiz
        </a>
      </li>
      
      <li>
        <a href="#">
          Memories
        </a>
      </li>
    </ul>
  </nav>
  
  <footer className="menu-footer">
    <nav className="footer-nav">
      <ul>
        <li>
          <a href="https://www.youtube.com/">
          <i className="fa-brands fa-youtube"></i>
            Youtube
          </a>
        </li>
        <li>
          <a href="https://br.pinterest.com/marianasifonte/nossa-cole%C3%A7%C3%A3o-interna/">
            <i className="fa fa-envelope fa-fw"></i>
            Pinterest
          </a>
        </li>
      </ul>
    </nav>
  </footer>
</div>
</>
  )
}

export default NavBar