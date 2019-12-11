import React from 'react'
import './ReservationsCard.css'

const ReservationsCard = ({id, name, date, time, number, removeReservation }) => {
  console.log(id)
  return (
    <article>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of Guests: {number}</p>
      <button
      onClick={() => removeReservation(id)}>cancel</button>
    </article>
  )
}

export default ReservationsCard