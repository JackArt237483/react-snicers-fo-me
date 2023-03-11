import React from 'react'
import like from "..//img/liked/liked.svg"
import sniker from "..//img/imgCross/image 5 (1).png"
import vector from "..//img/other/Vector (21).svg"

function Card() {
  return (
    <div>
       <div className="card">
          <div className="favorite">
            <img src={like} alt="like"/>
          </div>
          <img width={133} height={112} src={sniker} alt=""/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12999 руб</b>
              </div>
              <button className="button">
              <img width={11} height={11} src={vector} alt="img"/>
              </button>
          </div>
        </div>

    </div>
  )
}

export default Card
