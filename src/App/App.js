import React, { Component } from 'react';
import './App.css';
import ReservationsContainer from '../ReservationsContainer/ReservationsContainer'
import Form from '../Form/Form'
import { getReservations, postReservation, cancelReservation } from '../apiCalls'
class App extends Component {
  constructor() {
    super() 
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    getReservations()
      .then(reservations => this.setState({ reservations }))
      .catch(err => console.log(err))
  }

  addReservation = (newReservation) => {
    postReservation(newReservation)
      .then(reservation => {
        this.setState({reservations: [...this.state.reservations, reservation]})
      })
      .catch(err => console.log(err))
   
  }

  removeReservation = (id) => {
    cancelReservation(id)
      .then(activeReservations => this.setState({reservations: activeReservations}))
      .catch(err => console.log(err))
  }
  
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
        <Form 
          addReservation={this.addReservation}
        />
        </div>
        <div className='resy-container'>
          <ReservationsContainer 
            reservations={this.state.reservations}
            removeReservation={this.removeReservation}
          />
        </div>
      </div>
    )
  }
}

export default App;
