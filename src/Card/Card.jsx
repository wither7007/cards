import React from "react"
import "./card.css"
const Card = props => {
  return (
    <div className="card">
      <div className="front">
        Front of card is <b>{props.front}'s</b>
      </div>
      <div className="back">
        Back of card is <b>{props.back}'s</b>
      </div>
    </div>
  )
}

export default Card
