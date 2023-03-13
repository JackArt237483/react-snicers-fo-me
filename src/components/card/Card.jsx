import React from 'react'
import like from "..//..//img/liked/liked.svg"
import vector from "..//..//img/other/Vector (21).svg"
import classes from "./card.module.scss"

function Card(props) {

  return (
    <div>
       <div className={classes.card}>
          <div onClick={() => alert("Hi my name is Artem")} className={classes.favorite}>
            <img src={like} alt="like"/>
          </div>
          <img width={133} height={112} src={props.imageUrl} alt="sneaker"/>
          <h5>{props.name}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{props.prize}руб</b>
              </div>
              <button onClick={props.onClick} className={classes.button}>
              <img width={11} height={11} src={vector} alt="img"/>
              </button>
          </div>
        </div>

    </div>
  )
}

export default Card
