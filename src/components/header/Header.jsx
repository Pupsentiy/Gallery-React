import React from 'react'
import './Header.scss'
import logo from '../../assets/img/logo/compositeLayer.svg'


const Header = () => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <img className='logo' src={logo} alt="logo" />
        <p>Agency</p>
      </div>
      <nav className='header__nav'>
        <ul className='header__list'>
          <li className='header__item'>
            <a href="#" className='header__link'>About</a>
          </li>
          <li className='header__item'>
            <a href="#" className='header__link'>Services</a>
          </li>
          <li className='header__item'>
            <a href="#" className='header__link'>Pricing</a>
          </li>
          <li className='header__item'>
            <a href="#" className='header__link'>Blog</a>
          </li>
        </ul>
      </nav>
      <button className='header__contact'>
        <a className='contact__link' href="#">Contact</a>
      </button>

    </header>


  )
}

export default Header