import React from 'react'
import ReservationsCard from '../ReservationsCard/ReservationsCard'

const ReservationsContainer = ({ reservations }) => {
  let reservationCards = reservations.map(reservation => {
    return <ReservationsCard key={reservation.id}{...reservation}/>
  })
  return (
    <div>
      {reservationCards}
    </div>
  )
}

export default ReservationsContainer