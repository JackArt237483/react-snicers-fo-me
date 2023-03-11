import React from 'react'
import logo from "..//img/other/logo.png"
import point from "..//img/other/point.svg"
import man from "..//img/other/man.svg"
import cach from "..//img/other/Union.svg"

function Header() {
  return (
    <div>
      <header className="d-flex justify-between align-center p-40">
         <div className='d-flex align-center'>
          <img style={{width:"40px"}} src={logo} alt="logo"/>
          <div className='items'>
            <h3>REACT SNEAKERS</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
         </div>
         <ul className="d-flex align-center">
          <li className="mr-30">
          <img src={point} alt="logo"/>
            <span>1205 руб.</span>
            </li> 
          <li>
          <img  className="mr-30" src={man} alt="logo"/>
          <img src={cach} alt="logo"/>
          </li>
         </ul>
      </header>
    </div>
  )
}

export default Header
