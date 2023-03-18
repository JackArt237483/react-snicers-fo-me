import React from 'react'
import removeBtn from "..//liked/removebtn.svg"
import arrow from "..///liked/arrow.svg"

function DrawerCach( {onClickClose, items = [] }) {
  return (
    <div>  
     <div  className="overlay">
          <div className="drawer d-flex flex-column">
            <h2 className="d-flex justify-between mb-30">
              Корзина 
            <img  onClick={onClickClose} className="removeBt cu-p" width={32} height={32} src={removeBtn} alt="close"/></h2>
          
                  <div className="item">

                 {
                  items.map((obj) => (
               <div key={obj.id} className="cardItem d-flex align-center mb-20">
                    <div
                    style={{backgroundImage: `url(${obj.image})`}}
                     className="backImage">
                      
                    </div>
                    <div className="mr-20 flex">
                      <p className="mb-5">{obj.name}</p>
                      <b>{obj.prize}</b>
                    </div>
                      <img  className="removeBt" width={32} height={32} src={removeBtn} alt="remove"/>
                  </div>
                  ))
                 }

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
