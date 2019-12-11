export const getReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations	')
    .then(response => {
      if (!response.ok) {
        throw Error('Error fetching reservations');
      }
      return response.json();
    });
}

export const postReservation = (newReservation) => {
  const options = {
    method: 'POST',
      body: JSON.stringify(newReservation),
      headers: {
        'Content-Type': 'application/json'  
      }
  }

  return fetch('http://localhost:3001/api/v1/reservations', options)
    .then(res => {
      if(!res.ok) {
        throw Error('Something is not right, try again later')
      }
      return res.json()})
}

export const cancelReservation = (id) => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return fetch(`http://localhost:3001/api/v1/reservations/${id}`, options)
    .then(res => {
      if(!res.ok) {
        throw Error('Something is not right, try again later')
      }
      return res.json()
    }).catch(error => {
      throw Error(error.message)
    });
}