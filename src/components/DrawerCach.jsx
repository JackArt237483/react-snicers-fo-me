import React from 'react'
import removeBtn from "..//img/liked/removebtn.svg"
import arrow from "..//img/liked/arrow.svg"

function DrawerCach() {
  return (
    <div>  
     <div style={{display: "none"}}className="overlay">
          <div className="drawer d-flex flex-column">
            <h2 className="d-flex justify-between mb-30">
              Корзина 
            <img  className="removeBt cu-p" width={32} height={32} src={removeBtn} alt="remove"/></h2>
          
                  <div className="item">
                    
                  <div className="cardItem d-flex align-center mb-20">
                    <div className="backImage"></div>
                    <div className="mr-20 flex">
                      <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                      <b>12999 руб</b>
                    </div>
                      <img  className="removeBt" width={32} height={32} src={removeBtn} alt="remove"/>
                  </div>

                  <div className="cardItem d-flex align-center mb-20">
                    <div className="backImage"></div>
                    <div className="mr-20 flex">
                      <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                      <b>12999 руб</b>
                    </div>
                      <img  className="removeBt" width={32} height={32} src={removeBtn} alt="remove"/>
                  </div>

                  </div>

                  <div className="total-block" >
                    <ul>
                    <li>
                          <span>Итого:</span>
                          <div></div>
                          <b>21 498 руб. </b>
                    </li>
                    <li>
                        <span>Налог 5%:</span>
                        <div></div>
                        <b>1074 руб. </b>
                      </li> 
                    </ul>  
                  <button className="greenButton">Оформить заказ <img src={arrow} alt=""/></button>
              </div>
          </div>
        </div>
    </div>
  )
}

export default DrawerCach
