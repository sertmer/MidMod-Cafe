import React from 'react'

const ReservationsCard = ({id, name, date, time, number }) => {
  console.log(id)
  return (
    <article>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of Guests: {number}</p>
    </article>
  )
}

export default ReservationsCard