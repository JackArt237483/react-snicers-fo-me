import React, { useState } from 'react'
import plus from "..//..//other/Vector (21).svg"
import cheked from "..//..//liked/chekedee.svg"
import active from "..//..//liked/Active.svg"
import UnAvtive from "..//..//liked/UnActive.svg"
import classes from "./card.module.scss"

function Card({ onClickPlus, onClickLike, image, name, prize , }) {
  const [clickBtn , setClickBtn] = useState(true)
  const [clickToFavorite , setClickToFavorite] = useState(false)

  const addButton = () => {
    onClickPlus({image, name, prize})
    setClickBtn(!clickBtn)
  }
  const addFavorite  = () => {
    setClickToFavorite(!clickToFavorite)
  }

  return (
    <div>
       <div className={classes.card}>
          <div onClick={onClickLike} className={classes.favorite}>
            <img onClick={addFavorite} src={clickToFavorite ? active : UnAvtive} alt="like"/>
          </div>
          <img width={133} height={112} src={image} alt="sneaker"/>
          <h5>{name}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{prize}руб</b>
              </div>
              <img  
              onClick={addButton}
              className={classes.plus}
              src={clickBtn ? plus : cheked}
              alt="img"/>
          </div>
        </div>

    </div>
  )
}

export default Card
