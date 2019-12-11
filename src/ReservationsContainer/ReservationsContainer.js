import React from 'react'
import './ReservationsContainer.css'
import ReservationsCard from '../ReservationsCard/ReservationsCard'

const ReservationsContainer = ({ reservations, removeReservation }) => {
  let reservationCards = reservations.map(reservation => {
    return <ReservationsCard 
              key={reservation.id}
              removeReservation={removeReservation}
              {...reservation}/>
  })
  return (
    <div>
      {reservationCards}
    </div>
  )
}

export default ReservationsContainer