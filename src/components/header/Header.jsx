import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../Assets/nisi.jpg'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5> Hello i'm </h5>
        <h1>Nisitha</h1>
        <h5 className='text-light'>Front End Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt='me' />
          <a href='#contact' className='scroll_down'>
            Scroll Down
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
